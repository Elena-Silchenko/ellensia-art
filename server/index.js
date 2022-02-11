const multipart = require('aws-lambda-multipart-parser')
const fetch = require('isomorphic-fetch')
const nodemailer = require('nodemailer')
require('dotenv').config()
const fs = require('fs')

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

async function checkRecaptcha(token) {
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`, {
    method: 'POST',
  })
  const body = await res.json()
  return body.success
}

async function sendMail(message, image) {
  const mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD
    }
  })

  const email = {
    from: process.env.GMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: 'Новый заказ',
    text: message
  }

  if (image) {
    email.attachments = [{
      filename: image.filename,
      contentType: image.contentType,
      content: Buffer.from(image.content, 'binary'),
    }]
  }

  const res = await mail.sendMail(email)
}

exports.handler = async (event) => {
  try {
    event.body = Buffer.from(event.body, 'base64').toString('binary')

    const body = multipart.parse(event, false)

    if (!await checkRecaptcha(body.token)) {
      return {
        statusCode: 403,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          error: "Wrong token"
        }),
      }
    }

    await sendMail([
      `From: ${Buffer.from(body.name, 'binary').toString('utf-8')} <${Buffer.from(body.email, 'binary').toString('utf-8')}>`,
      `Style: ${Buffer.from(body.style, 'binary').toString('utf-8')}`,
      `${Buffer.from(body.comment, 'binary').toString('utf-8')}`
    ].join("\n"), body.image)

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify('ok'),
    }
  } catch (e) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: e.message
    }
  }
}

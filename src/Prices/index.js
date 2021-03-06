import { useState, useEffect } from 'react'
import { Button, Col, InputGroup, Modal, Row, Form } from 'react-bootstrap'

import './index.scss'

import ImageCheck from './check.svg'

import ImageSketch from './sketch.png'
import ImageColor from './color.png'
import ImagePainting from './painting.png'

const DefaultForm = {
  image: '',
  name: '',
  comment: '',
  email: ''
}

function PriceItem({ style, price, list, image, showOrderForm }) {
  return (
    <div className="card">
      <div className="card-icon d-flex">
        <img className="m-auto" src={image} style={{ maxWidth: '110px', maxHeight: '110px' }} />
      </div>

      <h5 style={{ marginBottom: '1em' }}>
        {style}
      </h5>

      <div style={{ fontSize: '1.7em' }}>{price}</div>

      <div className="card-list-wrapper">
        <ul>
          {
            list.map((item, index) => (
              <li key={index}>
                <img src={ImageCheck} alt="" style={{ width: '32px', height: '32px' }} />
                {item}
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        <a className="btn card-order-button" onClick={() => showOrderForm(style)}>
          Заказать
        </a>
      </div>
    </div>
  )
}

export default function Prices() {
  const [showOrder, setShowOrder] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [orderStyle, setOrderStyle] = useState(null)

  return (
    <div id="price" className="prices">
      <div style={{ margin: '2em 0', padding: '0 1em' }}>
        <h1>
          Прайс
        </h1>
      </div>

      <div className="cards">
        <PriceItem
          style="Графика черно-белая"
          price="от &euro; 23"
          list={[
            "карандашный черно-белый скетч",
            "1 вариант",
            "1 корректировка",
            "файл для печати",
            "файл jpg",
            "1 человек (за каждого следующего доплата)",
            "mock up за доплату"
          ]}
          image={ImageSketch}
          showOrderForm={(style) => { setOrderStyle(style); setShowOrder(true) }}
        />

        <PriceItem
          style="Графика цветная"
          price="от &euro; 27"
          list={[
            "карандашный черно-белый скетч",
            "2 варианта",
            "2 корректировки",
            "файл для печати",
            "файл jpg",
            "Человек в полный рост",
            "1 человек (за каждого следующего доплата)",
            "mock up за доплату"
          ]}
          image={ImageColor}
          showOrderForm={(style) => { setOrderStyle(style); setShowOrder(true) }}
        />

        <PriceItem
          style="Живопись"
          price="от &euro; 35"
          list={[
            "карандашный черно-белый скетч",
            "2 варианта",
            "2 корректировки",
            "файл для печати",
            "файл jpg",
            "Человек в полный рост",
            "1 человек (за каждого следующего доплата)",
            "mock up"
          ]}
          image={ImagePainting}
          showOrderForm={(style) => { setOrderStyle(style); setShowOrder(true) }}
        />
      </div>

      <OrderPopup style={orderStyle} show={showOrder} onClose={(formSent) => { setShowOrder(false); setShowConfirmation(formSent) }} />

      <Confirmation show={showConfirmation} onClose={() => setShowConfirmation(false)} />
    </div>
  )
}

function OrderPopup({ style, show, onClose }) {
  const [form, setForm] = useState(DefaultForm)

  const [preview, setPreview] = useState(null)

  const [validated, setValidated] = useState(false)

  useEffect(() => {
    if (show) {
      setValidated(false)
    }
  }, [show])

  function imageSelected(file) {
    if (!file) return

    setForm({ ...form, image: file })
    setPreview(URL.createObjectURL(file))
  }

  async function sendForm(event) {
    setValidated(true)

    const htmlForm = event.currentTarget
    if (htmlForm.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    const data = new FormData()
    data.append('style', style)
    data.append('image', form.image)
    data.append('name', form.name)
    data.append('comment', form.comment)
    data.append('email', form.email)

    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute('6Lcpsl8eAAAAALihkxQ5Kv8ZzsCQ6lzLD4E3HheK', { action: 'create_comment' })
      data.append('token', token)

      const res = await fetch('https://n3fxpb0zpg.execute-api.eu-central-1.amazonaws.com/', {
        method: 'POST',
        body: data
      })

      if (res.ok) {
        onClose(true)
      }
    })
  }

  return (
    <Modal show={show} onHide={() => onClose(false)} className="order-form">
      <Form noValidate validated={validated} onSubmit={(e) => sendForm(e)}>
        <Modal.Header closeButton>
          <Modal.Title>{style}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm="6">
              <div>
                <div className="mb-2">Описание процесса</div>
                <ol>
                  <li>Отправка формы с прикрепленной фотографией</li>
                  <li>Уточняем детали и я высылаю ссылку на оплату</li>
                  <li>Оплата</li>
                  <li>Приступаю к работе</li>
                  <li>Заказ готов в течении 2-5 рабочих дней</li>
                </ol>
              </div>
            </Col>

            <Col sm="6">
              <Form.Group className="mb-2">
                <Form.Label>
                  <span className="button-form btn pointer" tabIndex="0" >
                    Загрузить фото
                  </span>
                  <Form.Control
                    required
                    type="file"
                    accept="image/*"
                    className="d-none"
                    onChange={(e) => imageSelected(e.target.files[0])}
                  />
                  <Form.Control.Feedback type="invalid">
                    Загрузите фото
                  </Form.Control.Feedback>
                </Form.Label>
              </Form.Group>

              {preview && (
                <div>
                  <img src={preview} style={{ maxWidth: '200px', maxHeight: '100px' }} />
                </div>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                className="form-name my-border-color"
                required
                type="text"
                placeholder="Как к Вам обращаться"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Мне будет неудобно отвечать Вам не зная Вашего имени
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <InputGroup className="mb-3">
            <div className="w-100">
              <div className="mb-2">Комментарии</div>
              <Form.Control
                required
                className="w-100 form-comment price-comment my-border-color"
                as="textarea"
                placeholder="Оставьте, пожалуйста, пожелания к заказу"
                value={form.comment}
                onChange={e => setForm({ ...form, comment: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Напишите пару слов, чтобы лучше понять заказ
              </Form.Control.Feedback>
            </div>
          </InputGroup>

          <Form.Group className="mb-3">
            <Form.Label>Ваш Email для связи</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите email"
              required
              className="my-border-color"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Оставьте свой email адрес, чтобы я Вам могла ответить
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button
            type="submit"
            className="button-form"
          >
            Отправить
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

function Confirmation({ show, onClose }) {
  return (
    <Modal className="p-5" show={show}>
      <div className="p-4">
        <div className="d-flex">
          <Modal.Header className="m-auto mb-2 fs-5">Благодарю, что выбрали меня!</Modal.Header>
        </div>
        <p>
          В течении рабочего дня я с Вами свяжусь.
        </p>
        <p>
          Нет ничего прекраснее, чем передавать красоту через искусство. "Жизнь - коротка, искусство - вечно"
        </p>

        <hr />
        <div className="d-flex justify-content-end">
          <Button style={{ background: '#8ce6dd', color: '#fff', outline: 'none', border: 'none' }} onClick={() => onClose()}>
            Закрыть
          </Button>
        </div>
      </div>
    </Modal>
  )
}

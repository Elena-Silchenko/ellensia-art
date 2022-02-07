import { useState } from 'react'
import { Button, Col, InputGroup, Modal, Row, Form } from 'react-bootstrap'
import ImageCheck from './check.svg'

const DefaultForm = {
  image: '',
  comment: '',
  email: ''
}

function PriceItem({ title, list }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [form, setForm] = useState(DefaultForm)

  const [preview, setPreview] = useState(null)

  function imageSelected(file) {
    if (!file) return

    setForm({ ...form, image: file })
    setPreview(URL.createObjectURL(file))
  }
  console.log(form.image)

  async function sendForm() {
    const data = new FormData()
    data.append('style', title)
    data.append('image', form.image)
    data.append('comment', form.comment)
    data.append('email', form.email)

    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute('6Lcpsl8eAAAAALihkxQ5Kv8ZzsCQ6lzLD4E3HheK', { action: 'create_comment' })
      data.append('token', token)

      const res = await fetch('https://api.ellensia-art.com/', {
        method: 'POST',
        body: data
      })

      const body = await res.json()

      setShow(false)
    })
  }

  return (
    <div className="card">
      <div className="card-icon"></div>

      <h5 style={{ marginBottom: '1em' }}>
        {title}
      </h5>

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
        <a className="btn card-order-button" onClick={handleShow}>
          Заказать
        </a>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                <div className="mb-2">
                  <label>
                    <span className="button-form btn pointer" tabIndex="0" >
                      Загрузить фото
                    </span>
                    <input type="file" accept="image/*" className="d-none" onChange={(e) => imageSelected(e.target.files[0])} />
                  </label>
                </div>

                {preview && (
                  <div>
                    <img src={preview} style={{ maxWidth: '200px', maxHeight: '100px' }} />
                  </div>
                )}
              </Col>
            </Row>

            <InputGroup className="mb-3">
              <div className="w-100">
                <div className="mb-2">Комментарии</div>
                <Form.Control
                  className="w-100 form-comment"
                  style={{ minHeight: '7em', borderColor: '#8ce6dd', boxShadow: 'none' }}
                  as="textarea"
                  value={form.comment}
                  onChange={e => setForm({ ...form, comment: e.target.value })}
                />
              </div>
            </InputGroup>

            <Form.Group className="mb-3">
              <Form.Label>Ваш Email для связи</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите email"
                required
                style={{ borderColor: '#8ce6dd' }}
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-form" onClick={() => sendForm()} >
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default function Prices() {
  return (
    <div id="price">
      <div style={{ margin: '2em 0', padding: '0 1em' }}>
        <h1>
          Прайс
        </h1>
      </div>

      <div className="cards">
        <PriceItem
          title="Графика черно-белая"
          list={[
            "карандашный черно-белый скетч",
            "1 вариант",
            "1 корректировка",
            "файл для печати",
            "файл jpg",
            "1 человек (за каждого следующего доплата)",
            "mock up за доплату"
          ]}
        />

        <PriceItem
          title="Графика цветная"
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
        />

        <PriceItem
          title="Живопись"
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
        />
      </div>
    </div>
  )
}

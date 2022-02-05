import { useState } from 'react'
import { Button, Col, InputGroup, Modal, Row, Form } from 'react-bootstrap'
import ImageCheck from './check.svg'

function PriceItem({ title, list }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)

  function imageSelected(file) {
    if (!file) return

    setSelectedFile(file)
    setPreview(URL.createObjectURL(file))
  }

  return (
    <div className="card" style={{ width: '15em', maxWidth: '25em', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
      <div className="card-icon"></div>

      <h5 style={{ marginBottom: '1em' }}>
        {title}
      </h5>

      <div style={{ marginBottom: '2em', textAlign: 'left', flexGrow: '1' }}>
        <ul style={{ listStyleType: 'none', paddingInlineStart: '.5em', marginBlockStart: '.5em', marginBlockEnd: '.5em' }}>
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
        <a className="btn" style={{ background: '#e1ccc6', color: '#fff', fontSize: '2em', padding: '.1em 1em', fontWeight: '300', outline: 'none', border: 'none' }} onClick={handleShow}>
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
                    <span className="btn btn-primary pointer" tabIndex="0">
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
                <Form.Control className="w-100" style={{ minHeight: '7em' }} as="textarea" />
              </div>
            </InputGroup>

            <Form.Group className="mb-3">
              <Form.Label>Ваш Email для связи</Form.Label>
              <Form.Control type="email" placeholder="Введите email" required />
            </Form.Group>
          </Form>      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
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
import ImagePhoto from './photo.png'
import ImageLeaves from './leaves.png'
import Logo from './logo.png'

import MyPhoto from './my-photo.jpg'

import Benefints from './Benefits'
import Portfolio from './Portfolio'
import Prices from './Prices'
import GoUp from './GoUp'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container className="align-items-start justify-content-start">
          <Navbar.Brand className="p-3">
            <img src={Logo} className="logo" alt="" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mt-4 mb-3" />
          </Navbar.Brand>
          <div className="d-flex mt-3 flex-grow-1">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto flex-grow-1 d-flex justify-content-around">
                <Nav.Link href="#portfolio">Портфолио</Nav.Link>
                <Nav.Link href="#price">Прайс</Nav.Link>
                <Nav.Link href="#about">Обо мне</Nav.Link>
                <Nav.Link href="#contact">Контакты</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <Container>
        <div className="intro-wrapper d-flex flex-column-reverse flex-lg-row">
          <div className="intro">
            <div className="intro-description">
              <div className="intro-description-title">
                Создам качественный цифровой портрет или иллюстрацию с капелькой волшебства
              </div>

              <ul>
                <li className="mb-1">
                  &#9825; Это чудесный подарок не только себе, но и близким, который обязательно удивит и будет радовать всю жизнь
                </li>
                <li className="mb-1">
                  &#9825; Это дополнение интерьера
                </li>
                <li className="mb-1">
                  &#9825; Это выделяющаяся аватарка для социальных сетей и мессенджеров
                </li>
                <li className="mb-1">
                  &#9825; Это печать на ткани (футболки, свитшоты)
                </li>
                <li className="mb-1">
                  &#9825; Нарисую также портреты ваших пушистых любимцев
                </li>
                <li>
                  &#9825; Подарите себе немного волшебства и удивите близких
                </li>
              </ul>
            </div>

            <div className="button-order-wrapper">
              <img src={ImageLeaves} alt="" />

              <div>
                <a href="#price" className="btn btn-default">
                  Заказать
                </a>
              </div>
            </div>
          </div>

          <div className="drawing d-none d-lg-block">
            <img src={ImagePhoto} className="photo" alt="" />
            <img src={ImageLeaves} className="leaves" alt="" />
          </div>

          <div className="d-block d-lg-none mt-3">
            <img src={ImagePhoto} className="photo" alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />

      <Benefints />

      <Container>
        <div className="order">
          <div className="order-description">
            <div className="oreder-title">
              <h1>
                Что необходимо для оформления заказа
              </h1>
            </div>

            <ul>
              <li>
                - Фотография хорошего качества, где человек узнаваем. Если сложно определиться с фотографией, можно прислать несколько вариантов и я вам помогу выбрать самый удачный вариант.
              </li>
              <li>
                - Выбрать стиль выполнения портрета, который вы можете выбрать в разделе "Портфолио" (при наведении на изображение появится описание)
              </li>
              <li>
                - Если у вас остались вопросы, пишите мне и в ближайшее время я с вами свяжусь и отвечу на все вопросы.
              </li>
              <li>
                - После того, как вы определились и полностью оформили заказ, я приступаю к работе, после чего вы оплачиваете заказ.
              </li>
              <li>
                - Оплата принимается несколькими способами:
              </li>
            </ul>

            <div>
              Сроки выполнения работы: от 2х до 5 рабочих дней, в зависимости от сложности выполнения.
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <Portfolio />
      </Container>

      <Container>
        <Prices />
      </Container>

      <Container>
        <div id="about" className="about d-flex flex-column mb-5">
          <div className="about-title mb-3">
            <div className="d-flex justify-content-center align-items-center">
              <div className="about-line-left"></div>
              <h1 className="mx-2">Обо мне</h1>
              <div className="about-line-right"></div>
            </div>
          </div>

          <div className="d-flex m-auto flex-column-reverse flex-md-row">
            <div className="about-description me-4">
              <div className="mb-1">
                Меня зовут Елена и я художник-иллюстратор. Работаю в этой сфере уже около 7 лет. Я маньяк своей работы и писать портреты людей это моя большая страсть. Для меня это видеть красоту людей и раскрывать через портрет их внутреннюю энергию. Когда я пишу портрет, мне кажется, что творится волшебство. Обожаю создавать уникальные иллюстрации, которые зарождаются в моей голове! Постоянно нахожусь в процессе развития, не сижу на месте и улучшаю свои навыки.
              </div>
              <div className="mb-1">
                Мои работы покупают по всему миру: Япония, США, Франция, Нидерланды, Англия, Китай, Украина, Россия и другие.
              </div>
              <div className="mb-1">
                Мои навыки: Adobe Photoshop, Adobe Illustrator и Adobe InDesign
              </div>
              <div className="mb-1">
                Моя страсть: цифровая живопись
              </div>
              <div className="mb-1">
                ˗ˏ Надеюсь, что моя фантазия будет полезна вам ˊ˗
              </div>
              <div className="mb-1">
                Сделайте со мной шаг в мир волшебства!
              </div>
            </div>

            <div className="mb-3 mb-md-0">
              <img src={MyPhoto} alt="" />
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div id="contact" className="mb-2 d-flex">
          <div className="flex-grow-1"></div>

          <div>
            <div>
              <a href="mailto:elen.silchenko@gmail.com">ellensia.art@gmail.com</a>
            </div>
          </div>

          <div className="flex-grow-1"></div>
        </div>
      </Container>

      <div className="mb-1 text-center">
        Copyright © 2020 Ellensia-Art.com
      </div>

      <GoUp />
    </>
  )
}

export default App

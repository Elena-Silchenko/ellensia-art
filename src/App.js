import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.scss'

import ImagePhoto from './photo.png'
import ImageLeaves from './leaves.png'
import ImageBrush from './brush.png'
import Logo from './logo.png'

import MyPhoto from './photo_2020-05-10_17-44-59.jpg'

import Benefints from './Benefits'
import Portfolio from './Portfolio'
import Prices from './Prices'

function Header() {
  return (
    <>
      <div className="d-flex flex-row-reverse flex-wrap">
        <div className="menu flex-grow-1 position-relative">
          <nav className="p-3">
            <ul>
              <li>
                <a href="#portfolio" >Портфолио</a>
              </li>

              <li>
                <a href="#price">Прайс</a>
              </li>

              <li>
                <a href="#about">Обо мне</a>
              </li>

              <li>
                <a href="#contact">Контакты</a>
              </li>
            </ul>
          </nav>

          <img src={ImagePhoto} className="photo" alt="" />
          <img src={ImageLeaves} className="leaves" alt="" />
          <img src={ImageBrush} className="brush" alt="" />
        </div>

        <div className="advert flex-grow-1">
          <div>
            <img src={Logo} className="logo" alt="" />
          </div>

          <div className="advert-description">
            <div>
              Создам качественный цифровой портрет или иллюстрацию с капелькой волшебства.
            </div>

            <ul>
              <li>
                ✎ Это замечательный\чудесный подарок не только себе, но и близким, который обязательно удивит и будет радовать долгое время\всю жизнь.
              </li>
              <li>
                ✐ Это дополнение интерьера.
              </li>
              <li>
                ✎ Это выделяющая\ аватарка для социальных сетей.
              </li>
              <li>
                ✐ Это печать на ткани (на футболках, свитшотах).
              </li>
              <li>
                ✎ Нарисую также портреты ваших пушистых любимцев.
              </li>
              <li>
                ✐ Подарите себе немного волшебства и удивите близких.
              </li>
            </ul>
          </div>

          <div className="button-order-wrapper">
            <img src={ImageLeaves} alt="" />

            <div style={{ paddingBottom: '8em' }}>
              <a href="#price" className="btn btn-default">
                Заказать
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <Benefints />

      <div className="m-auto order">
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

        <Portfolio />

        <Prices />

        <div id="about" className="mb-5em">
          <div className="about-title-wrapper">
            <div className="about-title d-flex">
              <div className="about-line-left me-2"></div>
              <h1>Обо мне</h1>
              <div className="about-line-right ms-2"></div>
            </div>
          </div>

          <div className="about-description d-flex m-auto">
            <div className="about-description-wrapper me-4 flex-grow-1">
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
                Надеюсь, что моя фантазия будет полезна вам. :)
              </div>
              <div className="mb-1">
                Сделайте со мной шаг в мир волшебства!
              </div>
            </div>

            <div>
              <img src={MyPhoto} alt="" style={{ height: '20em' }} />
            </div>
          </div>
        </div>

        <div id="contact" className="mb-2 d-flex">
          <div className="flex-grow-1"></div>

          <div>
            <div>
              <a href="mailto:elen.silchenko@gmail.com">elen.silchenko@gmail.com</a>
            </div>
          </div>

          <div className="flex-grow-1"></div>
        </div>
      </div>

      <div className="mb-1 text-center">
        Copyright © 2020 Ellensia-Art.com
      </div>
    </>
  )
}

export default App

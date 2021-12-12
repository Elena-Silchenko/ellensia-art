import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

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
      <div style={{ display: 'flex', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
        <div style={{ width: '40em', flexGrow: '1', height: '25em', backgroundColor: '#fcf2f3', position: 'relative' }}>
          <nav style={{ position: 'absolute', right: '0', zIndex: '1' }}>
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

          <img src={ImagePhoto} alt="" style={{ width: '50%', position: 'absolute', left: '-5em', top: '8em' }} />
          <img src={ImageLeaves} alt="" style={{ width: '50%', position: 'absolute', right: '-1em', top: '0', opacity: '.3' }} />
          <img src={ImageBrush} alt="" style={{ width: '25%', position: 'absolute', left: '15em', top: '22em' }} />
        </div>

        <div style={{ width: '25em', flexGrow: '1' }}>
          <div>
            <img src={Logo} alt="" style={{ height: '150px' }} />
          </div>

          <div style={{ padding: '2em 6em 1em 2em' }}>
            <div>
              Создам качественный цифровой портрет или иллюстрацию с капелькой волшебства.
            </div>

            <ul style={{ listStyleType: 'none', paddingInlineStart: '.5em', marginBlockStart: '.5em', marginBlockEnd: '.5em' }}>
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

          <div style={{ position: 'relative', textAlign: 'right' }}>
            <img src={ImageLeaves} alt="" style={{ zIndex: '-1', position: 'absolute', right: '0', top: '2.4em', transform: 'rotate(80deg)', width: '10em', marginTop: '-5em' }} />

            <div style={{ paddingBottom: '8em' }}>
              <a href="#price" className="btn btn-default" style={{ cursor: 'pointer', background: '#e1ccc6', color: '#fff', fontSize: '2em', padding: '.1em 1em', fontWeight: '300', outline: 'none', border: 'none' }}>
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
      <div style={{ width: '90%', margin: 'auto' }}>
        <Header />
      </div>

      <Benefints />

      <div style={{ width: '90%', margin: 'auto' }}>
        <div style={{ padding: '2em 0' }}>
          <div style={{ margin: '2em 0', padding: '0 1em' }}>
            <h1>
              Что необходимо для оформления заказа
            </h1>
          </div>

          <ul style={{ listStyleType: 'none', paddingInlineStart: '.5em', marginBlockStart: '.5em', marginBlockEnd: '.5em' }}>
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

        <div id="about" style={{ marginBottom: '3em' }}>
          <div style={{ margin: '2em 0', padding: '0 1em' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '5em', borderBottom: '2px solid #ececec', marginRight: '1em' }}></div>
              <h1>Обо мне</h1>
              <div style={{ width: '5em', borderBottom: '2px solid #ececec', marginLeft: '1em' }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto', flexGrow: 1, maxWidth: '60em' }}>
            <div style={{ width: '20em', flexGrow: 1, marginRight: '3em' }}>
              <div style={{ marginBottom: '.5em' }}>
                Меня зовут Елена и я художник-иллюстратор. Работаю в этой сфере уже около 7 лет. Я маньяк своей работы и писать портреты людей это моя большая страсть. Для меня это видеть красоту людей и раскрывать через портрет их внутреннюю энергию. Когда я пишу портрет, мне кажется, что творится волшебство. Обожаю создавать уникальные иллюстрации, которые зарождаются в моей голове! Постоянно нахожусь в процессе развития, не сижу на месте и улучшаю свои навыки.
              </div>
              <div style={{ marginBottom: '.5em' }}>
                Мои работы покупают по всему миру: Япония, США, Франция, Нидерланды, Англия, Китай, Украина, Россия и другие.
              </div>
              <div style={{ marginBottom: '.5em' }}>
                Мои навыки: Adobe Photoshop, Adobe Illustrator и Adobe InDesign
              </div>
              <div style={{ marginBottom: '.5em' }}>
                Моя страсть: цифровая живопись
              </div>
              <div style={{ marginBottom: '.5em' }}>
                Надеюсь, что моя фантазия будет полезна вам. :)
              </div>
              <div style={{ marginBottom: '.5em' }}>
                Сделайте со мной шаг в мир волшебства!
              </div>
            </div>

            <div>
              <img src={MyPhoto} alt="" style={{ height: '20em' }} />
            </div>
          </div>
        </div>

        <div id="contact" style={{ marginBottom: '1em', display: 'flex' }}>
          <div style={{ flexGrow: 1 }}></div>

          <div>
            <div>
              <a href="mailto:elen.silchenko@gmail.com">elen.silchenko@gmail.com</a>
            </div>
          </div>

          <div style={{ flexGrow: 1 }}></div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '.5em' }}>
        Copyright © 2020 Ellensia-Art.com
      </div>
    </>
  )
}

export default App

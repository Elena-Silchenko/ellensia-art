import Infinity from './dolgovechnost.png'

function Benefit({ icon, image, title, description }) {
  return (
    <div className="card me-4">
      <div className="card-icon d-flex">
        {icon && (
          <span className={'m-auto fas ' + icon} />
        )}
        {image && (
          <img src={image} className="m-auto" style={{ maxWidth: '20px', maxHeight: '20px'}} />
        )}
      </div>

      <h5 className="mb-3">
        {title}
      </h5>

      <div>
        {description}
      </div>
    </div>
  )
}

const BenefintList = [
  {
    image: Infinity,
    title: "Договечность",
    description: "Время не страшно для цифрового портрета, он не потеряет яркость и не осыпется краска, свой портрет вы сможете распечать много раз."
  },
  {
    icon: "fa-shipping-fast",
    title: "Быстрая доставка",
    description: "Быстрая доставка в любую точку мира. Не нужно ожидать пересылку портрета. Сразу после оплаты портрет будет отправлен вам по почте."
  },
  {
    icon: "fa-magic",
    title: "Необычность и простота",
    description: "Вы можете сделать приятно близкому человеку и отправить портрет просто по e-mail. Или распечатать и подарить полноценную картину."
  },
  {
    icon: "fa-infinity",
    title: "Неограниченные возможности",
    description: "Нет ограничения в размере и формате файла. Портрет можно распечатать на холсте, что придаст портрету живописность и его будет трудно отличить от портрета написанного живыми материалами."
  },
  {
    icon: "fa-hand-holding-usd",
    title: "Доступная цена",
    description: "Цена цифрового портрета на порядок ниже, чем портрет написанный живыми материалами, но если распечатать цифровой портрет на холсте, то такой портрет будет выглядеть не хуже."
  }
]

export default function Benefints() {
  return (
    <div className="benefits p-4">
      <div className="mb-5" style={{ padding: '0 1em' }}>
        <h1>
          Преимущества портрета созданного в цифровой живописи
        </h1>
      </div>

      <div className="cards">
        {
          BenefintList.map((benefit, index) => (
            <Benefit 
              key={index}
              {...benefit}
            />
          ))
        }
      </div>
    </div>
  )
}
function Benefit({ title, description }) {
  return (
    <div className="card">
      <div className="card-icon" />

      <h2 className="mb-3">
        {title}
      </h2>

      <div>
        {description}
      </div>
    </div>
  )
}

const BenefintList = [
  {
    title: "Договечность",
    description: "Время не страшно для цифрового портрета, он не потеряет яркость и не осыпется краска, свой портрет вы сможете распечать много раз."
  },
  {
    title: "Быстрая доставка",
    description: "Быстрая доставка в любую точку мира. Не нужно ожидать пересылку портрета. Сразу после оплаты портрет будет отправлен вам по почте."
  },
  {
    title: "Необычность и простота",
    description: "Вы можете сделать приятно близкому человеку и отправить портрет просто по e-mail. Или распечатать и подарить полноценную картину."
  },
  {
    title: "Неограниченные возможности",
    description: "Нет ограничения в размере и формате файла. Портрет можно распечатать на холсте, что придаст портрету живописность и его будет трудно отличить от портрета написанного живыми материалами."
  },
  {
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
              title={benefit.title}
              description={benefit.description}
            />
          ))
        }
      </div>
    </div>
  )
}
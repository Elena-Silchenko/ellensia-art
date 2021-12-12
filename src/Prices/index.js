import ImageCheck from './check.svg'

function PriceItem({ title, list }) {
  return (
    <div className="card" style={{ width: '15em', maxWidth: '25em', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
      <div className="card-icon"></div>

      <h2 style={{ marginBottom: '1em' }}>
        {title}
      </h2>

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
        <button style={{ background: '#e1ccc6', color: '#fff', fontSize: '2em', padding: '.1em 1em', fontWeight: '300', outline: 'none', border: 'none' }}>
          Заказать
        </button>
      </div>
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
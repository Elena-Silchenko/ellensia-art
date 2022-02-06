import Gallery1 from './photo_2020-05-10_16-00-31.jpg'
import Gallery2 from './photo_2020-05-10_17-20-48.jpg'
import Gallery3 from './photo_2020-05-10_17-21-04.jpg'
import Gallery4 from './photo_2020-05-10_17-21-15.jpg'
import Gallery5 from './photo_2020-05-10_17-21-25.jpg'
import Gallery6 from './photo_2020-05-10_17-21-35.jpg'

function PortfolioItem({ image, title, description }) {
  return (
    <div className="portfolio-card">
      <div>
        <img src={image} alt="" />

        <div className="portfolio-description">
          <div className="mb-1">
            <div className="portfolio-title">
              {title}
            </div>
          </div>

          <div>
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

const PortfolioItems = [
  {
    image: Gallery1,
    title: 'Черно-белая Живопись',
    description: 'Портрет выполнен с помощью сухих техник. Уголь. Подойдет к любому интерьеру, а черно-белый никогда не выходит из моды и подчеркнет глаза'
  },
  {
    image: Gallery2,
    title: 'Живопись',
    description: 'Пастель. Нежная и утонченная техника'
  },
  {
    image: Gallery3,
    title: 'Живопись',
    description: 'Масло. Сделает любой портрет как из средневековых сказок'
  },  
  { 
    image: Gallery4,
    title: 'Живопись',
    description: 'Крупные мазки. Современное искусство заполняет наши дома и такой портрет однозначно привлечет внимание ваших гостей'
  },
  { 
    image: Gallery5,
    title: 'Графика цветная',
    description: 'В стиле фешн и легкости, будто из модного журнала'
  },
  {
    image: Gallery6,
    title: 'Графика черно-белая',
    description: 'Это больше, чем просто скетч, не смотря на свою простоту передает энергию и волшебство'
  }
]

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div style={{ margin: '2em 0', padding: '0 1em' }}>
        <h1>
          Портфолио
        </h1>
      </div>

      <div className="portfolio" style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
        {
          PortfolioItems.map((item, index) => (
            <PortfolioItem 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))
        }
      </div>
    </div>
  )
}

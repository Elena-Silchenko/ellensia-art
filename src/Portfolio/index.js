import Gallery1 from './photo_2020-05-10_16-00-31.jpg'
import Gallery2 from './photo_2020-05-10_17-20-48.jpg'
import Gallery3 from './photo_2020-05-10_17-21-04.jpg'
import Gallery4 from './photo_2020-05-10_17-21-15.jpg'
import Gallery5 from './photo_2020-05-10_17-21-25.jpg'
import Gallery6 from './photo_2020-05-10_17-21-35.jpg'

function PortfolioItem({ image, title, description }) {
  return (
    <div className="portfolio-card" style={{ width: '20em', marginRight: '30px', marginBottom: '2em' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={image} alt="" style={{ width: '100%', borderRadius: '1em' }} />

        <div className="portfolio-description" style={{ position: 'absolute', background: '#fff', borderRadius: '.3em', padding: '.5em 1em', left: '1em', right: '1em' }}>
          <div style={{ marginBottom: '.2em' }}>
            <div style={{ fontSize: '1em', fontWeight: '900' }}>
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
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lorem id libero rutrum ornare a in enim.'
  },
  {
    image: Gallery2,
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lorem id libero rutrum ornare a in enim.'
  },
  {
    image: Gallery3,
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lorem id libero rutrum ornare a in enim.'
  },  
  { 
    image: Gallery4,
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lorem id libero rutrum ornare a in enim.'
  },
  { 
    image: Gallery5,
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lorem id libero rutrum ornare a in enim.'
  },
  {
    image: Gallery6,
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lorem id libero rutrum ornare a in enim.'
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

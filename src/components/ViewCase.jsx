import React from 'react'
import './viewCase.css'


const data = [
  {
    id: 1,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/mi-arcus-color.jpg",
    link:"https://thebrandbee.com/sample-work.php"
  },
  {
    id: 2,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/medela-color.jpg",
    link:"https://thebrandbee.com/sample-work.php"
  },
  {
    id: 3,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/cushman-and-wakefield-color.jpg",
    link:"https://thebrandbee.com/sample-work.php"
  },
  {
    id: 4,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/makruzz-color.jpg",
    link:"https://thebrandbee.com/sample-work.php"
  },
  {
    id: 5,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/healthsoul-color.jpg"
  },
  {
    id: 6,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/leaseplan-color.jpg"
  },
  {
    id: 7,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/kumon-color.jpg"
  },
  {
    id: 8,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/urbanbed-color.jpg"
  },
  {
    id: 9,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/mallcom-color.jpg"
  },
  {
    id: 10,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/skinora-color.jpg"
  },
  {
    id: 11,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/odd-coffee-roasters-color.jpg"
  },
  {
    id: 12,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/air-india-sats-color.jpg"
  },
  {
    id: 13,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/emcee-beauty-color.jpg"
  },
  {
    id: 14,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/grofers-color.jpg"
  },
  {
    id: 15,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/cornitos-color.jpg"
  },
  {
    id: 16,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/mania-color.jpg"
  },
  
  {
    id: 17,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/magic-leaf-color.jpg"
  },
  {
    id: 18,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/sonalika-color.jpg"
  },
  {
    id: 19,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/aqua-splash-color.jpg"
  },
  {
    id: 20,
    imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/hi-life-color.jpg"
  }
];


const ViewCase = () => {
  return (
    <div className='view-main1'>
        <div  className='view-main2'>
            <div className='view-box1'>
              <h1>VIEW CASE STUDIES</h1>
            </div>
        <div className='view-box2'>
        <div className='view-grid'>
            {data.map(item => (
              <div key={item.id} className='view-grid-item'>
              <a href={item.imageUrl} target={item.link} rel="noopener noreferrer">
                <button>
                <img src={item.imageUrl} alt='' />
                </button>
                </a>
              </div>
            ))}
          </div>
          
        </div>

        </div>
    </div>
  )
}

export default ViewCase
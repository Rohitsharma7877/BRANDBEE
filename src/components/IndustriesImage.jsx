import React from 'react'
import './industriesImage.css'

const data=[
    {
        id: 1,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Automobile.jpg",
        items:"AUTOMOBILE"
      },
      {
        id: 2,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Aviation.jpg",
        items:"AVIATION"
      },
      {
        id: 3,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Beauty-Care.jpg",
       items:"BEAUTY CARE"
      },
      {
        id: 4,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/BFSI.jpg",
        items:"BFSI"
      },
      {
        id: 5,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Business-Services.jpg",
        items:"BUSINESS SERVICES"
      },
      {
        id: 6,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Consumer-Electronics.jpg",
        items:"CONSUMER ELECTRONICS"
      },
      {
        id: 7,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/E-Commerce.jpg",
        items:"E COMMERCE"
      },
      {
        id: 8,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Education.jpg",
        items:"EDUCATION"
      },
      {
        id: 9,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Entertainment.jpg",
        items:"ENTERTAINMENT"
      },
      {
        id: 10,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Fashion.jpg",
        items:"FASHION"
      },
      {
        id: 11,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Healthcare.jpg",
        items:"HEALTHCARE"
      },
      {
        id: 12,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Hospitality.jpg",
        items:"HOSPITAL"
      },
      {
        id: 13,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/IT.jpg",
        items:"IT"
      },
      {
        id: 14,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Manufacturing.jpg",
        items:"MANUFACTURING"
      },
      {
        id: 15,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Real-Estate.jpg",
        items:"REAL ESTATE"
      },
      {
        id: 16,
        imageUrl: "https://thebrandbee.com/assets/imgs/industries-we-serve/Wellness.jpg",
        items:"WELLNESS"
      }
]

const IndustriesImage = () => {
  return (
    <div className='industriesImage-main1'>
        <div className='industriesImage-main2'>
         <div className='industriesImage-grid'>
         {data.map(item => (
                <div key={item.id} className='industriesImage-grid-container'>
                  <img className='industriesImage-grid-image' src={item.imageUrl} alt='' />
                  <h1 className='industriesImage-grid-middle'><strong>{item.items}</strong></h1>
                </div>
              ))}
         </div>
        </div>
    </div>
  )
}

export default IndustriesImage
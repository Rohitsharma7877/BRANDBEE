// import React from "react";
import React, { useState, useEffect } from 'react';
import "./industriesMenuPage.css";
import { RxDotFilled } from "react-icons/rx";
import { useParams } from "react-router-dom";
import Form from './Form';
// import FAQ from './FAQ';
import Articles from './Articles';
import Slide from './Slide';
import WhatmakesUs from './WhatmakesUs';


const data = [
  {
    titleId: "beautycare",
    id: 1,
    image1:
      "https://thebrandbee.com/assets/imgs/industry/beauty-care/BEAUTY-CARE.jpg",
    image2:
      "https://thebrandbee.com/assets/imgs/industry/beauty-care/BEAUTY-CARE1.jpg",
    title1:
      "Redefining Beauty Care Marketing: The Unstoppable Force of The Brand Bee",
    description: [
      "Step into the enchanting world of beauty care with The Brand Bee, a digital maestro ready to weave magic for beauty brands. Picture a world where innovation and elegance dance in harmony, and digital prowess meets creativity. The Brand Bee's hive is alive with tech-savvy marketing maestros on a mission—to elevate the beauty care industry to new heights.",
      "At the core of The Brand Bee's journey lies a secret nectar—a blend of creativity, innovation, and storytelling. With a golden honeycomb of ideas, we craft digital strategies that make beauty brands shine amidst the digital noise. From captivating social media campaigns to mesmerizing web designs, we leave no platform unexplored. Our arsenal includes buzz-worthy SEO, dazzling PPC advertising, and enchanting email campaigns that warm subscribers' hearts.",
      "In the fast-paced digital world, The Brand Bee stays ahead by infusing every project with a magical concoction of beauty and brains, leaving an indelible mark. Our charm extends beyond, as we embrace each beauty brand with a personal touch, creating unforgettable campaigns that resonate far and wide. At The Brand Bee, we don't just offer digital marketing services; we craft enchanting digital experiences that leave an everlasting impression. To all beauty care brands ready to spread their wings in the digital skies, fear not—the buzz of The Brand Bee awaits! Let the magic of our digital marketing services pollinate your brand, watching it blossom like never before. The hive is calling, and it's time to answer the sweetest call of all!",
    ],
    title2: "Our Offerings",
    services: [
      {
        id: 1,
        title: "Brand Positioning",
      },
      {
        id: 2,
        title: "Packaging Design",
      },
      {
        id: 3,
        title: "E-Commerce Website",
      },
      {
        id: 4,
        title: "Marketing Campaigns",
      },
      {
        id: 5,
        title: "Marketplace Advertising",
      },
      {
        id: 6,
        title: "Influencer Marketing",
      },
    ],
    services2: [
      {
        id: 1,
        title: "Overall Brand Strategy",
      },
      {
        id: 2,
        title: "Catalog & Brand Collaterals",
      },
      {
        id: 3,
        title: "Photoshoot & Video Shoot",
      },
      {
        id: 4,
        title: "Social Media Marketing",
      },
      {
        id: 5,
        title: "Content Marketing",
      },
      {
        id: 6,
        title: "Video Marketing",
      },
    ],
    services3: [
      {
        id: 1,
        title: "Brand Identity Development",
      },
      {
        id: 2,
        title: "Marketing Collaterals",
      },
      {
        id: 3,
        title: "Brand Identity Guidelines",
      },
      {
        id: 4,
        title: "Performance Marketing",
      },
      {
        id: 5,
        title: "Community Building",
      },
      {
        id: 6,
        title: "Email Marketing",
      },
      {
        id: 7,
        title: "WhatsApp Marketing",
      },
    ],
  },
  {
    titleId: "fnb",
    id: 2,
    image1:
      "https://thebrandbee.com/assets/imgs/industry/fb/F_B.jpg",
    image2:
      "https://thebrandbee.com/assets/imgs/industry/fb/F_B2.jpg",
    title1:
      "Savouring the Flavors: The Brand Bee's Culinary Journey in the F&B Industry",
    description: [
      "In a world where taste buds reign supreme, the culinary landscape of the F&B industry beckons with a delightful array of flavours, aromas and experiences. Imagine a symphony of delectable cuisines, aromatic spices, and the clinking of glasses to culinary excellence—this vibrant scene unfolds at The Brand Bee's hive, a team of culinary aficionados on a mission to stir emotions and tantalize palates.",
      "At the core of this gastronomic journey is The Brand Bee's secret sauce—a blend of creativity, innovation, and storytelling. We craft strategies that make F&B brands shine in the competitive digital landscape, from mouth-watering social media campaigns to succulent web designs. Our menu of digital marketing services includes delectable SEO, flavoursome PPC advertising, and finger-licking good email campaigns.",
      "In a world craving new tastes, The Brand Bee keeps pace with trends, infusing projects with creativity and data-driven insights. Beyond technical wizardry, our appetite for understanding each F&B brand's unique essence adds a personalized touch. We savour the stories behind each brand, presenting them as unforgettable campaigns resonating with food enthusiasts.",
      "In the ever-evolving culinary landscape, The Brand Bee guides F&B brands towards savoury success. We're not just offering digital marketing services; we're crafting mouth-watering digital experiences that leave a lasting impression. To all F&B brands yearning to entice taste buds in the digital realm, The Brand Bee awaits! Indulge in our services and savour the sweet taste of digital success—the hive is buzzing with anticipation!",
    ],
    title2: "Our Offerings",
    services: [
      {
        id: 1,
        title: "Brand Positioning",
      },
      {
        id: 2,
        title: "Packaging Design",
      },
      {
        id: 3,
        title: "E-Commerce Website",
      },
      {
        id: 4,
        title: "Marketing Campaigns",
      },
      {
        id: 5,
        title: "Marketplace Advertising",
      },
      {
        id: 6,
        title: "Influencer Marketing",
      },
    ],
    services2: [
      {
        id: 1,
        title: "Overall Brand Strategy",
      },
      {
        id: 2,
        title: "Catalog & Brand Collaterals",
      },
      {
        id: 3,
        title: "Photoshoot & Video Shoot",
      },
      {
        id: 4,
        title: "Social Media Marketing",
      },
      {
        id: 5,
        title: "Content Marketing",
      },
      {
        id: 6,
        title: "Video Marketing",
      },
    ],
    services3: [
      {
        id: 1,
        title: "Brand Identity Development",
      },
      {
        id: 2,
        title: "Marketing Collaterals",
      },
      {
        id: 3,
        title: "Brand Identity Guidelines",
      },
      {
        id: 4,
        title: "Performance Marketing",
      },
      {
        id: 5,
        title: "Community Building",
      },
      {
        id: 6,
        title: "Email Marketing",
      },
      {
        id: 7,
        title: "WhatsApp Marketing",
      },
    ],
  },
  {
    titleId: "eCommerce",
    id: 3,
    image1:
      "https://thebrandbee.com/assets/imgs/industry/ecommerce/E-COMMERCE.jpg",
    image2:
      "https://thebrandbee.com/assets/imgs/industry/ecommerce/E-COMMERCE1.jpg",
    title1:
      "Navigating the Digital Marketplace: The Brand Bee's Expertise in the E-Commerce Industry",
    description: [
      "In the dynamic digital landscape of the E-Commerce industry, The Brand Bee emerges as the guiding force, offering strategic digital marketing services to elevate brands in the bustling online marketplace. Imagine a virtual hive teeming with eager customers and countless online stores—this is where our dedicated team of digital marketing experts thrives, on a mission to propel E-Commerce brands to new heights.",
      "At the core of our approach lies The Brand Bee's secret formula—a blend of expertise, innovation, and strategic marketing. We craft compelling digital strategies that make E-Commerce brands stand out, from captivating social media campaigns to user-friendly web designs. In the ever-changing E-Commerce world, we diligently explore every corner of the digital landscape, providing a comprehensive range of services from SEO to PPC advertising, ensuring brands stay ahead.",
      "Recognizing the importance of innovation and customer-centricity, The Brand Bee combines technical prowess with a deep understanding of each brand's unique identity. Our team delves into their stories, translating core values into unforgettable campaigns that resonate with shoppers globally.",
      "Recognizing the importance of innovation and customer-centricity, The Brand Bee combines technical prowess with a deep understanding of each brand's unique identity. Our team delves into their stories, translating core values into unforgettable campaigns that resonate with shoppers globally.",
    ],
    title2: "Our Offerings",
    services: [
      {
        id: 1,
        title: "Brand Positioning",
      },
      {
        id: 2,
        title: "Packaging Design",
      },
      {
        id: 3,
        title: "E-Commerce Website",
      },
      {
        id: 4,
        title: "Marketing Campaigns",
      },
      {
        id: 5,
        title: "Marketplace Advertising",
      },
      {
        id: 6,
        title: "Influencer Marketing",
      },
    ],
    services2: [
      {
        id: 1,
        title: "Overall Brand Strategy",
      },
      {
        id: 2,
        title: "Catalog & Brand Collaterals",
      },
      {
        id: 3,
        title: "Photoshoot & Video Shoot",
      },
      {
        id: 4,
        title: "Social Media Marketing",
      },
      {
        id: 5,
        title: "Content Marketing",
      },
      {
        id: 6,
        title: "Video Marketing",
      },
    ],
    services3: [
      {
        id: 1,
        title: "Brand Identity Development",
      },
      {
        id: 2,
        title: "Marketing Collaterals",
      },
      {
        id: 3,
        title: "Brand Identity Guidelines",
      },
      {
        id: 4,
        title: "Performance Marketing",
      },
      {
        id: 5,
        title: "Community Building",
      },
      {
        id: 6,
        title: "Email Marketing",
      },
      {
        id: 7,
        title: "WhatsApp Marketing",
      },
    ],
  },
  {
    titleId: "realestate",
    id: 4,
    image1:
      "https://thebrandbee.com/assets/imgs/industry/real-estate/REAL-ESTATE.jpg",
    image2:
      "https://thebrandbee.com/assets/imgs/industry/real-estate/REAL-ESTATE1.jpg",
    title1:
      "Transformative Real Estate Marketing: The Brand Bee's Strategic Expertise",
    description: [
      "In the expansive world of Real Estate, where dreams materialize into homes, The Brand Bee emerges as a guiding force, steering Real Estate brands to new heights through strategic digital marketing. Our unique blend of expertise, innovation, and strategic marketing lies at the heart of this journey. Armed with this powerful mix, we craft compelling branding and digital strategies that set Real Estate brands apart in the competitive arena. In an ever-evolving industry, we explore the digital landscape, offering services encompassing brand positioning, strategy, walkthroughs, 3D renderings, collaterals, and marketing campaigns, ensuring Real Estate brands stay at the forefront.",
      "Our approach transcends technical proficiency; it reflects a commitment to understanding the unique identity of each Real Estate brand. By delving into their stories and translating core values into impactful campaigns, we establish an emotional connection that resonates with potential buyers. In a market valuing innovation and customer-centricity, The Brand Bee stays ahead, analyzing data insights and customer behaviour to craft strategies aligning with your target audience, ensuring optimal impact and conversions.",
      "As the guiding light in the Real Estate realm, The Brand Bee empowers brands to navigate the landscape with confidence. To all Real Estate brands ready to unlock their digital potential, fear not—the expertise of The Brand Bee awaits! Embark on our strategic digital marketing services and witness your brand flourish like never before. The hive is abuzz with anticipation, and it's time to embrace Real Estate success!",

    ],
    title2: "Our Offerings",
    services: [
      {
        id: 1,
        title: "Brand Positioning",
      },
      {
        id: 2,
        title: "Packaging Design",
      },
      {
        id: 3,
        title: "E-Commerce Website",
      },
      {
        id: 4,
        title: "Marketing Campaigns",
      },
      {
        id: 5,
        title: "Marketplace Advertising",
      },
      {
        id: 6,
        title: "Influencer Marketing",
      },
    ],
    services2: [
      {
        id: 1,
        title: "Overall Brand Strategy",
      },
      {
        id: 2,
        title: "Catalog & Brand Collaterals",
      },
      {
        id: 3,
        title: "Photoshoot & Video Shoot",
      },
      {
        id: 4,
        title: "Social Media Marketing",
      },
      {
        id: 5,
        title: "Content Marketing",
      },
      {
        id: 6,
        title: "Video Marketing",
      },
    ],
    services3: [
      {
        id: 1,
        title: "Brand Identity Development",
      },
      {
        id: 2,
        title: "Marketing Collaterals",
      },
      {
        id: 3,
        title: "Brand Identity Guidelines",
      },
      {
        id: 4,
        title: "Performance Marketing",
      },
      {
        id: 5,
        title: "Community Building",
      },
      {
        id: 6,
        title: "Email Marketing",
      },
      {
        id: 7,
        title: "WhatsApp Marketing",
      },
    ],
  },
  {
    titleId: "hospitality",
    id: 5,
    image1:
      "https://thebrandbee.com/assets/imgs/industry/hospitality/HOSPITALITY.jpg",
    image2:
      "https://thebrandbee.com/assets/imgs/industry/hospitality/HOSPITALITY1.jpg",
    title1:
      "Elevating The Hospitality Industry In The Digital Landscape",
    description: [
      "Step into the realm of hospitality excellence with The Brand Bee, the leader in delivering unparalleled branding and digital services to the industry. A robust brand identity is essential for any hospitality venture to thrive, and The Brand Bee is your ultimate ally in crafting a compelling brand narrative. From boutique hotels to expansive resorts, The Brand Bee caters to businesses of all sizes, recognizing the unique essence each hospitality gem possesses. Our seasoned experts develop tailor-made branding strategies, encapsulating your vision and values and ensuring your brand message resonates with guests long after their stay.",
      "In the digital arena, The Brand Bee elevates hospitality to new heights with cutting-edge digital services. From designing intuitive websites to optimizing online booking systems, our expertise spans social media management, email marketing, and search engine optimization, attracting guests from around the globe.",
      "Understanding that the hospitality industry is about creating lasting memories, The Brand Bee collaborates with your team to ensure every touchpoint, physical or digital, reflects your brand essence. We transform your business into a global player, reaching a broader audience, cultivating loyal patrons, and fostering lasting relationships through personalized interactions.",
      "More than just service providers, we are your growth and success partners. With a blend of expertise and innovation, The Brand Bee empowers your hospitality business to soar to new heights. Ready for a transformative journey? Let The Brand Bee lead your business to a flourishing future, where exceptional branding and digital services make your hospitality brand shine like never before.",
    ],
    title2: "Our Offerings",
    services: [
      {
        id: 1,
        title: "Brand Positioning",
      },
      {
        id: 2,
        title: "Packaging Design",
      },
      {
        id: 3,
        title: "E-Commerce Website",
      },
      {
        id: 4,
        title: "Marketing Campaigns",
      },
      {
        id: 5,
        title: "Marketplace Advertising",
      },
      {
        id: 6,
        title: "Influencer Marketing",
      },
    ],
    services2: [
      {
        id: 1,
        title: "Overall Brand Strategy",
      },
      {
        id: 2,
        title: "Catalog & Brand Collaterals",
      },
      {
        id: 3,
        title: "Photoshoot & Video Shoot",
      },
      {
        id: 4,
        title: "Social Media Marketing",
      },
      {
        id: 5,
        title: "Content Marketing",
      },
      {
        id: 6,
        title: "Video Marketing",
      },
    ],
    services3: [
      {
        id: 1,
        title: "Brand Identity Development",
      },
      {
        id: 2,
        title: "Marketing Collaterals",
      },
      {
        id: 3,
        title: "Brand Identity Guidelines",
      },
      {
        id: 4,
        title: "Performance Marketing",
      },
      {
        id: 5,
        title: "Community Building",
      },
      {
        id: 6,
        title: "Email Marketing",
      },
      {
        id: 7,
        title: "WhatsApp Marketing",
      },
    ],
  },
  {
    titleId: "fmcg",
    id: 6,
    image1:
      "https://thebrandbee.com/assets/imgs/industry/fmcg/FMCG2.jpg",
    image2:
      "https://thebrandbee.com/assets/imgs/industry/fmcg/FMCG3.jpg",
    title1:
      "Navigating the Digital FMCG Landscape With The Brand Bee's Tailor-Made Solutions",
    description: [
      "Step into the dynamic realm of Fast-Moving Consumer Goods (FMCG) with The Brand Bee, your partner in creating a distinct identity and digital presence. In the fast-paced FMCG market, our expert team specializes in crafting captivating brand identities that resonate with your target audience. We believe in the power of a compelling brand story, meticulously researching and analyzing it to unearth the essence of your business and set you apart from the competition.",
      "A robust online presence is paramount in the digital age. Our web design and development experts create user-friendly websites that convert visitors into loyal customers. We also manage social media platforms, amplifying your brand's voice and building meaningful connections with consumers. Consistency is key, and our branding strategies focus on synchronization across all platforms to foster brand loyalty and encourage repeat purchases.",
      "To stay ahead of evolving trends, our team conducts in-depth market research, guiding you toward adaptive strategies. Our expertise in search engine optimization (SEO) ensures your brand ranks high in search results, attracting organic traffic and driving conversions. Whether you're a multinational FMCG giant or a rising start-up, our scalable solutions cater to your unique needs.",
      "The FMCG industry thrives on creativity, adaptability, and a strong brand identity. At The Brand Bee, we embrace this challenge, offering comprehensive branding and digital services to empower your FMCG business. Join us on this exciting journey and unlock the full potential of your brand in the bustling FMCG market.",
    ],
    title2: "Our Offerings",
    services: [
      {
        id: 1,
        title: "Brand Positioning",
      },
      {
        id: 2,
        title: "Packaging Design",
      },
      {
        id: 3,
        title: "E-Commerce Website",
      },
      {
        id: 4,
        title: "Marketing Campaigns",
      },
      {
        id: 5,
        title: "Marketplace Advertising",
      },
      {
        id: 6,
        title: "Influencer Marketing",
      },
    ],
    services2: [
      {
        id: 1,
        title: "Overall Brand Strategy",
      },
      {
        id: 2,
        title: "Catalog & Brand Collaterals",
      },
      {
        id: 3,
        title: "Photoshoot & Video Shoot",
      },
      {
        id: 4,
        title: "Social Media Marketing",
      },
      {
        id: 5,
        title: "Content Marketing",
      },
      {
        id: 6,
        title: "Video Marketing",
      },
    ],
    services3: [
      {
        id: 1,
        title: "Brand Identity Development",
      },
      {
        id: 2,
        title: "Marketing Collaterals",
      },
      {
        id: 3,
        title: "Brand Identity Guidelines",
      },
      {
        id: 4,
        title: "Performance Marketing",
      },
      {
        id: 5,
        title: "Community Building",
      },
      {
        id: 6,
        title: "Email Marketing",
      },
      {
        id: 7,
        title: "WhatsApp Marketing",
      },
    ],
  },
  
    
  
]

const IndustriesMenuPage2 = () => {
  const [description, setDescription] = useState([]);
  const params = useParams();
  const [paramid, setParamid] = useState();

  console.log(params, "1");
  console.log(params.id, "params", data[0]);

  const idToFind = params.id;
  // setParamid(idToFind)
  const filteredData = data.filter((item) => idToFind == item.titleId);
  console.log(filteredData, "filteredData");

  const item = filteredData[0];
  console.log(item, "item");

  useEffect(() => {
      setDescription(data[0].description);
  }, []);

  useEffect(() => {
    setParamid(idToFind);
  }, [idToFind]);


 
  
  return (
    <>

    
    <div className="Industriesmenu-main1">
      <div className="Industriesmenu-main2">
        {/* {data.map((item) => ( */}
          <div key={item.id}>
            <div className="Industriesmenu-box1" style={{ backgroundImage: `url(${item.image1})` }}>{/* image */}</div>

            <div className="Industriesmenu-box2">
              <div className="Industriesmenu-details">
                <div className="Industriesmenu-image">
                  <div className="Industriesmenu-img">
                    <img src={item.image2} alt="" />
                  </div>
                </div>
                <div className="Industriesmenu-image-details">
                  <div className="Industriesmenu-image-details-title">
                    <h1>{item.title1}</h1>
                  </div>
                  <div className="Industriesmenu-image-details-pargh">
                  {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="Industriesmenu-box3">
              <div className="Industriesmenu-offer">
                <div className="Industriesmenu-tittle">
                  <h1>{item.title2}</h1>
                </div>

                <div className="Industriesmenu-list">
                  <div className="Industriesmenu-list-name">
                    <ul>
                      {item.services.map((service) => (
                        <li key={service.id}>
                          <p>
                            <RxDotFilled />{" "}
                          </p>
                          <h1>{service.title}</h1>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="Industriesmenu-list-name">
                    <ul>
                      {item.services2.map((service) => (
                        <li key={service.id}>
                          <p>
                            <RxDotFilled />
                          </p>
                          <h1>{service.title}</h1>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="Industriesmenu-list-name">
                    <ul>
                      {item.services3.map((service) => (
                        <li key={service.id}>
                          <p>
                            <RxDotFilled />
                          </p>
                          <h1>{service.title}</h1>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* ))} */}
      </div>
    </div>
    <div>
        <Slide/>
      </div>
      <div>
        <Form />
      </div>
      <div>
        {" "}
        <WhatmakesUs />
      </div>
      <div>
        <Articles />
      </div>
    </>
  );
};

export default IndustriesMenuPage2;

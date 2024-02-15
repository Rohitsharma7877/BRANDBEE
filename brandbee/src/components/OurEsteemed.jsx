import React, { useState } from 'react';
import './ourEsteemed.css'

const OurEsteemed = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const items = [
        'Show All', 'Healthcare', 'Education', 'FMCG', 'Real Estate & Infra', 'Beauty Care',
        'Wellness', 'F&B', 'Industrial', 'Automobile', 'Business Services', 'Hospitality',
        'Banking', 'Government', 'Consumer Electronics', 'Aviation', 'Logistics', 'IT',
        'Fashion', 'Home', 'Retail', 'Media', 'Photography', 'Others'
    ];

    const data = [
        {
          id: 1,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/coca-cola-color.jpg",
          items:"F&B"
        },
        {
          id: 2,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/cornitos-color.jpg",
          items:"F&B"
        },
        {
          id: 3,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/american-express-color.jpg",
         items:"Banking"
        },
        {
          id: 4,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/punjab-national-bank-color.jpg",
          items:"Banking"
        },
        {
          id: 5,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/tata-capital-color.jpg",
          items:"Banking"
        },
        {
          id: 6,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/government-of-india-color.jpg",
          items:"Government"
        },
        {
          id: 7,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/unesco-mgiep-color.jpg",
          items:"Government"
        },
        {
          id: 8,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/blueair-color.jpg",
          items:"Consumer Electronics"
        },
        {
          id: 9,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/pebble-color.jpg",
          items:"Consumer Electronics"
        },
        {
          id: 10,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/audio-voice-color.webp",
          items:"Consumer Electronics"
        },
        {
          id: 11,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/air-france-klm-color.jpg",
          items:"Aviation"
        },
        {
          id: 12,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/air-india-sats-color.jpg",
          items:"Aviation"
        },
        {
          id: 13,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/jubilant-color.jpg",
          items:"Healthcare"
        },
        {
          id: 14,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/grofers-color.jpg",
          items:"FMCG"
        },
        {
          id: 15,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/medela-color.jpg",
          items:"Healthcare"
        },
        {
          id: 16,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/kumon-color.jpg",
          items:"Education"
        },
        
        {
          id: 17,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/baby-brand-saffron-color.jpg",
          items:"FMCG"
        },
        {
          id: 18,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/cushman-and-wakefield-color.jpg",
          items:"Real Estate & Infra"
        },
        {
          id: 19,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/emaar-color.jpg",
          items:"Real Estate & Infra"
        },
        {
          id: 20,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/mother-sparsh-color.jpg",
          items:"Beauty Care"
        },
        {
          id: 21,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/the-moms-co-color.jpg",
          items:"Beauty Care"
        },
        {
          id: 22,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/tulips-color.jpg",
          items:"Beauty Care"
        },
        {
          id: 23,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Crazy.jpg",
          items:"Beauty Care"
        },
        {
          id: 24,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/mania-color.jpg",
          items:"F&B"
        },
        {
          id: 25,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/mallcom-color.jpg",
          items:"Industrial"
        },
        {
          id: 26,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/ald-automotive-color.webp",
          items:"Automobile"
        },
        {
          id: 27,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new-holland-color.jpg",
          items:"Automobile"
        },
        {
          id: 28,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/sonalika-color.jpg",
          items:"Automobile"
        },
        {
          id: 29,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/um-color.jpg",
          items:"Automobile"
        },
        {
          id: 30,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/ayvens-color.webp",
          items:"Automobile"
        },
        {
          id: 31,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/nano-rangers-color.webp",
          items:"Automobile"
        },
        {
          id: 32,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/smartworks-color.jpg",
          items:"Business Services"
        },
        {
          id: 33,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/mohanlal-sons-color.jpg",
          items:"Fashion"
        },
        {
          id: 34,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/avro-furniture-color.jpg",
          items:"Home"
        },
        {
          id: 35,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/urbanbed-color.jpg",
          items:"Home"
        },
        {
          id: 36,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/troost-color.webp",
          items:"Home"
        },
        
        {
          id: 37,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/novelty-home-color.webp",
          items:"Home"
        },
        {
          id: 38,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/modern-homes-color.webp",
          items:"Home"
        },
        {
          id: 39,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/within-color.webp",
          items:"Home"
        },
        {
          id: 40,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/stenna-color.webp",
          items:"Home"
        },
        {
          id: 41,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/bd-color.jpg",
          items:"Healthcare"
        },
        {
          id: 42,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/healthsoul-color.jpg",
          items:"Healthcare"
        },
        {
          id: 43,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/medharbour-color.jpg",
          items:"Healthcare"
        },
        {
          id: 44,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/the-dental-roots-color.jpg",
          items:"Healthcare"
        },
        {
          id: 45,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/stryker-color.jpg",
          items:"Healthcare"
        },
        {
          id: 46,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/liva-nova-color.jpg",
          items:"Healthcare"
        },
        {
          id: 47,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/lintex-color.webp",
          items:"Healthcare"
        },
        {
          id: 48,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/athena-color.jpg",
          items:"Education"
        },
        {
          id: 49,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/gems-education-color.jpg",
          items:"Education"
        },
        {
          id: 50,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/institut-francais-india-color.jpg",
          items:"Education"
        },
        {
          id: 51,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/manya-group-color.jpg",
          items:"Education"
        },
        {
          id: 52,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/mdn-public-school-color.jpg",
          items:"Education"
        },
        {
          id: 53,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/joonify-color.jpg",
          items:"Education"
        },
        {
          id: 54,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/conliva-color.jpg",
          items:"FMCG"
        },
        {
          id: 55,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/magahi-color.jpg",
          items:"FMCG"
        },
        {
          id: 56,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/magic-leaf-color.jpg",
          items:"FMCG"
        },
        
        {
          id: 57,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/sahibaa-spices-color.jpg",
          items:"FMCG"
        },
        {
          id: 58,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/purexa-color.jpg",
          items:"FMCG"
        },
        {
          id: 59,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/zeeba-color.jpg",
          items:"FMCG"
        },
        {
          id: 60,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/jaggercane-color.webp",
          items:"FMCG"
        },
        {
          id: 61,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/abacus-buildtech-color.jpg",
          items:"Real Estate & Infra"
        },
        {
          id: 62,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/indian-city-properties-color.jpg",
          items:"Real Estate & Infra"
        },
        {
          id: 63,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/savills-color.jpg",
          items:"Real Estate & Infra"
        },
        {
          id: 64,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/unity-group-color.jpg",
          items:"Real Estate & Infra"
        },
        {
          id: 65,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/amaryllis-color.jpg",
          items:"Real Estate & Infra"
        },
        {
          id: 66,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/skylark-color.webp",
          items:"Real Estate & Infra"
        },
        {
          id: 67,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/capitaland-color.webp",
          items:"Real Estate & Infra"
        },
        {
          id: 68,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/emcee-beauty-color.jpg",
          items:"Beauty Care"
        },
        {
          id: 69,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/pachouli-color.jpg",
          items:"Beauty Care"
        },
        {
          id: 70,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/seasoul-cosmetics-color.jpg",
          items:"Beauty Care"
        },
        {
          id: 71,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/skinora-color.jpg",
          items:"Beauty Care"
        },
        {
          id: 72,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/sutatva-color.jpg",
          items:"Beauty Care"
        },
        {
          id: 73,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/vert-color.jpg",
          items:"Beauty Care"
        },
        {
          id: 74,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/mor-medics-color.webp",
          items:"Beauty Care"
        },
        {
          id: 75,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/urbanbed-color.jpg",
          items:"Home"
        },
        {
          id: 76,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/enega-color.webp",
          items:"Beauty Care"
        },
        
        {
          id: 77,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/tumble-color.webp",
          items:"Beauty Care"
        },
        {
          id: 78,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/santva-color.webp",
          items:"Beauty Care"
        },
        {
          id: 79,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/herb-tantra-color.jpg",
          items:"Wellness"
        },
        {
          id: 80,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/hi-life-color.jpg",
          items:"Wellness"
        }
        ,
        {
          id: 81,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/cureveda-color.jpg",
          items:"Wellness"
        },
        {
          id: 82,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/matsyaveda-color.jpg",
          items:"Wellness"
        },
        {
          id: 83,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/ekaanta-color.webp",
          items:"Wellness"
        },
        {
          id: 84,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/blubein-color.webp",
          items:"Wellness"
        },
        {
          id: 85,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/biotics-life-color.webp",
         items:"Wellness"
        },
        {
          id: 86,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/amaara-color.webp",
          items:"Wellness"
        },
        {
          id: 87,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/stirred-color.jpg",
          items:"F&B"
        },
        {
          id: 88,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/al-zaitoon-color.jpg",
          items:"F&B"
        },
        {
          id: 89,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/ms-butter-fingers-color.jpg",
          items:"F&B"
        },
        {
          id: 90,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/odd-coffee-roasters-color.jpg",
          items:"F&B"
        },
        {
          id: 91,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/ruchi-color.jpg",
          items:"F&B"
        },
        {
          id: 92,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/whipped-color.jpg",
          items:"F&B"
        },
        {
          id: 93,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/yogurberry-color.jpg",
          items:"F&B"
        },
        {
          id: 94,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/ministry-of-beer-(mob)-color.jpg",
          items:"F&B"
        },
        {
          id: 95,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/DCK.jpg",
          items:"F&B"
        },
        {
          id: 96,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Pernod-Ricard.jpg",
          items:"F&B"
        },
        {
          id: 97,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Wild.jpg",
          items:"F&B"
        },
        
        {
          id: 98,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/tossin-pizza-color.webp",
          items:"F&B"
        },
        {
          id: 99,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/curry-lounge-color.webp",
          items:"F&B"
        },
        {
          id: 100,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/matildas-color.webp",
          items:"F&B"
        },
        {
          id: 101,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/dee-piping-color.jpg",
          items:"Industrial"
        },
        {
          id: 102,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/ultra-international-color.jpg",
          items:"Industrial"
        },
        {
          id: 103,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/salasar-color.jpg",
          items:"Industrial"
        },
        {
          id: 104,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/pi-industries-color.jpg",
          items:"Industrial"
        },
        {
          id: 105,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Dunham.jpg",
          items:"Industrial"
        },
        {
          id: 106,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Duraton.jpg",
          items:"Industrial"
        },
        {
          id: 107,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/jaybee-industries-color.webp",
          items:"Industrial"
        },
        {
          id: 108,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/vandana-color.webp",
          items:"Industrial"
        },
        {
          id: 109,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/london-speaker-bureau-color.jpg",
          items:"Business Services"
        },
        {
          id: 110,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/urninc-color.jpg",
          items:"Business Services"
        },
        {
          id: 111,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/garage-society-color.jpg",
          items:"Business Services"
        },
        {
          id: 112,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/CVENT.jpg",
          items:"Business Services"
        },
        {
          id: 113,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Authbridge.jpg",
          items:"Business Services"
        },
        {
          id: 114,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/BLS.jpg",
          items:"Business Services"
        },
        {
          id: 115,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Korn.jpg",
          items:"Business Services"
        },
        {
          id: 116,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Nangia.jpg",
          items:"Business Services"
        },
        
        {
          id: 117,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/delhivery-color.webp",
          items:"Business Services"
        },
        {
          id: 118,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/aqua-splash-color.jpg",
          items:"Hospitality"
        },
        {
          id: 119,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/wet-njoy-color.jpg",
          items:"Hospitality"
        },
        {
          id: 120,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/opulence-color.webp",
          items:"Hospitality"
        },
        {
          id: 121,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/ecom-express-color.jpg",
          items:"Logistics"
        },
        {
          id: 122,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/trukker-color.jpg",
          items:"Logistics"
        },
        {
          id: 123,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/absolutdata-color.jpg",
          items:"IT"
        },
        {
          id: 124,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/avantha-technologies-color.jpg",
          items:"IT"
        },
        {
          id: 125,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/sapidblue-color.jpg",
          items:"IT"
        },
        {
          id: 126,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/csp-color.webp",
          items:"IT"
        },
        {
          id: 127,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/nimbles2p-color.webp",
          items:"IT"
        },
        {
          id: 128,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/infollion-color.webp",
          items:"IT"
        },
        {
          id: 129,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/cubastion-color.webp",
          items:"IT"
        },
        {
          id: 130,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/creatures-of-habit-color.jpg",
          items:"Fashion"
        },
        {
          id: 131,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/baana-color.jpg",
          items:"Fashion"
        },
        {
          id: 132,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/carlos-philip-color.jpg",
          items:"Fashion"
        },
        {
          id: 133,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Zenyatta.jpg",
          items:"Fashion"
        },
        {
          id: 134,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/mir.jpg",
          items:"Fashion"
        },
        {
          id: 135,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/lino-perpos-color.webp",
          items:"Fashion"
        },
        {
          id: 136,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/champs-color.webp",
          items:"Fashion"
        },
        
        {
          id: 137,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/clutch-house-color.webp",
          items:"Fashion"
        },
        {
          id: 138,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/the-play-chapter-color.webp",
          items:"Fashion"
        },
        {
          id: 139,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Inc42.jpg",
          items:"Media"
        },
        {
          id: 140,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/France24.jpg",
          items:"Media"
        },
        {
          id: 141,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/mediascope-color.webp",
          items:"Media"
        },
        {
          id: 142,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Cine-Love.jpg",
          items:"Photography"
        },
        {
          id: 143,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Nu-Stock.jpg",
          items:"Photography"
        },
        {
          id: 144,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/DLF.jpg",
          items:"Retail"
        },
        {
          id: 145,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/V2-Kart.jpg",
          items:"Retail"
        },
        {
          id: 146,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/hy-tec-color.webp",
          items:"Retail"
        },
        {
          id: 147,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Terra.jpg",
          items:"Others"
        },
        {
          id: 148,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/IMC.jpg",
          items:"Others"
        },
        {
          id: 149,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/MiArcus.jpg",
          items:"Others"
        },
        {
          id: 150,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/Vaalve.jpg",
          items:"Others"
        },
        {
          id: 151,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/new/US-Kids-Golf.jpg",
          items:"Others"
        },
        {
          id: 152,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/po-logo.jpg",
          items:"Others"
        },
        {
          id: 153,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/24karat-color.jpg",
          items:"Others"
        },
        {
          id: 154,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/the-happy-hour-color.webp",
          items:"Others"
        },
        {
          id: 155,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/fiorella-color.webp",
          items:"Others"
        }
        ,
        {
          id: 156,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/okaya-color.jpg",
          items:"Industrial"
        }
        ,
        {
          id: 157,
          imageUrl: "https://thebrandbee.com/assets/imgs/brand/logo/leaseplan-color.webp",
          items:"Automobile"
        }
        ,
        {
          id: 158,
          imageUrl: "https://thebrandbee.com/assets/imgs/home/logo/g2g-holidays-color.jpg",
          items:"Hospitality"
        }
      ];
      
      const filteredData = activeIndex !== null && activeIndex !== 0
      ? data.filter(item => item.items === items[activeIndex])
      : data;

  return (
    <div className='esteemed-main1'>
      <div className='esteemed-main2'>
        <div className='esteemed-box1'>
          <h1>Our Esteemed Clients</h1>
        </div>
        <div className='esteemed-box2'>
          <div className='esteemed-flex1'>
            <div className='esteemed-list'>
              {items.map((label, index) => (
                <h1
                  key={index}
                  className={activeIndex === index ? 'active' : ''}
                  onClick={() => handleClick(index)}
                >
                  {label}
                </h1>
              ))}
            </div>
          </div>
          <div className='estm-flex2'>
            <div className='estm-view-grid'>
              {filteredData.map(item => (
                <div key={item.id} className='estm-view-grid-item'>
                  <img src={item.imageUrl} alt='' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurEsteemed
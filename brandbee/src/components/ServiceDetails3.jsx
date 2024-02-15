import React, { useEffect, useRef, useState } from "react";
import "./serviceDetails.css";
import { MdArrowOutward } from "react-icons/md";
import { useParams } from "react-router-dom";
import "./keyboard.css";
import { FaArrowRightLong } from "react-icons/fa6";
import SampleWork2 from "./SampleWork2";
import FAQ from "./FAQ";
import Form from "./Form";
import Articles from "./Articles";
import BrandStrategy from "./BrandStrategy";
import WorkFlow from "./WorkFlow";
import BrandIdentity from "./BrandIdentity";
import CorporateCommunication from "./CorporateCommunication";
import BrandRefresh from "./BrandRefresh";
import BrandCommunication from "./BrandCommunication";
import ContentDevelopment from "./ContentDevelopment";
import BrandExperience from "./BrandExperience";
import PhotoshootsVideo from "./PhotoshootsVideo";
import BrandConformance from "./BrandConformance ";
import WebsiteApp from "./WebsiteApp";
import SocialMediaMarketing from "./SocialMediaMarketing";
import SearchEngine from "./SearchEngine";
import ContentMarketing from "./ContentMarketing";
import PerformanceMarketing from "./PerformanceMarketing";
import CommunityInfluencer from "./CommunityInfluencer";
import VideoMarketing from "./VideoMarketing";
import EmailMarketing from "./EmailMarketing";
import OnlineReputation from "./OnlineReputation";
import MarketingAutomation from "./MarketingAutomation";
import Carousel from "./Carousel";
import SampleWork from "./SampleWork";
import SampleWork3 from "./SampleWork3";
import SampleWork5 from "./SampleWork5";
import SampleWork4 from "./SampleWork4";
import SampleWork6 from "./SampleWork6";
import SampleWork7 from "./SampleWork7";
import SampleWork8 from "./SampleWork8";
import SampleWork9 from "./SampleWork9";
import { useNavigate } from 'react-router-dom';
// import SampleWork2 from "./SampleWork2";



const data = [
  {
    titleId: "brandstrategy",
    id: 1,
    title:
      "We help you take the right direction, each step carefully laid with PRECISE PLANNING AND EXECUTION.",
    imageUrl:
      "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-strategy/950X500.jpg",
    description1:
      "Our brand strategy service is like a thrilling rollercoaster ride that takes your business on a journey of self-discovery and market domination. Our team of quirky strategists provides persona and audience consulting to ensure your brand speaks the language of your target customers. We'll craft a compelling brand positioning that sets you apart from the crowd, infuse your brand with a unique DNA, and design a solid brand architecture that supports your growth.",
    description2:
      "With our visionary approach, we'll help define your mission and vision statements, shape your brand's voice and personality, and conduct market research to uncover hidden opportunities. Get ready to buckle up and watch your brand soar to new heights with our exhilarating brand strategy service.",
    title2: "Scared of committing with us? Have a look at these stats….",
    scrollImg:
      "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-strategy/550X634.jpg",

    keyboardData: [
      {
        percentage: "94%",
        text: "94% of customers are likely to show loyalty to a brand that offers complete transparency.",
      },
      {
        percentage: "77%",
        text: "77% of B2B marketers say a well-defined brand strategy is crucial for any brand's growth.",
      },
      {
        percentage: "94%",
        text: "94% of people said they’d be highly likely to recommend a brand they were emotionally engaged with.",
      },
      {
        percentage: "81%",
        text: "81% of consumers across the globe said they need to be able to trust the brand they buy from.",
      },
    ],
  },
  {
    titleId: "brandidentity",
    id: 2,
    title:
      "Your brand identity speaks fo you. We build your identity with PROMISE OF QUALITY ANRELIABILITY",
    imageUrl:
      "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-identity/950X500.jpg",
    description1:
      "Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will take you on a fun and quirky journey of love and branding. We'll create a captivating brand name and design a logo that turns heads and craft a compelling brand story that forms an emotional bond with your audience. Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will",
    description2:
      "Our unique visual language will speak volumes, from colours to fonts and visual elements. Plus, our stunning imagery will leave a lasting impression on your audience, one and all. And let's not forget the irresistible packaging design! Get ready to make your brand the bee's knees and create a love story as sweet as honey. Trust The Brand Bee to. ",
    title2:
      "Don't believe that perfect identity attracts perfect matches? Have a look at these stats",
    scrollImg:
      "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-identity/550X634.jpg",

    keyboardData: [
      {
        percentage: "60%",
        text: "60% of marketers think that visuals are an important part of marketing, and thus branding.",
      },
      {
        percentage: "59%",
        text: "59% of customers don’t return to a business because of poor brand identity.",
      },
      {
        percentage: "94%",
        text: "94% of customers return to companies whose branding they like.",
      },
      {
        percentage: "60%",
        text: "60% of consumers will shun a brand if they find its logo to be unattractive, unpleasant, or strange.",
      },
      {
        percentage: "70%",
        text: "More than 70% of the best brand names are made-up words or acronyms.",
      },
    ],
  },
  {
    titleId: "corporatecommunication",
    id: 3,
    title:
      "For you to build better internal and external relationships, we hone your corporate communication with EFFECTIVITY AND AUTHENTICITY",
    imageUrl:
      "https://thebrandbee.com/assets/imgs/Brand-solution/Corporate-communication/950X500.jpg",
    description1:
      "With The Brand Bee's Corporate Communications Service, we infuse fun and quirkiness into building strong relationships within your organization. Our expert team will keep your employees informed and motivated through engaging internal communication strategies. We'll transform your employees into proud brand ambassadors with our creative employee branding service. Impress stakeholders with visually stunning annual reports that tell the story of your achievements.",
    description2:
      "Our captivating corporate videos bring your brand narrative to life. Celebrate milestones with our campaigns that foster pride and unity. We'll make policy communication engaging and digestible. And for memorable internal events, we'll add excitement and creativity. Let us be your guide to creating a thriving hive of positive engagement and success. Together, we'll make your organization the sweetest spot in the business world!",
    title2:
      "Strong communication needs consistency & a strong foundation. Don't believe it? See the stats",
    scrollImg:
      "https://thebrandbee.com/assets/imgs/Brand-solution/Corporate-communication/550X634.jpg",

    keyboardData: [
      {
        percentage: "46%",
        text: "46% of businesses say they’ve lost a customer because of poor communication.",
      },
      {
        percentage: "95%",
        text: "95% of people feel that the businesses they deal with could improve when it comes to communication and project management.",
      },
      {
        percentage: "35%",
        text: "More than 35% of businesses have lost an employee because of poor internal communication.",
      },
      {
        percentage: "70%",
        text: "Nearly 70% of the workforce would be more productive with effective communication in the workplace.",
      },
      {
        percentage: "70%",
        text: "Poor communication is responsible for 70% of corporate errors",
      },
    ],
  },
  {
    titleId: "brandrefresh",
    id: 4,
    title:
      "Time changes everything, even relationships. We save your relationships by refreshing your brand with DEDICATION AND A NEW PERSPECTIVE",
    imageUrl:
      "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-Refresh-Rebranding/950X500.jpg",
    description1:
      "Looking to spice up your brand's love life? Look no further than The Brand Bee's Brand Refresh/Rebranding Service! We'll start with a thorough Brand Audit to understand your brand's strengths and weaknesses. Then, we'll craft a Repositioning Strategy that will make heads turn and hearts skip a beat. But we don't stop there! Our New Brand Ignition will unveil your brand's fresh new look, attracting customers like bees to honey.",
    description2:
      "And with our Change Communication, we'll ensure a smooth transition, getting everyone excited about the new you. But that's not all! We offer Brand Training to empower your team and keep them up to date. And our Brand Evaluations will make sure your brand continues to thrive.",
    title2:
      "Brand Refresh needs good strategy and creativity. Don't believe it? See the stats",
    scrollImg:
      "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-Refresh-Rebranding/550X634.jpg ",

    keyboardData: [
      {
        percentage: "50%",
        text: "50% of consumers are more likely to buy from a company whose logo they easily recognize.",
      },
      {
        percentage: "20%",
        text: "Most companies spend between 10-20% of their marketing budget on branding or rebranding.",
      },
      {
        percentage: "71%",
        text: "71% of businesses with annual revenue of less than $500,000 have a monthly branding budget of $100-$500.",
      },
    ],
  },
  {
    titleId: "brandcommunication",
    "id": 5,
    "title": "Just like relationships evolve over time, brands need to adapt and grow. We understand the dynamics of brand relationships and help and help develop your brand with your BRAND STRATEGY AND IDENTITY",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-Communication-Design/950X500.jpg",
    "description1": "Add a dash of excitement to your brand's romance with our Brand Communication & Design Service. We begin by uncovering your brand's desires and aspirations through a deep Brand Romance Analysis. Our compelling Narrative Strategy and visually irresistible Creative Alchemy will captivate hearts and minds.",
    "description2": "But we go beyond that. Our seamless Transition Orchestration ensures everyone embraces the new you, and we empower your team to keep the passion alive. Experience the power of a captivating Go-to-Market Strategy, Integrated Ad Campaigns, and Print and Outdoor Media Communication. Elevate your brand with stunning Brand and Marketing Collaterals. Let The Brand Bee be your partner on this passionate journey, creating a love story that resonates and sets your brand apart.",
    "title2": "Not sure why your brand communication & design needs to be up to date with the trends? See the stats",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-Communication-Design/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "71%",
            "text": "71% of consumers are more likely to recommend a brand to others if they have a positive experience with its brand communication and design."
          },
          {
            "percentage": "85%",
            "text": "85% of marketers attribute increased brand awareness to effective brand communication and design strategies."
          },
          {
            "percentage": "59%",
            "text": "59% of consumers trust brands that have a consistent brand design across different platforms and channels."
          },
          {
            "percentage": "75%",
            "text": "75% of users judge a company's credibility based on its website design and brand communication."
          },
          {
            "percentage": "28%",
            "text": "Companies that prioritize user-centred design in their brand communication and design processes achieve a 228% higher return on investment."
          }
    ]
  },
  {
    titleId: "contentdevelopment",
    "id": 6,
    "title": "We Help you achieve content excellence by guiding you towards success with METICULOUS PLANNING and FLAWLESS EXECUTION",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Content-Development-Services/950X500.jpg",
    "description1": "Unlock the full potential of your brand with our comprehensive Content Development services! Our team of skilled professionals is dedicated to crafting exceptional content that captivates your audience and drives results. From creative writing to strategic planning, we cover every aspect of content development to ensure your brand's message is communicated effectively. With our content development services, we'll work closely with you to understand your goals, target audience, and brand identity.",
    "description2": "Whether it's engaging blog posts, informative articles, persuasive website copy, or captivating SEO content, we'll tailor each piece to align with your brand's voice and objectives. Let us be your content partner, helping you tell your brand's story, establish thought leadership, and cultivate meaningful connections. Elevate your brand with our content development services and leave a lasting impression on your audience. ",
    "title2": "Not sure why Content is called the King? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Content-Development-Services/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "60%",
            "text": "60% of marketers think that visuals are an important part of marketing, and thus branding."
          },
          {
            "percentage": "59%",
            "text": "59% of customers don’t return to a business because of poor brand identity."
          },
          {
            "percentage": "94%",
            "text": "94% of customers return to companies whose branding they like."
          },
          {
            "percentage": "60%",
            "text": "60% of consumers will shun a brand if they find its logo to be unattractive, unpleasant, or strange."
          },
          {
            "percentage": "70%",
            "text": "More than 70% of the best brand names are made-up words or acronyms."
          }
    ]
  },
  {
    titleId: "brandexperience",
    "id": 7,
    "title": "Navigating your brand's journey by guiding you towards success with ENGAGING BRAND EXPERIENCES",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-Experience-Design/950X500.jpg",
    "description1": "Our brand strategy service is like a thrilling rollercoaster ride that takes your business on a journey of self-discovery and market domination. Our team of quirky strategists provides persona and audience consulting to ensure your brand speaks the language of your target customers. We'll craft a compelling brand positioning that sets you apart from the crowd, infuse your brand with a unique DNA, and design a solid brand architecture that supports your growth.",
    "description2": "With our visionary approach, we'll help define your mission and vision statements, shape your brand's voice and personality, and conduct market research to uncover hidden opportunities. Get ready to buckle up and watch your brand soar to new heights with our exhilarating brand strategy service.",
    "title2": "Want to know why leaving an impeccable brand impression is important? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-Experience-Design/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "94%",
            "text": "94% of customers are likely to show loyalty to a brand that offers complete transparency."
          },
          {
            "percentage": "77%",
            "text": "77% of B2B marketers say a well-defined brand strategy is crucial for any brand's growth."
          },
          {
            "percentage": "94%",
            "text": "94% of people said they’d be highly likely to recommend a brand they were emotionally engaged with."
          },
          {
            "percentage": "81%",
            "text": "81% of consumers across the globe said they need to be able to trust the brand they buy from."
          }
    ]
  },
  {
    titleId: "photoshoots",
    "id": 8,
    "title": "We'll breathe new life into your visual content and ensure that your brand remains RELEVANT and CAPTIVATING in the ever-changing landscape",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Photoshoots-Video-Shoots/950X500.jpg",
    "description1": "Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will take you on a fun and quirky journey of love and branding. We'll create a captivating brand name and design a logo that turns heads and craft a compelling brand story that forms an emotional bond with your audience. Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will",
    "description2": "Our unique visual language will speak volumes, from colours to fonts and visual elements. Plus, our stunning imagery will leave a lasting impression on your audience, one and all. And let's not forget the irresistible packaging design! Get ready to make your brand the bee's knees and create a love story as sweet as honey. Trust The Brand Bee to. ",
    "title2": "Being picture-perfect is as important as making a lasting impression. Don't believe it? See the stats",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Photoshoots-Video-Shoots/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "60%",
            "text": "60% of marketers think that visuals are an important part of marketing, and thus branding."
          },
          {
            "percentage": "59%",
            "text": "59% of customers don’t return to a business because of poor brand identity."
          },
          {
            "percentage": "94%",
            "text": "94% of customers return to companies whose branding they like."
          },
          {
            "percentage": "60%",
            "text": "60% of consumers will shun a brand if they find its logo to be unattractive, unpleasant, or strange."
          },
          {
            "percentage": "70%",
            "text": "More than 70% of the best brand names are made-up words or acronyms."
          }
    ]
  },
  {
    titleId: "brandconformance",
    "id": 9,
    "title": "We ensure every aspect of your brand aligns seamlessly, empowering you to make a CONSISTENT and IMPACTFUL IMPRESSION on your audience.",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-Conformance/950X500.jpg",
    "description1": "Our brand strategy service is like a thrilling rollercoaster ride that takes your business on a journey of self-discovery and market domination. Our team of quirky strategists provides persona and audience consulting to ensure your brand speaks the language of your target customers. We'll craft a compelling brand positioning that sets you apart from the crowd, infuse your brand with a unique DNA, and design a solid brand architecture that supports your growth.",
    "description2": "With our visionary approach, we'll help define your mission and vision statements, shape your brand's voice and personality, and conduct market research to uncover hidden opportunities. Get ready to buckle up and watch your brand soar to new heights with our exhilarating brand strategy service.",
    "title2": "Don't know why being you is so important? See the stats",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Brand-Conformance/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "94%",
            "text": "94% of customers are likely to show loyalty to a brand that offers complete transparency."
          },
          {
            "percentage": "77%",
            "text": "77% of B2B marketers say a well-defined brand strategy is crucial for any brand's growth."
          },
          {
            "percentage": "94%",
            "text": "94% of people said they’d be highly likely to recommend a brand they were emotionally engaged with."
          },
          {
            "percentage": "81%",
            "text": "81% of consumers across the globe said they need to be able to trust the brand they buy from."
          }
    ]
  },
  {
    titleId: "websitemobile",
    "id": 10,
    "title": "We help you conquer the digital realm, with EXPERT, FLAWLESS & INNOVATIVELY-ENGINEERED Website & App Development",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Development/950X500.jpg",
    "description1": "Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will take you on a fun and quirky journey of love and branding. We'll create a captivating brand name and design a logo that turns heads and craft a compelling brand story that forms an emotional bond with your audience. Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will",
    "description2": "Our unique visual language will speak volumes, from colours to fonts and visual elements. Plus, our stunning imagery will leave a lasting impression on your audience, one and all. And let's not forget the irresistible packaging design! Get ready to make your brand the bee's knees and create a love story as sweet as honey. Trust The Brand Bee to. ",
    "title2": "Scared of committing with us? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Development/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "60%",
            "text": "60% of marketers think that visuals are an important part of marketing, and thus branding."
          },
          {
            "percentage": "59%",
            "text": "59% of customers don’t return to a business because of poor brand identity."
          },
          {
            "percentage": "94%",
            "text": "94% of customers return to companies whose branding they like."
          },
          {
            "percentage": "60%",
            "text": "60% of consumers will shun a brand if they find its logo to be unattractive, unpleasant, or strange."
          },
          {
            "percentage": "70%",
            "text": "More than 70% of the best brand names are made-up words or acronyms."
          }
    ]
  },
  {
    titleId: "socialmedia",
    "id": 11,
    "title": "We help you conquer the social media realm with our EXPERTLY TAILORED, SEAMLESSLY MANAGED, and CREATIVELY AMPLIFIED Social Media Marketing services.",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Digital-solution/Social-Media-Marketing/950X500.jpg",
    "description1": "Our brand strategy service is like a thrilling rollercoaster ride that takes your business on a journey of self-discovery and market domination. Our team of quirky strategists provides persona and audience consulting to ensure your brand speaks the language of your target customers. We'll craft a compelling brand positioning that sets you apart from the crowd, infuse your brand with a unique DNA, and design a solid brand architecture that supports your growth.",
    "description2": "With our visionary approach, we'll help define your mission and vision statements, shape your brand's voice and personality, and conduct market research to uncover hidden opportunities. Get ready to buckle up and watch your brand soar to new heights with our exhilarating brand strategy service.",
    "title2": "Not sure why building bonds over social media is important? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Digital-solution/Social-Media-Marketing/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "94%",
            "text": "94% of customers are likely to show loyalty to a brand that offers complete transparency."
          },
          {
            "percentage": "77%",
            "text": "77% of B2B marketers say a well-defined brand strategy is crucial for any brand's growth."
          },
          {
            "percentage": "94%",
            "text": "94% of people said they’d be highly likely to recommend a brand they were emotionally engaged with."
          },
          {
            "percentage": "81%",
            "text": "81% of consumers across the globe said they need to be able to trust the brand they buy from."
          }
    ]
  },
  {
    titleId: "searchengine",
    "id": 12,
    "title": "Unleash the potential of our SEO Marketing service as we forge IMPACTFUL STRATEGIES, propelling your brand's reach and resonance.",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/SEO-Marketing/950X500.jpg",
    "description1": "Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will take you on a fun and quirky journey of love and branding. We'll create a captivating brand name and design a logo that turns heads and craft a compelling brand story that forms an emotional bond with your audience. Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will",
    "description2": "Our unique visual language will speak volumes, from colours to fonts and visual elements. Plus, our stunning imagery will leave a lasting impression on your audience, one and all. And let's not forget the irresistible packaging design! Get ready to make your brand the bee's knees and create a love story as sweet as honey. Trust The Brand Bee to. ",
    "title2": "Wondering why being there is not enough, being searchable is important? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/SEO-Marketing/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "60%",
            "text": "60% of marketers think that visuals are an important part of marketing, and thus branding."
          },
          {
            "percentage": "59%",
            "text": "59% of customers don’t return to a business because of poor brand identity."
          },
          {
            "percentage": "94%",
            "text": "94% of customers return to companies whose branding they like."
          },
          {
            "percentage": "60%",
            "text": "60% of consumers will shun a brand if they find its logo to be unattractive, unpleasant, or strange."
          },
          {
            "percentage": "70%",
            "text": "More than 70% of the best brand names are made-up words or acronyms."
          }
    ]
  },
  {
    titleId: "contentmarketing",
    "id": 13,
    "title": "Transform Your Brand's Narrative with our ARTFULLY CRAFTED, STRATEGICALLY OPTIMIZED, and IRRESISTIBLY ENGAGING Content Marketing Services.",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Digital-solution/Content-marketing/950X500.jpg",
    "description1": "Our brand strategy service is like a thrilling rollercoaster ride that takes your business on a journey of self-discovery and market domination. Our team of quirky strategists provides persona and audience consulting to ensure your brand speaks the language of your target customers. We'll craft a compelling brand positioning that sets you apart from the crowd, infuse your brand with a unique DNA, and design a solid brand architecture that supports your growth.",
    "description2": "With our visionary approach, we'll help define your mission and vision statements, shape your brand's voice and personality, and conduct market research to uncover hidden opportunities. Get ready to buckle up and watch your brand soar to new heights with our exhilarating brand strategy service.",
    "title2": "It is not just for the sake of saying that “Content is the King”? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Digital-solution/Content-marketing/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "94%",
            "text": "94% of customers are likely to show loyalty to a brand that offers complete transparency."
          },
          {
            "percentage": "77%",
            "text": "77% of B2B marketers say a well-defined brand strategy is crucial for any brand's growth."
          },
          {
            "percentage": "94%",
            "text": "94% of people said they’d be highly likely to recommend a brand they were emotionally engaged with."
          },
          {
            "percentage": "81%",
            "text": "81% of consumers across the globe said they need to be able to trust the brand they buy from."
          }
    ]
  },
  {
    titleId: "performancemarketing",
    "id": 14,
    "title": "We help you unlock Your Brand's Performance Potential with Our EXPERTLY TAILORED Performance Marketing STRATEGIES",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Performance-Marketing/950X500.jpg",
    "description1": "Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will take you on a fun and quirky journey of love and branding. We'll create a captivating brand name and design a logo that turns heads and craft a compelling brand story that forms an emotional bond with your audience. Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will",
    "description2": "Our unique visual language will speak volumes, from colours to fonts and visual elements. Plus, our stunning imagery will leave a lasting impression on your audience, one and all. And let's not forget the irresistible packaging design! Get ready to make your brand the bee's knees and create a love story as sweet as honey. Trust The Brand Bee to. ",
    "title2": "Not sure why performance matters? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Performance-Marketing/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "60%",
            "text": "60% of marketers think that visuals are an important part of marketing, and thus branding."
          },
          {
            "percentage": "59%",
            "text": "59% of customers don’t return to a business because of poor brand identity."
          },
          {
            "percentage": "94%",
            "text": "94% of customers return to companies whose branding they like."
          },
          {
            "percentage": "60%",
            "text": "60% of consumers will shun a brand if they find its logo to be unattractive, unpleasant, or strange."
          },
          {
            "percentage": "70%",
            "text": "More than 70% of the best brand names are made-up words or acronyms."
          }
    ]
  },
  {
    titleId: "communityinfluencer",
    "id": 15,
    "title": "We help you amplify your brand's reach and impeach with our CREATIVE INFLUENCER PARTNERSHIP",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Community-Influencer-Marketing/950X500.jpg",
    "description1": "Our brand strategy service is like a thrilling rollercoaster ride that takes your business on a journey of self-discovery and market domination. Our team of quirky strategists provides persona and audience consulting to ensure your brand speaks the language of your target customers. We'll craft a compelling brand positioning that sets you apart from the crowd, infuse your brand with a unique DNA, and design a solid brand architecture that supports your growth.",
    "description2": "With our visionary approach, we'll help define your mission and vision statements, shape your brand's voice and personality, and conduct market research to uncover hidden opportunities. Get ready to buckle up and watch your brand soar to new heights with our exhilarating brand strategy service.",
    "title2": "Don't know why long-lasting & influential relations are important? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Community-Influencer-Marketing/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "94%",
            "text": "94% of customers are likely to show loyalty to a brand that offers complete transparency."
          },
          {
            "percentage": "77%",
            "text": "77% of B2B marketers say a well-defined brand strategy is crucial for any brand's growth."
          },
          {
            "percentage": "94%",
            "text": "94% of people said they’d be highly likely to recommend a brand they were emotionally engaged with."
          },
          {
            "percentage": "81%",
            "text": "81% of consumers across the globe said they need to be able to trust the brand they buy from."
          }
    ]
  },
  {
    titleId: "videomarketing",
    "id": 16,
    "title": "We Illuminate Your Brand's Potential Through the Artistry of Custom Video Marketing EXPERTLY TAILORED for you",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Video-Marketing/950X500.jpg",
    "description1": "Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will take you on a fun and quirky journey of love and branding. We'll create a captivating brand name and design a logo that turns heads and craft a compelling brand story that forms an emotional bond with your audience. Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will",
    "description2": "Our unique visual language will speak volumes, from colours to fonts and visual elements. Plus, our stunning imagery will leave a lasting impression on your audience, one and all. And let's not forget the irresistible packaging design! Get ready to make your brand the bee's knees and create a love story as sweet as honey. Trust The Brand Bee to. ",
    "title2": "A video speaks louder than words don't know why? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Video-Marketing/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "60%",
            "text": "60% of marketers think that visuals are an important part of marketing, and thus branding."
          },
          {
            "percentage": "59%",
            "text": "59% of customers don’t return to a business because of poor brand identity."
          },
          {
            "percentage": "94%",
            "text": "94% of customers return to companies whose branding they like."
          },
          {
            "percentage": "60%",
            "text": "60% of consumers will shun a brand if they find its logo to be unattractive, unpleasant, or strange."
          },
          {
            "percentage": "70%",
            "text": "More than 70% of the best brand names are made-up words or acronyms."
          }
    ]
  },
  {
    titleId: "emailmarketing",
    "id": 17,
    "title": "Elevate your brand's narrative with our ARTFULLY CRAFTED and STRATEGICALLY OPTIMIZED Email Marketing Service, captivating your audience with irresistibly engaging campaigns.",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Email-Marketing/950X500.jpg",
    "description1": "Our brand strategy service is like a thrilling rollercoaster ride that takes your business on a journey of self-discovery and market domination. Our team of quirky strategists provides persona and audience consulting to ensure your brand speaks the language of your target customers. We'll craft a compelling brand positioning that sets you apart from the crowd, infuse your brand with a unique DNA, and design a solid brand architecture that supports your growth.",
    "description2": "With our visionary approach, we'll help define your mission and vision statements, shape your brand's voice and personality, and conduct market research to uncover hidden opportunities. Get ready to buckle up and watch your brand soar to new heights with our exhilarating brand strategy service.",
    "title2": "Don't know why landing in the inbox is essential? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Email-Marketing/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "94%",
            "text": "94% of customers are likely to show loyalty to a brand that offers complete transparency."
          },
          {
            "percentage": "77%",
            "text": "77% of B2B marketers say a well-defined brand strategy is crucial for any brand's growth."
          },
          {
            "percentage": "94%",
            "text": "94% of people said they’d be highly likely to recommend a brand they were emotionally engaged with."
          },
          {
            "percentage": "81%",
            "text": "81% of consumers across the globe said they need to be able to trust the brand they buy from."
          }
    ]
  },
  {
    titleId: "onlinereputation",
    "id": 18,
    "title": "Elevate your brand's online presence by captivating your audience with an IRRESISTIBLE and POSITIVELY RESONATING digital narrative.",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Online-Reputation-Management/950X500.jpg",
    "description1": "Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will take you on a fun and quirky journey of love and branding. We'll create a captivating brand name and design a logo that turns heads and craft a compelling brand story that forms an emotional bond with your audience. Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will",
    "description2": "Our unique visual language will speak volumes, from colours to fonts and visual elements. Plus, our stunning imagery will leave a lasting impression on your audience, one and all. And let's not forget the irresistible packaging design! Get ready to make your brand the bee's knees and create a love story as sweet as honey. Trust The Brand Bee to. ",
    "title2": "We are sure you agree to the fact that “Reputation Matters”? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Online-Reputation-Management/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "60%",
            "text": "60% of marketers think that visuals are an important part of marketing, and thus branding."
          },
          {
            "percentage": "59%",
            "text": "59% of customers don’t return to a business because of poor brand identity."
          },
          {
            "percentage": "94%",
            "text": "94% of customers return to companies whose branding they like."
          },
          {
            "percentage": "60%",
            "text": "60% of consumers will shun a brand if they find its logo to be unattractive, unpleasant, or strange."
          },
          {
            "percentage": "70%",
            "text": "More than 70% of the best brand names are made-up words or acronyms."
          }
    ]
  },
  {
    titleId: "marketingautomation",
    "id": 19,
    "title": "Automate your brand's potential with our dynamic Marketing Automation service, forging impactful partnerships and AMPLIFYING YOUR PROCESSES WITH AUTOMATION.",
    "imageUrl": "https://thebrandbee.com/assets/imgs/Brand-solution/Marketing-Automation/950X500.jpg",
    "description1": "Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will take you on a fun and quirky journey of love and branding. We'll create a captivating brand name and design a logo that turns heads and craft a compelling brand story that forms an emotional bond with your audience. Discover the perfect brand match with The Brand Bee's Brand Identity Service! Our team of buzzing ideators and creators will",
    "description2": "Our unique visual language will speak volumes, from colours to fonts and visual elements. Plus, our stunning imagery will leave a lasting impression on your audience, one and all. And let's not forget the irresistible packaging design! Get ready to make your brand the bee's knees and create a love story as sweet as honey. Trust The Brand Bee to. ",
    "title2": "Don't know why automation is the “New Normal”? Have a look at these stats….",
    "scrollImg": "https://thebrandbee.com/assets/imgs/Brand-solution/Marketing-Automation/550X634.jpg",
   
    "keyboardData": [
          {
            "percentage": "97%",
            "text": "Businesses that prioritize content development, experience a 97% increase in website traffic."
          },
          {
            "percentage": "67%",
            "text": "Content development drives a 67% increase in leads compared to traditional outbound marketing methods."
          },
          {
            "percentage": "78%",
            "text": "78% of consumers prefer getting to know a brand through articles rather than ads."
          },
          {
            "percentage": "67%",
            "text": "Companies that regularly publish blog content generate 67% more leads per month than those that don't."
          },
          {
            "percentage": "70%",
            "text": "More than 70% of the best brand names are made-up words or acronyms."
          }
    ]
  }
];

const ServiceDetails3 = () => {
  const containerRef = useRef();
  const [firstRender, setFirstRender] = useState(true);
  const params = useParams();
  const [paramid, setParamid] = useState();

  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === "letstalk") {
      console.log(id);
      navigate("/letstalk");
      window.scrollTo(0, 0);
      
    }
  }

  console.log(params, "1");
  console.log(params.id, "params", data[0]);

  const idToFind = params.id;
  // setParamid(idToFind)
  const filteredData = data.filter((item) => idToFind == item.titleId);
  console.log(filteredData, "filteredData");

  const item = filteredData[0];
  console.log(item, "item");

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        container.style.animation = "fadeInUp 1s forwards";
      } else {
        container.style.animation = "none";
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  useEffect(() => {
    setParamid(idToFind);
  }, [idToFind]);


  let componentToRender;
  switch (paramid) {
    case "brandstrategy":
      componentToRender = <BrandStrategy />;
      break;
    case "brandidentity":
      componentToRender = <BrandIdentity />;
      break;
    case "corporatecommunication":
      componentToRender = <CorporateCommunication />;
      break;
    case "brandrefresh":
      componentToRender = <BrandRefresh />;
      break;

      case "brandcommunication":
      componentToRender = <BrandCommunication/>;
      break;
    case "contentdevelopment":
      componentToRender = <ContentDevelopment />;
      break;
    case "brandexperience":
      componentToRender = <BrandExperience />;
      break;
    case "photoshoots":
      componentToRender = <PhotoshootsVideo />;
      break;

      case "brandconformance":
      componentToRender = <BrandConformance />;
      break;
    case "websitemobile":
      componentToRender = <WebsiteApp />;
      break;
    case "socialmedia":
      componentToRender = <SocialMediaMarketing />;
      break;
    case "searchengine":
      componentToRender = <SearchEngine />;
      break;

      case "contentmarketing":
      componentToRender = <ContentMarketing />;
      break;
    case "performancemarketing":
      componentToRender = <PerformanceMarketing />;
      break;
    case "communityinfluencer":
      componentToRender = <CommunityInfluencer />;
      break;
    case "videomarketing":
      componentToRender = <VideoMarketing />;
      break;

      case "emailmarketing":
      componentToRender = <EmailMarketing />;
      break;
    case "onlinereputation":
      componentToRender = <OnlineReputation />;
      break;
    case "marketingautomation":
      componentToRender = <MarketingAutomation />;
      break;
    

    default:
      componentToRender = <div>Default Component</div>; // Change this to handle other cases
      break;
  }



  let sampleComponent;
  switch (paramid) {
    case "brandstrategy":
      sampleComponent = <Carousel />;
      break;
    case "brandidentity":
      sampleComponent = <SampleWork />;
      break;
    case "corporatecommunication":
      sampleComponent = <SampleWork2 />;
      break;
    case "brandrefresh":
      sampleComponent = <SampleWork5 />;
      break;

      case "brandcommunication":
      sampleComponent = <SampleWork3/>;
      break;
    case "contentdevelopment":
      sampleComponent = <Carousel />;
      break;
    case "brandexperience":
      sampleComponent = <Carousel />;
      break;
    case "photoshoots":
      sampleComponent = <SampleWork4 />;
      break;

      case "brandconformance":
      sampleComponent = <Carousel />;
      break;
    case "websitemobile":
      sampleComponent = <SampleWork6 />;
      break;
    case "socialmedia":
      sampleComponent = <SampleWork7 />;
      break;
    case "searchengine":
      sampleComponent = <newSample />;
      break;

      case "contentmarketing":
      sampleComponent = <Carousel />;
      break;
    case "performancemarketing":
      sampleComponent = <newSample />;
      break;
    case "communityinfluencer":
      sampleComponent = <Carousel />;
      break;
    case "videomarketing":
      sampleComponent = <SampleWork />;
      break;

      case "emailmarketing":
      sampleComponent = <SampleWork8 />;
      break;
    case "onlinereputation":
      sampleComponent = <SampleWork9 />;
      break;
    case "marketingautomation":
      sampleComponent = <Carousel />;
      break;
    

    default:
      sampleComponent = <div>Default Component</div>; // Change this to handle other cases
      break;
  }


  return (
    <>
      <div>
      {componentToRender}
    </div>

      <div>
        <WorkFlow />
      </div>
      <div className="serviceDetails-main1">
        {/* {data.map((item) => ( */}
        <div key={item.id} className="serviceDetails-main2">
          <div>
            <div className="serviceDetails-heading">
              <div className="serviceDetails-heading1">
                <div
                  ref={containerRef}
                  style={{
                    whiteSpace: "pre-line",
                    height: "195px",
                    display: "block",
                    opacity: 0,
                    transform: "translateY(20px)",
                    animation: "none",
                  }}
                >
                
                  <h1>{item.title}</h1>
                </div>
              </div>
              <div className="serviceDetails-heading1">
                <div className="serviceDetails-banner-btn">
                  <button onClick={()=>handleClick("letstalk")} className="serviceDetails-banner-btn2">
                    Ready To Bee Everything?{" "}
                    <span>
                      <MdArrowOutward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="serviceDetails-imagee">
              <div className="serviceDetails-circle">
                <div className="serviceDetails-circle1"></div>
              </div>
              <div className="serviceDetails-image">
                <img src={item.imageUrl} alt="" />
              </div>
            </div>
            <div className="serviceDetails-paragh">
              <div className="serviceDetails-paragh-box">
                <div className="serviceDetails-paragh1">
                  <p>{item.description1}</p>
                </div>
                <div className="serviceDetails-paragh1">
                  <p>{item.description2}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="keyboard-main2" key={item.id}>
            <div
              className="keyboard-imagee"
              style={{ backgroundImage: `url(${item.scrollImg})` }}
            ></div>
            <div className="keyboard-texts">
              <div className="keyboard-texts1">
                <div className="keyboard-box"> </div>
                <div className="keyboard-box-texts">
                  <h1>{item.title2}</h1>
                </div>
              </div>
              <hr />

              {item.keyboardData.map((data, index) => (
                <div key={index} className="keyboard-texts1">
                  <div className="keyboard-box">
                    <h1>{data.percentage}</h1>
                  </div>
                  <div className="keyboard-box-texts2">
                    <p>{data.text}</p>
                  </div>
                  {(index < item.keyboardData.length - 1 || firstRender) && (
                    <hr key={`hr-${index}`} />
                  )}
                </div>
              ))}
              <hr />

              <div className="keyboard-texts1">
                <div className="keyboard-box"></div>
                <div className="keyboard-box-texts2">
                  <button onClick={()=>handleClick("letstalk")} className="keyboard-btn-started">
                    Ready To Bee Everything
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>

      <div>
        {sampleComponent}
      </div>
      <div>
        <Form />
      </div>
      <div>
        {" "}
        <FAQ />
      </div>
      <div>
        <Articles />
      </div>
    </>
  );
};

export default ServiceDetails3;

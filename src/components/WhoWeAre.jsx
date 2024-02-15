import React from 'react'
import './whoweare.css'

const WhoWeAre = () => {
  return (
    <div className='whoeweare-main1'>
        <div className='whoeweare-main2'>
            <div className='whoeweare-text1'>
                <div className='whoeweare-heading'>
                    <h1>Who We Are?</h1>
                </div>
            </div>
            <div className='whoeweare-text2'>
              <div className='whoeweare-paragh1'>
                <p>We are a buzzing hive of young crazy cupids, 
                <br/>who love creating work that’s provocative, 
                <br/>ignites meaning and stings awareness 
                (in a <br/>good way).

</p>
              </div>
              <div className='whoeweare-paragh2'>
                <div className='whoeweare-logo'>
                  <img src='https://thebrandbee.com/assets/imgs/about/award.png' alt=''/>
                </div>
              </div>
            </div>
            <div className='whoeweare-text3'>
              <div className='whoeweare-video'>
                <video autoPlay muted loop width='100%' src="https://thebrandbee.com/assets/video/home-video.mp4"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre
import React, { Component } from "react";
import Slider from "react-slick";
import './ads.css';
import { IoClose } from "react-icons/io5";


export default class Ads extends Component {
  

    componentDidMount() {
        // Load the YouTube IFrame API
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);
    
        // Set up the onYouTubeIframeAPIReady callback
        window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
      }
    
      onYouTubeIframeAPIReady = () => {
        // Create a new YouTube player inside the 'player-container' div
        this.player = new window.YT.Player('player-container', {
          height: '390',
          width: '640',
          videoId: '', // Replace with your actual YouTube video ID
          events: {
            'onReady': this.onPlayerReady,
            // other event handlers
          },
        });
      };
 
    constructor(props) {
        super(props);
        this.state = {
          videoVisible: false,
          videoUrl:"",
          player: null,
        };
      }
    
      openVideoPage = (url) => {
        // let { seturl } = this.state;
        console.log(url,"eve")
        // var seturl="https://youtu.be/Tofrx7zrVqM?autoplay=1"
        this.setState({ videoVisible: true ,videoUrl: url});
      };
    
      closeVideoPage = () => {
        const { player } = this.state;
        if (player) {
          player.pauseVideo();
        }
        this.setState({ videoVisible: false });
      };
    
      onPlayerReady = (event) => {
        if (this.player) {
          this.player.playVideo();
        }
    };

    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,  
        autoplaySpeed: 3000,  
        arrows: false,
      };
      // const [url ,setUrl]=this.State("")
      const { videoVisible } = this.state;
      

  return (
    <div className='ads-main1'>
        <div className='ads-main2'>
            <div className='ads-box1'>
                <div className='ads-heading'>
                    <h1>ADS THAT PERFORM</h1>
                </div>
            </div>
            <div className='ads-box2'>
                <div className='ads-carousel'>
                <Slider {...settings}>
                <div className='carousel-box'>
                         <img src='https://thebrandbee.com/assets/imgs/work/lp1.jpg' alt=''/>
                    </div>
                    <div className='carousel-box'>
                         <img src='https://thebrandbee.com/assets/imgs/work/lp2.jpg' alt=''/>
                    </div>
                    <div className='carousel-box'>
                    <img src='https://thebrandbee.com/assets/imgs/work/lp3.jpg' alt=''/>
                    </div>
                    <div className='carousel-box'>
                    <img src='https://thebrandbee.com/assets/imgs/work/lp4.jpg' alt=''/>
                    </div>
                    <div className='carousel-box'>
                    <img src='https://thebrandbee.com/assets/imgs/work/lp5.jpg' alt=''/>
                    </div>
                    <div className='carousel-box'>
                    <img src='https://thebrandbee.com/assets/imgs/work/lp6.jpg' alt=''/>
                    </div>



        {/* video */}
                    <div className='carousel-box'>
                  <button
                    style={{ opacity: videoVisible ? 0.5 : 1 }}
                    onClick={()=>this.openVideoPage("https://www.youtube.com/embed/Tofrx7zrVqM?autoplay=1")}
                  >
                    <img src="https://thebrandbee.com/assets/imgs/work/CW-350X350.png" alt=''/>
                  </button>
                </div>

                <div className='carousel-box'>
                  <button
                    style={{ opacity: videoVisible ? 0.5 : 1 }}
                    onClick={()=>this.openVideoPage("https://www.youtube.com/embed/l2YVh9Rw9BU?autoplay=1")}
                  >
                    <img src="https://thebrandbee.com/assets/imgs/work/UB.png" alt=''/>
                  </button>
                </div>

                <div className='carousel-box'>
                  <button
                    style={{ opacity: videoVisible ? 0.5 : 1 }}
                    onClick={()=>this.openVideoPage("https://www.youtube.com/embed/sAJq8M_tT68?autoplay=1")}
                  >
                    <img src="https://thebrandbee.com/assets/imgs/work/v2.png" alt=''/>
                  </button>
                </div>

                <div className='carousel-box'>
                  <button
                    style={{ opacity: videoVisible ? 0.5 : 1 }}
                    onClick={()=>this.openVideoPage("https://www.youtube.com/embed/Ex6sqi-1Ovo?autoplay=1")}
                  >
                    <img src="https://thebrandbee.com/assets/imgs/work/v3.png" alt=''/>
                  </button>
                </div>

                <div className='carousel-box'>
                  <button
                    style={{ opacity: videoVisible ? 0.5 : 1 }}
                    onClick={()=>this.openVideoPage("https://www.youtube.com/embed/7Indl5Q5n98?autoplay=1")}
                  >
                    <img src="https://thebrandbee.com/assets/imgs/work/v4.png" alt=''/>
                  </button>
                </div>



                {/* https://youtu.be/l2YVh9Rw9BU
                https://www.youtube.com/shorts/7Indl5Q5n98?feature=share
                https://www.youtube.com/shorts/sAJq8M_tT68?feature=share
                https://www.youtube.com/shorts/Ex6sqi-1Ovo?feature=share
                https://www.youtube.com/shorts/Ex6sqi-1Ovo?feature=share */}


                    <div className='carousel-box'>
                    <img src='https://thebrandbee.com/assets/imgs/work/v5.jpg' alt=''/>
                    </div>
                    <div className='carousel-box'>
                    <img src=" https://thebrandbee.com/assets/imgs/work/Hi-Life-2.png" alt=''/>
                    </div>
                    <div className='carousel-box'>
                    <img src=" https://thebrandbee.com/assets/imgs/work/Hi-Life-3.png" alt=''/>
                    </div>
                    <div className='carousel-box'>
                    <img src=" https://thebrandbee.com/assets/imgs/work/Mallcom-1-350x350.jpg" alt=''/>
                    </div>
                    <div className='carousel-box'>
                    <img src=" https://thebrandbee.com/assets/imgs/work/Mallcom-2-350x350.jpg" alt=''/>
                    </div>
                    <div className='carousel-box'>
                    <img src='https://thebrandbee.com/assets/imgs/work/Mallcom-3-350x350.jpg' alt=''/>
                    </div>


                    
          
                  </Slider>
                </div>
            </div>
        </div>
                
        {videoVisible && (
          <div className='video-modal'>
            <div className='backdrop' onClick={this.closeVideoPage}></div>
            <div className='video-container'>
            <iframe width="100%" height="100%" src={this.state.videoUrl}   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <button className='close-button' onClick={this.closeVideoPage}>
                <IoClose />
              </button>
            </div>
          </div>
        )}







     </div>
    );
  }
}



      
                // <div class="d-block mb-4">
                //     <label for="sequence">Thumbnail<span>*</span></label>
                //     <!-- <label for="sequnce">Sequence</label> -->
                //     <div *ngIf="videolink">
                //         <!-- <iframe width="560" height="315" [src]="videolink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                //         <iframe width="250" height="160" [src]="getvideo(videolink) | safe " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                //         </div>
                  
                // </div>

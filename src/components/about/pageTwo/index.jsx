

import React, { Component } from 'react';


import VideoLooper from 'react-video-looper'
//import sampleVideo from '../../../files/Video1.mp4'

import './index.scss'


const PageTwo = () =>{

    return(
        <div className="pageTwoContainerAbout">
            <div className="videoContainer">

           
            </div>
            <section>
                <label className="title"></label>
                <label className="subtitle">
                    An extravaganza of cosmetic fantasies in terms of skin and hair care and prestige perfumes is presented on the first level by highly qualified coaches.
                </label>
                <text className="text">
                    The Mezzanine adds to the luxury with exclusive rare fragrances, offering a personal welcome in a splendid setting. Displaying a sumptuous selection of fine fragrance brands from around the world, it is the place where lovers of excellence can come to fulfil their sensory dreams.
                </text>
            </section>



        </div>
    )
}

export default PageTwo

/* 
 <VideoLooper source={sampleVideo} start={0} end={130} muted={false} className="Video" />    
           

*/
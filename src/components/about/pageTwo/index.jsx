

import React, { Component } from 'react';


import VideoLooper from 'react-video-looper'
import sampleVideo from '../../../files/Video1.mp4'

import './index.scss'
import { useSearchParams } from 'react-router-dom';

const PageTwo = () =>{
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')
    return(
        <div className="pageTwoContainerAbout">
            <div className="videoContainer">
                <VideoLooper source={sampleVideo} start={0} end={130} muted={false} className="Video" />                     
            </div>
            <section>
                <label className="title"></label>
                <label className="subtitle">
                    {
                        ln ==='fr'?
                        "Le premier niveau est un festival de tout ce qu’on peut rêver en matière de soins de la peau, soins capillaires et parfums de prestige avec des accompagnateurs hautement qualifié."
                        :
                        "An extravaganza of cosmetic fantasies in terms of skin and hair care and prestige perfumes is presented on the first level by highly qualified coaches."
                    } 
                        
                </label>
                <text className="text">
                    {
                        ln ==='fr'?
                        "La Mezzanine , ajoute encore au luxe avec, en exclusivité, des fragrances rares , le tout dans un splendide décor et un accueil personnalisé .. Abritant une somptueuse sélection de marques de parfumerie fine du monde entier, c’est l’endroit où les amateurs d’excellence , peuvent venir réaliser leurs rêves sensoriels."
                        :
                        "The Mezzanine adds to the luxury with exclusive rare fragrances, offering a personal welcome in a splendid setting. Displaying a sumptuous selection of fine fragrance brands from around the world, it is the place where lovers of excellence can come to fulfil their sensory dreams."
                    } 
                    
                </text>
            </section>



        </div>
    )
}

export default PageTwo

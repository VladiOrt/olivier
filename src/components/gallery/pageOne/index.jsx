
import  './index.scss'
import gsap from 'gsap'
import { useRef } from 'react'


import Flecha from '../../../img/gallery/flecha.svg'





const PageOne = () =>{

    const tl = gsap.timeline()
    const Ventana = useRef(null);

    let duracion = 0.4

    function VerMas(){
        tl.add('openbutton')
        tl.from(Ventana.current, { display:'none' , opacity:0, duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Ventana.current, { display:'flex' , opacity:1 , duration:duracion  , ease: 'circ.out'}, 'openbutton')
          
    }
    return(
        <div className="containerGalleryPageOne">
            <section className='title'>
                <label > GALLERY </label>
            </section>
            <section className='galleryContent'>
                <div className="imageOne"></div>
                <div className="imageTwo"></div>
                <div className="imageThreeDesktop"></div>
                <div className="imageThree"></div>
                <div className="imageFour"></div>
            </section>
            <section className='galleryContentDos' ref={Ventana}>
                <div className="imageOne"></div>
                <div className="imageTwo"></div>
                <div className="imageThree"  ></div>
                <div className="imageFour"></div>
                <div className="imageFive"></div>
            </section>
            <section className='More'>

                <div className="buttonMore" onClick={() => VerMas()}>
                    <label>SEE MORE</label>
                    <img src={Flecha}></img>
                </div>
            </section>
        </div>
    )
}

export default PageOne

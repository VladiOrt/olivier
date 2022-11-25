import './index.scss'

import { useRef, useState } from 'react';
import gsap from 'gsap'




import Carrusel1Imagen1 from '../../../img/carruseles/img1-1.svg'
import Carrusel1Imagen2 from '../../../img/carruseles/img1-2.svg'
import Carrusel1Imagen3 from '../../../img/carruseles/img1-3.svg'
import Carrusel1Imagen4 from '../../../img/carruseles/img1-4.svg'
import Carrusel1Imagen5 from '../../../img/carruseles/img1-5.svg'
import Carrusel1Imagen6 from '../../../img/carruseles/img1-6.svg'


const PageTwo = () =>{
    const duracion = 0.4
    const[imagenActual, setImagenActual] = useState('1to1')
    let tl = gsap.timeline();
    const Imagen1to1 = useRef(null);
    const Imagen1to2 = useRef(null);
    const Imagen1to3 = useRef(null);
   
   
    function Cambiar(id)
    {
        //Image one
        if(id ==='1to1' && imagenActual!='1to1' && imagenActual=='1to2'  ){
            tl.add('openbutton')
            .from(Imagen1to1.current, { zIndex:"2" , x:-500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to1.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to2.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to3.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            setImagenActual('1to1')
        }
        if(id ==='1to1' && imagenActual!='1to1' && imagenActual=='1to3'  ){
            tl.add('openbutton')
            .from(Imagen1to1.current, { zIndex:"2" , x:500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to1.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to2.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to3.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            setImagenActual('1to1')
        } 
        //Image Two
        if(id ==='1to2' && imagenActual!='1to2' && imagenActual=='1to1' ){
            tl.add('openbutton')
            .from(Imagen1to2.current, { zIndex:"2" , x:500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to2.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to1.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to3.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         

            setImagenActual('1to2')
        }
        if(id ==='1to2' && imagenActual!='1to2' && imagenActual=='1to3' ){
            tl.add('openbutton')
            .from(Imagen1to2.current, { zIndex:"2" , x:-500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to2.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to1.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to3.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         

            setImagenActual('1to2')
        }
        //Image Three
        if(id ==='1to3' && imagenActual!='1to3'  && imagenActual=='1to1' ){
            tl.add('openbutton')
            .from(Imagen1to3.current, { zIndex:"2" , x:500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to3.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to1.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to2.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         

            setImagenActual('1to3')
        }
        if(id ==='1to3' && imagenActual!='1to3'  && imagenActual=='1to2' ){
            tl.add('openbutton')
            .from(Imagen1to3.current, { zIndex:"2" , x:500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to3.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to1.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to2.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         

            setImagenActual('1to3')
        }


    }


    return(
        <div className="PageTwoContainer">
           <div className="sectionOne">
           </div>
           <div className="sectionTwo"></div>
           <div className="sectionThree">












<div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src={Carrusel1Imagen1}  alt="" className='img1' />
		</div>
		<div class="slide">
			<img src={Carrusel1Imagen2}  alt="" />
		</div>
        <div class="slide">
			<img src={Carrusel1Imagen3}  alt="" />
		</div>
		<div class="slide">
			<img src={Carrusel1Imagen4} alt="" />
		</div>
		<div class="slide">
			<img src={Carrusel1Imagen5} alt="" />
		</div>
		<div class="slide">
			<img src={Carrusel1Imagen6}  alt="" />
		</div>		
	</div>
</div>















               
           </div>
           <div className="sectionFour">
                <div className="ImageOne" ref={Imagen1to1}></div>
                <div className="ImageTwo" ref={Imagen1to2}></div>
                <div className="ImageThree" ref={Imagen1to3}>



                </div>
                <ul>
                    <li onClick={() => Cambiar('1to1')} ></li>
                    <li onClick={() => Cambiar('1to2')} ></li>
                    <li onClick={() => Cambiar('1to3')} ></li>                    
                </ul>
           </div>
        </div>
    )
}

export default PageTwo
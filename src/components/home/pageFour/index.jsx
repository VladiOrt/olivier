import './index.scss'

import { useRef, useState } from 'react';
import gsap from 'gsap'









import Carrusel1Imagen1 from '../../../img/carruseles/img3-1.png'
import Carrusel1Imagen2 from '../../../img/carruseles/img3-2.png'
import Carrusel1Imagen3 from '../../../img/carruseles/img3-3.png'
import Carrusel1Imagen4 from '../../../img/carruseles/img3-4.png'
import Carrusel1Imagen5 from '../../../img/carruseles/img3-5.png'
import Carrusel1Imagen6 from '../../../img/carruseles/img3-1.png'






const PageFour = () =>{
    const duracion = 0.4
    const[imagenActual, setImagenActual] = useState('1to1')
    let tl = gsap.timeline();
    const Imagen1to1 = useRef(null);
    const Imagen1to2 = useRef(null);
    const Imagen1to3 = useRef(null);
    const Boton1 = useRef(null);
    const Boton2 = useRef(null);
    const Boton3 = useRef(null);
   
    function Cambiar(id)
    {
        //Image one
        if(id ==='1to1' && imagenActual!='1to1' && imagenActual=='1to2'  ){
            tl.add('openbutton')
            .from(Imagen1to1.current, { zIndex:"2" , x:-500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to1.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to2.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to3.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton1.current, { backgroundColor:"#C68738", borderColor:"#FFF" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton2.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton3.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
           
            setImagenActual('1to1')
        }
        if(id ==='1to1' && imagenActual!='1to1' && imagenActual=='1to3'  ){
            tl.add('openbutton')
            .from(Imagen1to1.current, { zIndex:"2" , x:500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to1.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to2.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to3.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton1.current, { backgroundColor:"#C68738", borderColor:"#FFF" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton2.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton3.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
           
            setImagenActual('1to1')
        } 
        //Image Two
        if(id ==='1to2' && imagenActual!='1to2' && imagenActual=='1to1' ){
            tl.add('openbutton')
            .from(Imagen1to2.current, { zIndex:"2" , x:500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to2.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to1.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to3.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton2.current, { backgroundColor:"#C68738", borderColor:"#FFF" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton1.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton3.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            
            setImagenActual('1to2')
        }
        if(id ==='1to2' && imagenActual!='1to2' && imagenActual=='1to3' ){
            tl.add('openbutton')
            .from(Imagen1to2.current, { zIndex:"2" , x:-500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to2.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to1.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to3.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton2.current, { backgroundColor:"#C68738", borderColor:"#FFF" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton1.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton3.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            
            setImagenActual('1to2')
        }
        //Image Three
        if(id ==='1to3' && imagenActual!='1to3'  && imagenActual=='1to1' ){
            tl.add('openbutton')
            .from(Imagen1to3.current, { zIndex:"2" , x:500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to3.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to1.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to2.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton3.current, { backgroundColor:"#C68738", borderColor:"#FFF" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton1.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton2.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
           
            setImagenActual('1to3')
        }
        if(id ==='1to3' && imagenActual!='1to3'  && imagenActual=='1to2' ){
            tl.add('openbutton')
            .from(Imagen1to3.current, { zIndex:"2" , x:500 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(Imagen1to3.current, { zIndex:"3" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to1.current, { zIndex:"1" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Imagen1to2.current, { zIndex:"2" , x:0 , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton3.current, { backgroundColor:"#C68738", borderColor:"#FFF" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton1.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
            .to(Boton2.current, { backgroundColor:"#FFF", borderColor:"#C68738" , duration:duracion , ease: 'circ.out'}, 'openbutton')         
           
            setImagenActual('1to3')
        }


    }


    return(
        <div className="PageFourContainer">
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
			<img src={Carrusel1Imagen2}  alt="" className='img2'  />
		</div>
        <div class="slide">
			<img src={Carrusel1Imagen3}  alt=""  className='img3' />
		</div>
		<div class="slide">
			<img src={Carrusel1Imagen4} alt=""  className='img4'  />
		</div>
		<div class="slide">
			<img src={Carrusel1Imagen5} alt=""  className='img5' />
		</div>
		<div class="slide">
			<img src={Carrusel1Imagen6}  alt=""  className='img6' />
		</div>		
	</div>
</div>




           </div>
           <div className="sectionFour">
                <div className="ImageOne" ref={Imagen1to1}></div>
                <div className="ImageTwo" ref={Imagen1to2}></div>
                <div className="ImageThree" ref={Imagen1to3}></div>
                <ul>
                    <li onClick={() => Cambiar('1to1')} ref={Boton1} ></li>
                    <li onClick={() => Cambiar('1to2')} ref={Boton2} ></li>
                    <li onClick={() => Cambiar('1to3')} ref={Boton3} ></li>                    
                </ul>
           </div>
        </div>
    )
}

export default PageFour
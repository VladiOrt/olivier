import { useState, useRef } from 'react'
import './index.scss'

import Logo from '../img/Logo.svg'
import FacebookMobil from '../img/FacePeq.svg'
import InstaMobil from '../img/InstaPeq.svg'

import gsap from 'gsap'



import { Link } from 'react-router-dom'

import Home from '../home'
const Header = (props) =>{
    const tl = gsap.timeline()
    const Header = useRef(null);
    const Menu1 = useRef(null);
    const Menu2 = useRef(null);
    const Menu3 = useRef(null);
    const Linea1 = useRef(null);
    const Linea2 = useRef(null);
    const Linea3 = useRef(null);
    const VentanaHeader = useRef(null);

    const textoLenguaje = useRef(null);
    const lenguajeUno = useRef(null);
    const lenguajeDos = useRef(null);


    const[estadoBoton, setEstadoBoton] = useState(0)

    let duracion = 0.4
    let datoLenguaje = props.lenguaje ? props.lenguaje : 'EN'
    const[lenguaje,setLenguaje]=useState(datoLenguaje )
    const[estadoHeader, setEstadoHeader] = useState('Cerrado')


    function AbrirCerrarMenu(){
        if(estadoHeader === 'Cerrado'){
            tl.add('openbutton')
            tl.from(VentanaHeader.current, { display:'flex' , opacity:0, duration:duracion , ease: 'circ.out'}, 'openbutton')
                .to(VentanaHeader.current, { display:'flex' , opacity:1 , duration:duracion  , ease: 'circ.out'}, 'openbutton')
                .from(Header.current, { backgroundColor:'#C68738' , duration:duracion , ease: 'circ.out'}, 'openbutton')
                .to(Header.current, { backgroundColor:'#3D1A1A' , duration:duracion  , ease: 'circ.out'}, 'openbutton')                
                .from(Menu1.current, { duration: 1, y: 150, ease: 'circ.out'}, 'openbutton')
                .from(Menu2.current, { duration: 1, y: 150, ease: 'circ.out'}, 'openbutton')
                .from(Menu3.current, { duration: 1, y: 150, ease: 'circ.out'}, 'openbutton')
                .to(Linea1.current, { duration: duracion, rotate: -45, ease: 'circ.out'}, 'openbutton')
                .to(Linea2.current, { duration: 0.1, display:"none" , ease: 'circ.out'}, 'openbutton')
                .to(Linea3.current, { duration: duracion, rotate: 45, y:-10,  ease: 'circ.out'}, 'openbutton')
              
                
                

            setEstadoHeader('Abierto')
        }
        if(estadoHeader === 'Abierto'){
            tl.add('closebutton')
            tl.from(VentanaHeader.current, { display:'flex' , opacity:1, duration:duracion , ease: 'circ.out'}, 'closebutton')
                .to(VentanaHeader.current, { display:'none' , opacity:0 , duration:duracion  , ease: 'circ.out'}, 'closebutton')
                .from(Header.current, { backgroundColor:'#3D1A1A' , duration:duracion , ease: 'circ.out'}, 'closebutton')
                .to(Header.current, { backgroundColor:'#C68738' , duration:duracion  , ease: 'circ.out'}, 'closebutton')
                .to(Linea1.current, { duration: duracion, rotate: 0, ease: 'circ.out'}, 'closebutton')
                .to(Linea2.current, { duration: duracion, display:"flex" , ease: 'circ.out'}, 'closebutton')
                .to(Linea3.current, { duration: duracion, rotate: 0, y: 0,  ease: 'circ.out'}, 'closebutton')
              

            setEstadoHeader('Cerrado')
        }

    }

    function BotonIdioma(){
        if(estadoBoton === 0){
            tl.add('openbutton')
            tl.to(lenguajeUno.current, { display: 'flex' , scale:1 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            tl.to(lenguajeDos.current, { display: 'flex' , scale:1 , duration:duracion , ease: 'circ.out'}, 'openbutton')                       
            setEstadoBoton(1)
        }
        if(estadoBoton === 1){
            let Idiom = lenguaje
            tl.add('openbutton')
            .to(lenguajeUno.current, { display: (Idiom==='EN'? 'flex':'none' ), scale:1 , duration:duracion , ease: 'circ.out'}, 'openbutton')
            .to(lenguajeDos.current, { display: (Idiom==='FR'? 'flex':'none' ), scale:1 , duration:duracion , ease: 'circ.out'}, 'openbutton')                    
            setEstadoBoton(0)
        }

    }

    function SeleccionIdioma(nuevoIdioma){
        let Idiom = nuevoIdioma
        tl.add('openbutton')
        .to(lenguajeUno.current, { display: (Idiom==='EN'? 'flex':'none' ), duration:duracion , ease: 'circ.out'}, 'openbutton')
        .to(lenguajeDos.current, { display: (Idiom==='FR'? 'flex':'none' ), duration:duracion , ease: 'circ.out'}, 'openbutton')                    
        setEstadoBoton(0)
    }

    return(
        <div className="containerHeader" >
            <div className="containerHeaderPrincipal" ref={Header}>
                <div className="containerHeaderPrincipalMenu">
                    <div className="containerHeaderPrincipalBotonMenu" onClick={() => AbrirCerrarMenu()}>
                        <div className='containerHeaderPrincipalBotonLineaUno' ref={Linea1} />
                        <div className='containerHeaderPrincipalBotonLineaDos' ref={Linea2} />   
                        <div className='containerHeaderPrincipalBotonLineaTres' ref={Linea3} />              
                    </div>
                    <div className="containerHeaderPrincipalBotonIdioma">
                        <label className='opcionUno'  style={{ display: (lenguaje==='EN'? "flex":"none")}} ref={lenguajeUno} onClick={()=>SeleccionIdioma('EN') }>EN</label>
                        <label className='opcionDos' style={{ display: (lenguaje==='FR'? "flex":"none")}}  ref={lenguajeDos} onClick={()=>SeleccionIdioma('FR') }> FR</label>
                        <div className='button' onClick={() => BotonIdioma()}></div>
                    </div>
                </div>
            </div>
            <div className="containerHeaderContent" ref={VentanaHeader}>
                <label ref={Menu1} ><img src={Logo}   /></label>
                <ul ref={Menu2} >
                    <a href='http://demo.olivierluxe.com/Home'><li>HOME  </li></a>
                    <a href='http://demo.olivierluxe.com/About'><li >ABOUT</li></a>
                    <a href='http://demo.olivierluxe.com/Vip'><li>VIP</li></a>
                    <a href='http://demo.olivierluxe.com/Gallery'><li>GALLERY</li></a>
                    <a href='http://demo.olivierluxe.com/Contact'><li>CONTACT</li></a>
                </ul>
                <div className="logosHeader" ref={Menu3}>
                    <img src={FacebookMobil} className='logoFace' />
                    <img src={InstaMobil} className='logoInsta' />
                </div>
            </div>
        </div>
    )
}

export default Header
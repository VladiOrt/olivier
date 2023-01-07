import { useState, useRef } from 'react'
import './index.scss'

import Logo from '../img/Logo.svg'
import FacebookMobil from '../img/FacePeq.svg'
import InstaMobil from '../img/InstaPeq.svg'

import gsap from 'gsap'

import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Home from '../home'


const URL="http://localhost:3000/"

const Header = (props) =>{
    const [searchParams] = useSearchParams();
    let ln = searchParams.get('ln')
    if(ln == null){     
        ln="en";
    }
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


        let ruta = window.location.href;
        
        let IdiomMinusculas = Idiom.toLowerCase()
        let cambia=''
        let RutaAnalizar = ruta
        if(RutaAnalizar === URL) RutaAnalizar =RutaAnalizar+"/?ln=en"
        if (RutaAnalizar.includes(IdiomMinusculas)) {
            cambia='No'
        } else {
            cambia = 'Si'
        }
        if(cambia ==='Si'){
            if(IdiomMinusculas==='fr'){
                let nuevaRuta =  RutaAnalizar.replace('en','fr');
                window.location.href = nuevaRuta;
            }else{
                let nuevaRuta =  RutaAnalizar.replace('fr','en');
                window.location.href = nuevaRuta;
            }
        }

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
                        <label className={ (ln==='en'? "opcionUnoRayado":"opcionUno")}  style={{ display: (ln==='en'? "flex":"none")}} ref={lenguajeUno} onClick={()=>SeleccionIdioma('EN') }>EN</label>
                        <label className={ (ln==='fr'? "opcionDosRayado":"opcionDos")} style={{ display: (ln==='fr'? "flex":"none")}}  ref={lenguajeDos} onClick={()=>SeleccionIdioma('FR') }> FR</label>                        
                        <div className='button' onClick={() => BotonIdioma()}></div>
                    </div>
                </div>
            </div>
            <div className="containerHeaderContent" ref={VentanaHeader}>
                <label ref={Menu1} ><img src={Logo}   /></label>
                <ul ref={Menu2} >
                    <a href={URL+'Home' + (ln ==='fr'?"?ln=fr":"?ln=en") }>
                        <li>
                            {
                                ln ==='fr'?
                                "HOME":"HOME"
                            }                              
                        </li>
                    </a>
                    <a href={URL+'About' + (ln ==='fr'?"?ln=fr":"?ln=en")}>
                        <li>
                            {
                                ln ==='fr'?
                                "À PROPOS DE NOUS":"ABOUT"
                            }                                     
                        </li>
                    </a>
                    <a href={URL+'Vip' + (ln ==='fr'?"?ln=fr":"?ln=en")}>
                        <li>
                            {
                                ln ==='fr'?
                                "VIP":"VIP"
                            }    
                        </li>
                    </a>
                    <a href={URL+'Gallery' + (ln ==='fr'?"?ln=fr":"?ln=en")}>
                        <li>
                            {
                                ln ==='fr'?
                                "GALERIE":"GALLERY"
                            }    
                        </li>                    
                    </a>
                    <a href={URL+'Contact' + (ln ==='fr'?"?ln=fr":"?ln=en")}>
                        <li>
                            {
                                ln ==='fr'?
                                "CONTACTEZ":"CONTACT"
                            }    
                        </li>
                    </a>
                </ul>
                <div className="logosHeader" ref={Menu3}>
                <a href='https://www.facebook.com/luxury.olivier' target="_blank">  <img src={FacebookMobil} className='logoFace' /> </a>
                <a href='https://www.instagram.com/olivier_boutique_rdc/' target="_blank">   <img src={InstaMobil} className='logoInsta' /> </a>
                </div>
            </div>
        </div>
    )
}

export default Header

import './index.scss'


import Logo from '../../img/home/LogoFooter.svg'
import Facebook from '../../img/home/faceFooter.svg'
import Instagram from '../../img/home/InstaFace.svg'


import { useSearchParams } from 'react-router-dom';
const URL="http://demo.olivierluxe.com/"

const Footer =  () =>{
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')
    return(
        <div className="containerFooter">
            <div>
                <label className="email"> <a href={"mailto:olivier@olivierluxe.com"}> olivier@olivierluxe.com </a></label>
                <label className="phone"><a href="tel:+243816315200">+243 816 315 200</a></label>
                <label className="description"><a href='https://goo.gl/maps/nKb6KkVdHkYV7DJ7A' target="_blank">Congo Trade Center (CTC), 10 Ave Wagenia, Kinshasa, Congo – Kinshasa</a></label>
                <label className="home">
                    <a href={URL+'Home' + (ln ==='fr'?"?ln=fr":"?ln=en")}> 
                        {
                            ln ==='fr'?
                            "HOME":"HOME"
                        }       
                    </a>
                </label>
                <label className="vip">
                    <a  href={URL+'Vip' + (ln ==='fr'?"?ln=fr":"?ln=en")}>
                        {
                            ln ==='fr'?
                            "VIP":"VIP"
                        } 
                    </a>
                </label>
                <label className="contact">
                    <a  href={URL+'Contact' + (ln ==='fr'?"?ln=fr":"?ln=en")}>
                        {
                            ln ==='fr'?
                            "CONTACTEZ":"CONTACT"
                        }  
                    </a></label>
                <label className="about">
                    <a  href={URL+'About' + (ln ==='fr'?"?ln=fr":"?ln=en")}>
                        {
                            ln ==='fr'?
                            "ABOUT":"ABOUT"
                        } 
                    </a>
                </label>
                <label className="gallery">
                    <a href={URL+'Gallery' + (ln ==='fr'?"?ln=fr":"?ln=en")}>
                        {
                            ln ==='fr'?
                            "GALERIE":"GALLERY"
                        }
                    </a>
                </label>
                <label className="iconFace"><a href='https://www.facebook.com/luxury.olivier' target="_blank"><img src={Facebook} /></a></label>
                <label className="iconInsta"><a href='https://www.instagram.com/olivier_boutique_rdc/' target="_blank"><img src={Instagram} /></a></label>
            </div>
            
            <label className="logo"><a href={URL+'Home' + (ln ==='fr'?"?ln=fr":"?ln=en")}><img src={Logo} /></a></label>

        </div>
    )

}

export default Footer
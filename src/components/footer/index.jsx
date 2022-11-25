
import './index.scss'


import Logo from '../../img/home/LogoFooter.svg'
import Facebook from '../../img/home/faceFooter.svg'
import Instagram from '../../img/home/InstaFace.svg'


const Footer =  () =>{

    return(
        <div className="containerFooter">
            <div>
                <label className="email">olivier@olivierluxe.com</label>
                <label className="phone">+243 816 315 200</label>
                <label className="description">Congo Trade Center (CTC), 10 Ave Wagenia, Kinshasa, Congo – Kinshasa</label>
                <label className="home">HOME</label>
                <label className="vip">Vip</label>
                <label className="contact">contact</label>
                <label className="about">about</label>
                <label className="gallery">Gallery</label>
                <label className="iconFace"><img src={Facebook} /></label>
                <label className="iconInsta"><img src={Instagram} /></label>
            </div>
            
            <label className="logo"><img src={Logo} /></label>

        </div>
    )

}

export default Footer
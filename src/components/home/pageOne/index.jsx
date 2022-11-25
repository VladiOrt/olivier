import './index.scss'


import Logo from '../../img/Logo.svg'


const PageOne = () =>{

    return(
        <div className="PageOneContainer">
            <div className='PageOneContainer'>
                <div className="logoPageone"><img src={Logo}></img></div>
                <label className='titleOne'>LUXURY BRANDS IN THE HEART OF AFRICA</label>
                <label className='SubtitleOne'>Making coveted fashion and beauty effortless and accessible.</label>
            </div>
        </div>
    )
}

export default PageOne
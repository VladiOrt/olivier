import './index.scss'


import Logo from '../../img/Logo.svg'

import { useSearchParams } from 'react-router-dom';

const PageOne = () =>{
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')
    return(
        <div className="PageOneContainer">
            <div className='PageOneContainer'>
                <div className="logoPageone"><img src={Logo}></img></div>
                <label className='titleOne'>                    
                    {
                        ln ==='fr'?
                        "DES MARQUES DE LUXE AU CŒUR DE L’AFRIQUE":"LUXURY BRANDS IN THE HEART OF AFRICA"
                    }        
                </label>
                <label className='SubtitleOne'>
                    
                    {
                        ln ==='fr'?
                        "Rendre accessibles et sans effort la mode et la beauté les plus convoitées":"Making coveted fashion and beauty effortless and accessible."
                    } 
                </label>
            </div>
        </div>
    )
}

export default PageOne
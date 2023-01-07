
import './index.scss'


import { useSearchParams } from 'react-router-dom';

const PageOne = () =>{
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')


    return(
        <div className="pageOneContainer">

            <section>
                <label className="title">
                    
                    {
                        ln ==='fr'?
                        "VIP SPECIALS"
                        :
                        "VIP SPECIALS"
                    }     
                </label>
                <label className="subtitle">
                   
                </label>
                <text className="text">
                    {
                        ln ==='fr'?
                        "Nos experts en beauté et en style sont maîtres dans l’art de rendre accessibles et sans effort la mode et la beauté convoitées. Des derniers styles de créateurs aux parfums exclusifs de niche, en passant par les produits de soins de la peau et des cheveux les plus pointus du monde entier, nos spécialistes privés du style et des soins personnels se chargent de tous les souhaits."
                        :
                        "Our beauty and style experts are masters at making coveted fashion and beauty effortless and accessible. From the latest designer styles to exclusive niche fragrance, to the cutting edge of skincare and haircare from around the globe, our private style and self-care specialists have every wish list covered."
                    }   
                
                </text>
            </section>



        </div>
    )
}

export default PageOne
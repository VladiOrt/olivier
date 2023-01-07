
import './index.scss'

import { useSearchParams } from 'react-router-dom';

const PageOne = () =>{
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')

    return(
        <div className="pageOneContainerAbout">

            <section>
                <label className="title">ABOUT US</label>
                <label className="subtitle">
                    {
                        ln ==='fr'?
                        "French C’est la destination incontournable pour découvrir la beauté en RDC .":"It is the not-to-be-missed destination to discover beauty in the DRC."
                    } 
                    
                </label>
                <text className="text">
                    {
                        ln ==='fr'?
                        "Au cœur de l’Afrique , Olivier est l’ultime écrin des marques de beauté renommées , de niche et recherchées des initiés . Notre boutique , logée au luxueux Congo Trade Center, est une véritable découverte à la mesure des attentes des plus raffinés . C’est l’expérience de la beauté absolue , assistée d’experts et de conseillers idéalement formés":" Olivier is the ultimate showcase in the heart of Africa for reputable, niche and sought-after beauty brands. Situated in the luxurious Congo Trade Center, our boutique is a real discovery that will meet the expectations of the most sophisticated. Experts and perfectly trained consultants offer an experience of absolute beauty."
                    } 
                   
                </text>
            </section>



        </div>
    )
}

export default PageOne
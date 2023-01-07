
import './index.scss'
import { useSearchParams } from 'react-router-dom';


const PageThree = () =>{
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')


    return(
        <div className="pageThreeContainer">

            <section>
                <label className="title"></label>
                <label className="subtitle">
                    
                </label>
                <text className="text">
                    {
                        ln ==='fr'?
                        "Les amateurs de mode haut de gamme et les beautéphiles reçoivent notre service de shopping et de stylisme personnel sur mesure dans le confort de notre salon à Kinshasa. Nos spécialistes mettent à profit leurs relations étroites avec le secteur pour offrir un accès inégalé aux designers et aux marques de luxe les plus prestigieux du monde, en fonction du style et du budget de chacun."
                        :
                        "High-end fashion lovers and beautyphiles are privy to our bespoke personal shopping and styling service, all done at our Kinshasa showroom for the ease of members. Tailored to suit every style and budget, our specialists harness their deep industry connections to provide unparalleled access to the world’s most prestigious designers and luxury brands."
                    }     
                    
                </text>
            </section>



        </div>
    )
}

export default PageThree

import './index.scss'
import { useSearchParams } from 'react-router-dom';

const PageTwo = () =>{
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')


    return(
        <div className="pageTwoContainer">

            <section>
                <label className="title"></label>
                <label className="subtitle">
                   
                </label>
                <text className="text">
                    {
                        ln ==='fr'?
                        "Ce service de conciergerie VIP est une expérience immersive en matière de beauté et de mode, la destination ultime pour des expériences de style de vie uniques. Classes de maître personnalisées avec notre personnel de conciergerie. Des conseils motivants sur ce qui vous convient le mieux en matière de beauté et de mode. De magnifiques forfaits cosmétiques sur mesure pour rafraîchir votre look de la tête aux pieds. Ce ne sont là que quelques-unes des offres que le Concierge VIP Luxico propose aux membres."
                        :
                        "This VIP Concierge service is an immersive beauty and fashion experience, the ultimate destination for unique lifestyle experiences. Personalised masterclasses with our concierge staff. Inspiring advice on the best beauty and fashion for you. Amazing, curated packages to refresh your look from head to toe. These are just a few of the offerings that the Luxico VIP Concierge provides members."
                    }     
                    
                </text>
            </section>



        </div>
    )
}

export default PageTwo
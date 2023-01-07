
import './index.scss'

import { useSearchParams } from 'react-router-dom';

const PageThree = () =>{
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')
    return(
        <div className="pageThreeContainerAbout">

            <section>
                <label className="title"></label>
                <label className="subtitle"></label>
                <text className="text">
                    {
                        ln ==='fr'?
                        "Des soins de la peau et des cheveux au maquillage et aux parfums, Olivier se voue à offrir à la ville phare du cœur de ce continent en plein essor, le meilleur de la Beauté."
                        :
                        "From skin and hair care to make-up and fragrances, Olivier is dedicated to bringing the best of beauty to the flagship city in the heart of this booming continent."
                    } 
                    
                </text>
            </section>



        </div>
    )
}

export default PageThree
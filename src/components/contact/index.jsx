
import  './index.scss'




import Header from '../header'
import Footer from '../footer'


import { useSearchParams } from 'react-router-dom';

const Contact = () => {
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')

    return(
        <div className="containerContact">
            <div className='header'>
                <Header />
            </div>
            <div className="contentContact">
                <div className="formContainer">
                    <label>
                        
                        {
                        ln ==='fr'?
                        "CONTACTEZ-NOUS"
                        :
                        "CONTACT US"
                        }        
                    </label>

                    <input type="text" placeholder= {
                        ln ==='fr'?
                        "Nom et prénom (s)"
                        :
                        "Full Name"
                        }></input>
                    <input type="text" placeholder={
                        ln ==='fr'?
                        "Courriel"
                        :
                        "Email"
                        }></input>
                    <textarea type="text" className='message' placeholder='Message'></textarea>

                    <div>
                    <button>                         
                        {
                        ln ==='fr'?
                        "ENVOYER"
                        :
                        "SUBMIT"
                        }   
                    </button>
                    </div>


                   
                </div>
            </div>
            <div className='footer'>
                <Footer />           
            </div>
        </div>
    )
}


export default Contact

import  './index.scss'




import Header from '../header'
import Footer from '../footer'



const Contact = () => {


    return(
        <div className="containerContact">
            <div className='header'>
                <Header />
            </div>
            <div className="contentContact">
                <div className="formContainer">
                    <label>CONTACT US</label>

                    <input type="text" placeholder='Full Name'></input>
                    <input type="text" placeholder='Email'></input>
                    <textarea type="text" className='message' placeholder='Message'></textarea>

                    <div>
                    <button>SUBMIT </button>
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
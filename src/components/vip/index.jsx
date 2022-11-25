

import './index.scss'


import Footer from '../footer'
import Header from '../header'

import PageOne from './pageone'
import PageTwo from './pagetwo'
import PageThree from './pagethree'

const Vip = () =>{
    return(
        <div className="containerVip">

            <Header />
            <PageOne />
            <PageTwo />
            <PageThree />
            <Footer />

        </div>
    )
}

export default Vip
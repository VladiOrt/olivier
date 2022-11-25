


import Header from '../header'
import Footer from '../footer'

import PageOne from './pageOne'
import PageTwo from './pageTwo'
import PageThree from './pageThree'

const About = () => {
    return(
        <div className="containerAbout">
            <Header />
            <PageOne />
            <PageTwo />
            <PageThree />            
            <Footer />
        </div>
    )
}

export default About 
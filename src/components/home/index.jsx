import './index.scss'


import Header from '../header';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
import PageThree from './pageThree';
import PageFour from './pageFour';
import PageFive from './pageFive';
import PageSix from './pageSix';

import Footer from '../footer';

const Home = () => {
    return(
        <div className="containerHome">
            <div style={{position:"absolute"}}>
                <Header />
            </div>
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
            <PageFive />
            <PageSix />
            <Footer />
        </div>
    )
}

export default Home;
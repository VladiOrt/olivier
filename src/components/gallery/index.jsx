

import  './index.scss'


import Header from '../header'

import PageOne from './pageOne'

import Footer from '../footer'

const Gallery = () =>{
    return(
        <div className="containerGallery">
            <Header />

            <PageOne />
            
            <Footer />

        </div>
    )
}

export default Gallery
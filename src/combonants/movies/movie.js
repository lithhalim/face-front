import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';

import { BrowserRouter, Route } from 'react-router-dom';


import Footer from './components/footer/Footer';

function Movies() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                   
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
}

export default Movies;

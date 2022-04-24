import React from 'react';
import DSlider from 'views/components/custom/DSlider';
import ProductsArray from 'views/components/home/ProductsArray';

const Home = () => {
    return (
       <main>
           <div className='py-20'><DSlider></DSlider></div>
           <div><ProductsArray></ProductsArray></div>
       </main>
    );
};

export default Home;
import React from 'react';
import DefaultButton from './elements/buttons/DefaultButton';
import Header from './header/header.jsx';
import Footer from './footer/footer';
import WhatCan from './main/what-can/what-can';
import Advantages from './main/advantages/advantages';
import ExampleJob from './main/example-job/example-job';
import CostBizness from './main/cost-bizness/cost-bizness';
import OurStrategy from './main/our-strategy/our-strategy';


class MyApp extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <main>
                    <OurStrategy/>
                    <WhatCan/>
                    <Advantages/>
                    <ExampleJob/>
                    <CostBizness/>
                    {/*<h1 className={'title icon icon-heart'}>Hello Juli!</h1>
                     <DefaultButton message={'I\'m here now !'} />*/}
                </main>
                <Footer/>
            </div>
        )
    }
}

export  default  MyApp;
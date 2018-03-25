import React from 'react';
import DefaultButton from './elements/buttons/DefaultButton';
import Header from './header/header.jsx';
import Footer from './footer/footer';
import WhatCan from './main/what-can/what-can';


class MyApp extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <main>
                    <WhatCan/>
                    <h1 className={'title icon icon-heart'}>Hello Juli!</h1>
                    <DefaultButton message={'I\'m here now !'} />
                </main>
                <Footer/>
            </div>
        )
    }
}

export  default  MyApp;
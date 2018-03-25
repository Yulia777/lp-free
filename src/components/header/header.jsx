import React, { Component } from 'react';
import CreateClients from './create-clients/create-clients';


class Header extends Component{
    render() {
        return(
            <header className="header">
                <div className="container header__wrap">
                    <div className="header__logo">
                        <img className="header__logo--img" src="../images/logo-min.png" alt="Логотип Генератор продаж" title="Логотип Генератор продаж"/>
                    </div>
                    <div className="header__contacts">
                        <span className="header__tel">
                            8 (800) 775 43 06
                        </span>
                        <input className="call-btn" type="submit" value="Заказать звонок"/>
                    </div>
                </div>
                <CreateClients/>
            </header>
        )
    }
}

export default Header;
import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return(
            <footer className="footer">
                <div className="container footer__wrap">
                    <div className="footer__copyright">
                        <i className="fa fa-copyright" aria-hidden="true"></i> 2018 год.
                        <a className="footer__copyright--link" href="https://sales-generator.ru"> ООО "Генератор продаж"</a>
                    </div>
                    <div className="footer__contacts">
                        <span className="footer__tel">
                            8 (800) 775 43 06
                        </span>
                        <input className="call-btn" type="submit" value="Заказать звонок"/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
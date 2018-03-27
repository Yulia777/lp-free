import React, { Component } from 'react';

class Advantages extends Component{
    render() {
        return(
            <section className="advantages">
                <div className="container advantages__wrap">
                    <h2 className="advantages__title">Почему лучше всего заказать лендинг <span>у нас</span>?</h2>
                    <div className="advantages__items">
                        <div className="advantages__item">
                            <div className="advantage">
                                <div className="num">01</div>
                                <div className="desc">
                                    Настраиваем контекстную и таргетированную
                                    рекламу и оптимизируем результат
                                </div>
                            </div>
                            <div className="advantage">
                                <div className="num">02</div>
                                <div className="desc">
                                    В нашей коллекции есть лендинги с конверсией
                                    46% и более
                                </div>
                            </div>
                        </div>
                        <div className="advantages__item">
                            <div className="advantage">
                                <div className="num">03</div>
                                <div className="desc">
                                    Над каждым проектом трудится команда из
                                    7 человек. Все сотрудники оформлены в штат
                                </div>
                            </div>
                            <div className="advantage">
                                <div className="num">04</div>
                                <div className="desc">
                                    Ваш лендинг будет правильно отображаться
                                    во всех браузерах и на всех устройствах
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Advantages;
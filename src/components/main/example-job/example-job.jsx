import React, { Component } from 'react';

class ExampleJob extends Component{
    render() {
        return(
            <section className="example-job">
                <div className="container what-can__wrap">
                    <h2 className="example-job__title"><span>Примеры</span> наших работ:</h2>
                    <div className="images">
                        <div className="images__item">
                            <img className="images__show" src="../images/eye-min.png" alt="Посмотреть примеры работ компании Генератор продаж"
                                 title="Посмотреть примеры работ компании Генератор продаж"/>
                            <img className="images__page" src="../images/example-job2-min.png" alt="Продвижение сайта 'Пансионат осень' Генератор продаж"
                                 title="Продвижение сайта 'Пансионат осень' Генератор продаж"/>
                            <p className="images__desc">
                                Сеть пансионатов по уходу за
                                пожилыми людьми в Москве и МО
                            </p>
                        </div>
                        <div className="images__item">
                            <img className="images__show" src="../images/eye-min.png" alt="Посмотреть примеры работ компании Генератор продаж"
                                 title="Посмотреть примеры работ компании Генератор продаж"/>
                            <img className="images__page" src="../images/example-job1-min.png" alt="Продвижение сайта 'Английский пациент' Генератор продаж"
                                 title="Продвижение сайта 'Английский пациент' Генератор продаж"/>
                            <p className="images__desc">
                                Онлайн обучение английскому языку
                            </p>
                        </div>
                        <div className="images__item">
                            <img className="images__show" src="../images/eye-min.png" alt="Посмотреть примеры работ компании Генератор продаж"
                                 title="Посмотреть примеры работ компании Генератор продаж"/>
                            <img className="images__page" src="../images/example-job3-min.png" alt="Продвижение сайта 'Сантехстандарт' Генератор продаж"
                                 title="Продвижение сайта 'Сантехстандарт' Генератор продаж"/>
                            <p className="images__desc">
                                Производство инженерной сантехники
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ExampleJob;
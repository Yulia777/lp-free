import React, { Component } from 'react';

class OurStrategy extends Component{
    render() {
        return(
            <section className="our-strategy">
                <div className="container our-strategy__wrap">
                    <h2 className="our-strategy__title">Почему мы уверенны в том,
                        что <span>лендинг будет продавать:</span>
                    </h2>
                    <div className="strategy__wrap">
                        <div className="strategy strategy__first">
                            <div className="strategy__item">
                                <div className="content">
                                    <p className="content__desc">
                                        Исследуем стратегии развития ваших
                                        конкурентов и находим их слабые места
                                    </p>
                                    <div className="content__img">
                                        <img src="../images/icons/competitors-min.png"
                                            alt="Исследуем стратегии" title="Исследуем стратегии"/>
                                    </div>
                                </div>
                            </div>
                            <div className="strategy__item">
                                <div className="content">
                                    <p className="content__desc">
                                        Разрабатываем преимущества,
                                        по которым вы будете отвоевывать
                                        свою долю в рынке
                                    </p>
                                    <div className="content__img">
                                        <img src="../images/icons/advantages-min.png"
                                            alt="Разрабатываем преимущества" title="Разрабатываем преимущества"/>
                                    </div>
                                </div>
                            </div>
                            <div className="strategy__item">
                                <div className="content">
                                    <p className="content__desc">
                                        Подробно описываем вашу
                                        целевую аудиторию и составляем
                                        аватар клиентов
                                    </p>
                                    <div className="content__img">
                                        <img src="../images/icons/avatar-min.png"
                                            alt="Описываем целевую аудиторию" title="Описываем целевую аудиторию"/>
                                    </div>
                                </div>
                            </div>
                            <div className="strategy__item">
                                <div className="content">
                                    <p className="content__desc">
                                        Разрабатываем индивидуальный
                                        дизайн лендинга, верстаем и
                                        программируем его
                                    </p>
                                    <div className="content__img">
                                        <img src="../images/icons/design-min.png"
                                            alt="Разрабатываем дизайн лендинга" title="Разрабатываем дизайн лендинга"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="strategy strategy__second">
                            <div className="strategy__item">
                                <div className="content">
                                    <div className="content__img">
                                        <img src="../images/icons/analysis-min.png"
                                             alt="Анализируем" title="Анализируем"/>
                                    </div>
                                    <p className="content__desc">
                                        Мы проводим глубокий анализ текущих
                                        продаж и бизнес-модели в целом
                                    </p>
                                </div>
                            </div>
                            <div className="strategy__item">
                                <div className="content">
                                    <div className="content__img">
                                        <img src="../images/icons/tendencies-min.png"
                                            alt="Тенденции рынка" title="Тенденции рынка"/>
                                    </div>
                                    <p className="content__desc">
                                        Выявляем ключевые тенденции рынка
                                    </p>
                                </div>
                            </div>
                            <div className="strategy__item">
                                <div className="content">
                                    <div className="content__img">
                                        <img src="../images/icons/strategy-min.png"
                                             alt="Составляем стратегию" title="Составляем стратегию"/>
                                    </div>
                                    <p className="content__desc">
                                        Составляем стратегию, которая будет
                                        помогать вам достигать цели
                                    </p>
                                </div>
                            </div>
                            <div className="strategy__item">
                                <div className="content">
                                    <div className="content__img">
                                        <img src="../images/icons/texts-min.png"
                                             alt="Пишем тексты" title="Пишем тексты"/>
                                    </div>
                                    <p className="content__desc">
                                        Пишем тексты, которые помогают
                                        вашим посетителям покупать
                                    </p>
                                </div>
                            </div>
                            <div className="strategy__item">
                                <div className="content">
                                    <div className="content__img">
                                        <img src="../images/icons/publicity-min.png"
                                             alt="Настраиваем контекстную рекламу" title="Настраиваем контекстную рекламу"/>
                                    </div>
                                    <p className="content__desc">
                                        Настраиваем контекстную и
                                        таргетированную рекламу и
                                        оптимизируем результат
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default OurStrategy;
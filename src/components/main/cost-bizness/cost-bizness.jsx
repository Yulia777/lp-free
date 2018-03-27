import React, { Component } from 'react';
import FormCost from "../../../components/elements/forms/form-cost/FormCost";

class CostBizness extends Component{
    render() {
        return(
            <section className="cost-bizness">
                <div className="container cost-bizness__wrap">
                    <h2 className="cost-bizness__title">Стоимость упаковки вашего бизнеса <span>99 000 руб.</span></h2>
                    <div className="cost-bizness__content">
                        <p className="cost-bizness__desc">
                            Чтобы получить консультацию специалиста и индивидуальное
                            коммерческое предложение <span>заполните форму нижe</span>
                        </p>
                    </div>
                    <FormCost/>
                    <p className="cost-bizness__desc--after">
                        С вами свяжется специалист и подробно проконсультирует, а также подберет оптимальное решение
                    </p>
                </div>
            </section>
        )
    }
}

export default CostBizness;
import React, { Component } from 'react';

class CreateClients extends Component{
    render() {
        return(
            <section className="create-clients">
                <div className="container create-clients__wrap">
                    <h1 className="create-clients__title">Создадим поток клиентов за неделю</h1>
                    <p className="create-clients__subtitle">с помощью правильной упаковски вашего бизнеса</p>
                    <p className="create-clients__desc">
                        Закажите лендинг, который будет продавать вместо ваших менеджеров
                    </p>
                    <button className="btn">Заказать лендинг</button>
                </div>
            </section>
        )
    }
}

export default CreateClients;
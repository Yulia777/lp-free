import React from 'react';

const FormCost = (e) => {
    const sendForm = () => {
        e.preventDefault();
    };


    return(
        <div className="form-cost__wrap">
            <form className="form-cost" onSubmit={sendForm}>
                <input className="form-cost__field" type="text" placeholder="Имя" name="name"/>
                <input className="form-cost__field" type="text" placeholder="Телефон" name="phone" required="true"/>
                <input className="btn" type="submit" value="Оставить заявку"/>
            </form>
            {/*<button type={'button'} onClick={buutonClick} className={'button'}>Clicl it</button>*/}
        </div>
    )
};

export default FormCost;
import React from 'react';
import c from './Main.module.css';

export const Main = () => {

    return <section className={c.flexWrap}>

        <div className={c.leftWrap}>
            <h1>
                Зарабатывайте <br />больше <br /><span className={c.gradient}>с WELBEX</span>
            </h1>
            <p>
                Развиваем и контролируем продажи за вас
            </p>
        </div>

        <div className={c.rightWrap}>

            <div className={c.rightWrapHeader}>
                Вместе с <span className={c.rightWrapGradient}>бесплатной{/* <br /> */} консультацией</span> мы дарим:
            </div>

            <div className={c.benefits}>

                <div className={c.benefitsWrapper}>
                    <div>
                        <span>Виджеты</span>
                        <p>30 готовых<br />решений</p>
                    </div>
                    <div>
                        <span>Dashboard</span>
                        <p>с показателями вашего бизнеса</p>
                    </div>

                </div>

                <div className={c.benefitsWrapper}>
                    <div>
                        <span>Skype Аудит</span>
                        <p>отдела продаж<br />и CRM системы</p>
                    </div>
                    <div>
                        <span>35 дней</span>
                        <p>использования<br />CRM</p>
                    </div>
                </div>

            </div>

            <div className={c.mobileBenefits}>
                <p>Skype Аудит</p>
                <p>30 виджетов</p>
                <p>Dashboard</p>
                <p>месяц amocrm</p>
            </div>

            <div>
                <button type='button'>
                    Получить консультацию
                </button>
            </div>

        </div>
        
    </section>
}
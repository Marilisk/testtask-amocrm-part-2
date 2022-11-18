import React from 'react';
import c from './Header.module.css';
import logo1 from './../../assets/images/header/logo/Vector1.svg';
import logo2 from './../../assets/images/header/logo/Vector2.svg';
import telegram from './../../assets/images/header/socialIcons/telegram.svg';
import viber from './../../assets/images/header/socialIcons/viber.svg';
import whatsapp from './../../assets/images/header/socialIcons/whatsapp.svg';


export const Header = () => {


    return <section className={c.headWrapper}>
        <div className={c.logoWrap}>
            <div className={c.logo}>
                <img alt='' src={logo1} />
                <img alt='' src={logo2} />
            </div>

            <span>
                крупный интегратор CRM в Росcии и ещё 8 странах
            </span>

        </div>

        <div className={c.menuWrap}>
            <div>Услуги</div>
            <div>Виджеты</div>
            <div>Интеграции</div>
            <div>Кейсы</div>
            <div>Сертификаты</div>
        </div>

        <div className={c.tel}>
            +7 555 555-55-55
        </div>

        <div className={c.socialIcons}>
            <img alt='' src={telegram} />
            <img alt='' src={viber} />
            <img alt='' src={whatsapp} />

        </div>

    </section>
}
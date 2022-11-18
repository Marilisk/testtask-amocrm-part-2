import React from 'react';
import c from './Footer.module.css';
import telegram from './../../assets/images/header/socialIcons/telegram.svg';
import viber from './../../assets/images/header/socialIcons/viber.svg';
import whatsapp from './../../assets/images/header/socialIcons/whatsapp.svg';


export const Footer = () => {

    return <section className={c.flexWrap}>

        <div className={c.leftPart}>

            <div className={c.aboutColumn}>
                <h3>О компании</h3>
                <p>Партнёрская программа</p>
                <p>Вакансии</p>
            </div>

            <div className={c.menuColumn}>
                <h3>Меню</h3>
                <p>Расчёт стоимости</p>
                <p>Услуги</p>
                <p>Виджеты</p>
                <p>Интеграции</p>
                <p>Наши клиенты</p>
            </div>

            <div className={c.nextMenuColumn}>
                <p className={c.thanksMobile}>Благодарность клиентов</p>
                <p>Кейсы</p>
                <p className={c.thanksDeskTop}>Благодарственные письма</p>
                <p>Сертификаты</p>
                <p>Блог на Youtube</p>
                <p>Вопрос / Ответ</p>
            </div>

        </div>

        <div className={c.rightPart}>
            <div className={c.contactsColumn}>

                <h3>Контакты</h3>
                <p className={c.tel}>+7 555 555-55-55</p>
                <div className={c.socialIcons}>
                    <img alt='' src={telegram} />
                    <img alt='' src={viber} />
                    <img alt='' src={whatsapp} />
                </div>
                <p className={c.address}>Москва, Путевой проезд 3с1, к 902</p>

                <div className={c.copyright}>©WELBEX 2022. Все права защищены.</div>
                <a href='/p' className={c.politics}>Политика конфиденциальности</a>

            </div>

        </div>

    </section>
}
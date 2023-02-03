import React from 'react';
import styleNames from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                <div className={styleNames.contacts}>
                    <h3 className={styleNames.title}>Контакты</h3>
                    <div className={styleNames.group}>
                        <div className={styleNames.text}>+7(999) 999 99-99</div>
                        <div className={styleNames.text}>г. Москва, Хлебозаводский пр-д, 7, стр. 10</div>
                        <div className={styleNames.text}>@tghuman13</div>
                        <div className={styleNames.text}>mail@rambler.ru</div>
                    </div>
                </div>
                <div className={styleNames.message}>
                    <h3 className={styleNames.title}>Оставьте сообщение</h3>
                    <div className={styleNames.group}>
                        <input className={styleNames.input} type="email" />
                        <textarea className={styleNames.textarea} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>

                <div className={styleNames.map}>
                    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7a2da30d12ba0de39464b99b18a7f8e30abab5f0683972f87a9c0cfd4825f403&amp;width=100%25&amp;height=246&amp;lang=ru_RU&amp;scroll=true"></script>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
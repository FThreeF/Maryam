import React from 'react';
import styleNames from './MenuBlock.module.css';

const MenuBlock = () => {
    return (
        <nav className={styleNames.block}>
            <a className={styleNames.link} href="">Главная</a>
            <a className={styleNames.link} href="">О нас</a>
            <a className={styleNames.link} href="">Как помочь</a>
            <a className={styleNames.link} href="">Команда</a>
            <a className={styleNames.link} href="">Отчеты</a>
        </nav>
    )
}

export default MenuBlock;
import React from 'react';
import { ReactComponent as Logo } from './../../assets/images/logo.svg'
import './Header.scss'
const Header = (props) => {
    return (
        <header className='header'>
            <div className='container'>
                <div className="row">
                    <div className="col s4">
                        <div className="header__logo-block">
                            <span className='left__top-line'>
                                <span className="left__top-line-border"></span>
                            </span>
                            <span className='right__top-line'>
                                <span className="right__top-line-border"></span>
                            </span>
                            <div className="logo__wrapper">
                                <Logo className='header__logo' />
                            </div>
                            <span className='left__bottom-line'>
                                <span className="left__bottom-line-border"></span>
                            </span>
                            <span className='right__bottom-line'>
                                <span className="right__bottom-line-border"></span>
                            </span>
                        </div>
                    </div>
                    <div className="col s8 header__nav-height">
                        <ul className='header__nav'>
                            <li>Главная</li>
                            <li>Технология</li>
                            <li>График Полетов</li>
                            <li>Гарантии</li>
                            <li>О компании</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
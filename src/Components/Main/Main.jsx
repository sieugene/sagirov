import React from 'react';
import './Main.scss'
import Card from './Card/Card';
const Main = (props) => {
    return (
        <div className='content'>
           
            <div className="overlay"></div>
            <div className="content__centered">
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="content__left">
                                <div className="content__left-text">
                                    <h1 className='title'>
                                        Путешествие
                                    </h1>
                                    <h3 className='title__second'>на красную планету</h3>
                                </div>
                                <div className="content__left-button">
                                    <a href="#">Начать путешествие</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s3"></div>
                        <div className="col s4">
                            <div className="content__right">
                                <div className="two__cards">
                                    <Card
                                        title={'Мы'}
                                        info={'1'}
                                        footer={'на рынке'} />

                                    <Card
                                        title={'Гарантируем'}
                                        info={'50%'}
                                        footer={'безопасность'} />
                                </div>

                                <div className="two__cards">
                                    <Card
                                        title={'календарик за'}
                                        info={'2001г.'}
                                        footer={'в подарок'} />


                                    <Card
                                        title={'путешествие'}
                                        info={'597'}
                                        footer={'дней'} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
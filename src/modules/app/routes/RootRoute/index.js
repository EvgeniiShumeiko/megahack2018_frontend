import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import Header from "../Header";
import first from './assets/first.jpg';
import second from './assets/second.jpg';
import third from './assets/third.jpg';
import main from './assets/main.jpg';
import fourth from './assets/photo.jpg';

@connect(({ user }) => ({ user }))
export default class RootRoute extends Component {
    static propTypes = {
        ...DisptachProps,
        user: PropTypes.object.isRequired,
    };

    render() {
        const { user } = this.props;

        return(
            <div>
                <Header/>
                <div className={'mainTable'}>
                    <div className={'info'}>
                        <span className={'infoTitle'}>Everland 2.0</span>
                        <span className={'infoText'}>Пространство, которое дает возможности профессионального роста, интеллектуального развития для людей с инвалидностью.</span>
                        <button className={'infoButton'}>Начать работу</button>
                    </div>
                    <div className='planeRightImage'>
                        <img src={main}/>
                    </div>
                    <div className={'planTitleContainer'}>
                        <span className={'planTitle'}>Как зарабатывать с Everland 2.0?</span>
                        <div className={'planHr'}/>
                    </div>
                    <div className={'planLeft'}>
                        <div className='planLeftImage'>
                            <img src={first} width='383px' height='263px'/>
                        </div>
                        <div className={'planRightText'}>
                            <span className={'planNum'}>1.</span>
                            <span className={'planStepTitle'}>Пройдите курс обучения</span>
                            <span className={'planStepText'}>Пространство, которое дает возможности профессионального роста, интеллектуального развития для людей с инвалидностью.</span>
                        </div>
                    </div>
                    <div className={'planRight'}>
                        <div className='planLeftText'>
                            <span className={'planNum'}>2.</span>
                            <span className={'planStepTitle'}>Подбирайте подходящие вам заказы</span>
                            <span className={'planStepText'}>Пространство, которое дает возможности профессионального роста, интеллектуального развития для людей с инвалидностью.</span>
                        </div>
                        <div className='planRightImage' style={{display: 'inline-block', marginLeft: '400px'}}  >
                            <img src={third} style={{height: '300px', width: '260px'}}/>
                        </div>
                    </div>
                    <div className={'planLeft'}>
                        <div className='planLeftImage'>
                            <img src={fourth} style={{height: '300px', width: '300px'}}/>
                        </div>
                        <div className={'planRightText'}>
                            <span className={'planNum'}>3.</span>
                            <span className={'planStepTitle'}>Получайте консультации у специалистов</span>
                            <span className={'planStepText'}>Пространство, которое дает возможности профессионального роста, интеллектуального развития для людей с инвалидностью.</span>
                        </div>
                    </div>
                    <div className={'planRight'}>
                        <div className={'planLeftText'} style={{display: 'inline-block'}}>
                            <span className={'planNum'}>4.</span>
                            <span className={'planStepTitle'}>Что то про прокачку навыков и результат</span>
                            <span className={'planStepText'}>Пространство, которое дает возможности профессионального роста, интеллектуального развития для людей с инвалидностью.</span>
                        </div>
                        <div className='planRightImage' style={{display: 'inline-block', marginLeft: '400px'}}>
                            <img src={second} style={{height: '300px', width: '250px'}}/>
                        </div>
                    </div>
                    <div className={'planTitleContainer'}>
                        <div className={'planHr'}/>
                        <span className={'planTitle'}>Мотивационный слоган!</span>
                        <button className={'infoButton'}>Начать работу</button>
                    </div>
                    <div style={{margin: '20px'}}/>
                </div>
            </div>
        )
    }
}

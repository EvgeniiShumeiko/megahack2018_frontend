import React, { Component } from 'react';
import MentorCard from '@core/components/component.profile/MentorCard.js'
import Header from '../Header'

import infoImg from '@assets/info.png';

export default class AvailableMentors extends Component{
    render(){
        return(
        <div>
            <Header/>
            <nav>
                <div className={'title'}>
                    Поиск наставника
                </div>
                <div className={'hr'}/>
                <div className='road-map'>
                    <span className='road-map__previous'>Личный кабинет/</span>
                    <span className='road-map__current'>Поиск наставник</span>
                </div>
            </nav>
            <main className='all-available-mentors'>
                <MentorCard experience={'experience'} info={'some info'} name={'UserName'} profession={'profession'} profileImg={infoImg} sendRequest={() => console.log('ans')}/>
            </main>
        </div>)
    }
}

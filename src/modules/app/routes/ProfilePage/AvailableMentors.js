import React, { Component } from 'react';
import MentorCard from '@core/components/component.profile/MentorCard.js'
import Header from '../Header'

import infoImg from '@assets/info.png';
import {getMentors, setMentor} from "../../store/effects";

export default class AvailableMentors extends Component{
    constructor() {
        super();
        this.state = {
            mentors: [],
        }
    }

    componentWillMount() {
        getMentors().then(res => this.setState({ mentors: res }));
    }

    render(){
        console.log(this.state.mentors);
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
                {this.state.mentors.map(mentor =>
                    <MentorCard
                        experience={'experience'}
                        info={mentor.description}
                        name={mentor.accountInfo.surname + ' ' + mentor.accountInfo.name[0]}
                        profession={mentor.tag}
                        profileImg={infoImg}
                        sendRequest={() => setMentor(mentor.accountInfo.login)}/>
                )}
            </main>
        </div>)
    }
}

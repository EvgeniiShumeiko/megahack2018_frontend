import React, { Component } from 'react';
import PropTypes from 'prop-types';

import experienceImg from '@assets/experience.png';
import infoImg from '@assets/info.png';

import './style.styl'

export default class MentorCard extends Component {
    static propTypes = {
        profileImg: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
        experience: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        sendRequest: PropTypes.func.isRequired,
    };

    render(){
        const { profileImg, name, profession, experience, info, sendRequest } = this.props;

        return(
            <div className='mentor-card'>
                <div className='background-red'></div>
                <div className='mentor-profile'>
                    <img src={profileImg} className='mentor-profile__image'/>
                    <span className='mentor-profile__name'>{name}</span>
                    <span className='mentor-profile__profession'>{profession}</span>
                    <sectiion className='mentor-profile__info'>
                        <div className='mentor-profile__experience'>
                            <img src={experienceImg}/>
                            <span>{experience}</span>
                        </div>
                        <div className='mentor-profile__info'>
                            <img src={infoImg}/>
                            <span>{info}</span>
                        </div>
                    </sectiion>
                    <div className='mentor-profile__request' onClick={sendRequest}>
                        Отправить заявку
                    </div>
                </div>
            </div>
        )
    }
}

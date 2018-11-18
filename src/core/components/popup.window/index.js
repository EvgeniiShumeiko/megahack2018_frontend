import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import './style.styl'

export default class PopUpWindow extends Component{
    static propTypes = {
        data1: PropTypes.object.isRequired,
        data2: PropTypes.object.isRequired,
    };

    render(){
        return(
            <div className='popup-window'>
                <h1>Вам звонят</h1>
                <div
                    onClick={window.location.href = `https://nammm.ru/chat/?room='+${data1.pre_login}+'_'+${data2.data.login}`}>
                </div>
            </div>
        )
    }
}

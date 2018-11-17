import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskDescription extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        changeContent: PropTypes.func.isRequired,
        changeHeader: PropTypes.func.isRequired,
        removeItem: PropTypes.func.isRequired,
        changeShowModal: PropTypes.func.isRequired,
    };

    state = {
        newContent: '',
        newHeader: '',
        changingInfo: false
    };

    submitChanges(){
        const { changeContent, changeHeader, id } = this.props;
        const { newContent, newHeader } = this.state;
        changeContent(newContent, id);
        changeHeader(newHeader, id);
    }

    headerChangeHandler = event => {
        event.preventDefault();
        this.setState({newHandler: event.target.value})
    };

    contentChangeHandler = event => {
        event.preventDefault();
        this.setState({newContent: event.target.value});
    };

    render(){
        const { id, content, header, removeItem, changeShowModal } = this.props;
        const { changingInfo, newContent, newHeader } = this.state;

        console.log('canChange', changingInfo);

        return(
            <div className='task-description__background'>
                <div className='task-description'>
                    <div onClick={() => changeShowModal(id)} className='close-modal-btn'>Close</div>
                    <div className='task-header'>
                        {changingInfo
                            ?<input type='text' placeholder={header} value={newHeader} onChange={this.headerChangeHandler}/>
                            :<p>{header}</p>
                        }
                    </div>
                    <div className='task-content'>
                        {changingInfo
                            ?<textarea onChange={this.contentChangeHandler}>{content}</textarea>
                            :<p>{content}</p>
                        }
                    </div>
                    {changingInfo
                        ?<div className='submit-changes bottom-btn' onClick={this.submitChanges}>Submit changes</div>
                        :<div className='create-changes bottom-btn' onClick={this.setState({changingInfo: !changingInfo})}>Change</div>
                    }
                    <div className='complete-task-btn bottom-btn' onClick={() => removeItem(id)}>
                        Set completed
                    </div>
                </div>
            </div>
        );
    }
}

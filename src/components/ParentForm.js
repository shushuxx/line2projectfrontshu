import React from 'react';
import InputMessageField from './InputMessageField';

export default class ParentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            isValidMessage: false,
        };
        this.handleMessageChange.bind(this);
    }
 
    handleMessageChange = (value, isValid) => {      
        this.setState({ message: value, isValidMessage: isValid});                                         
        console.log(`${value} ${isValid}`);
    }
     
    handleSubmitForm = (event) => {
        console.log('handleSubmitForm  ', event);
    }

    render() {
        return (
            <div style={{ marginTop: '10px' }}>
                
                <InputMessageField 
                    helperText="500자 이상 입력하실 수 없습니다."
                    label="Send Message"
                    fieldName="Text"
                    handleChange={this.handleMessageChange}
                />

                {/* {this.state.isValidMessage ?
                    <Button variant="contained" color="primary" onClick={this.handleSubmitForm}>
                        Submit
                    </Button>
                :
                    <Button variant="contained" color="primary" disabled>
                        Submit
                    </Button>
                } */}


            </div>
        );
    }
}

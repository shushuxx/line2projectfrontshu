import { FormControl, TextField } from '@mui/material';
import React, { useState } from 'react'

export default function InputEmailField(props) {   
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [dirty, setDirty] = useState(false);
    
    const handleChange = event => {
        const val = event.target.value;                
        
        if(value.length > 9) {
            setIsValid(true);              
        } else {
            setIsValid(false);              
        }
        
        setValue(val);                
        props.handleChange(val, isValid);
    }

    const hasNotSameError = props =>
    value.length > 20 ? true : false;

    return (
        <div>
            <FormControl fullWidth={props.isFullWidth} >
                <TextField         
                    error={hasNotSameError('value')}                                        
                    onBlur={() => setDirty(true)}
                    id={props.fieldName}                    
                    label={props.label}
                    name={props.fieldName}                    
                    multiline variant="filled" 
                    size={'small'}
                    helperText={props.helperText}
                    value={value}
                    inputProps={{
                      maxLength: 100
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{
                      marginTop: 1,
                      width: 500
                    }}
                    onChange={(e) => handleChange(e)}
                />
                
            </FormControl>
        </div>
    )
}

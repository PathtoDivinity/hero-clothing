import React, { useMemo } from 'react';
import { Group, Input, FormInputLabel } from './form-input.styles';

let idCounter = 0;

const FormInput = ({ label, name, ...otherProps }) => {
    // const inputId = otherProps.id || name;
    const inputId = useMemo(() => otherProps.id || `${name}-${idCounter++}`, [name, otherProps.id]);

    return (
        <Group>
            <Input 
                id={inputId} 
                name={name} 
                {...otherProps} 
                autoComplete={getAutocompleteValue(name)}
            />
            {label && (
                <FormInputLabel htmlFor={inputId}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

const getAutocompleteValue = (fieldName) => {
    switch (fieldName) {
        case 'email':
            return 'email';
        case 'password':
            return 'current-password';
        default:
            return 'on';
    }
};

export default FormInput;
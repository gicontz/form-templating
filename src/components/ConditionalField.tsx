import React, { FunctionComponent, useState } from 'react';
import SelectField from './SelectField';
import { InputField } from './TextField';
 
export type TFieldType = 'input' | 'select' | 'none';
 
const OPTS = [{
    label: 'None',
    value: 'none',
}, {
    label: 'Show InputBox',
    value: 'input',
}, {
    label: 'Show SelectBox',
    value: 'select'
}];
 
const ConditionalField: FunctionComponent = ({...others}) => {
    const [fieldType, setFieldType] = useState<TFieldType>('none');
 
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFieldType(e.target.value as TFieldType);
    }
 
    return (
        <div {...others}>
            <SelectField options={OPTS} onChange={handleChange} data-testid='conditional-select'/>
            {
                fieldType === 'input' ? <InputField fill='outlined' type='text' placeholder='Input Text Here'/>
                : fieldType === 'select' ? <SelectField />
                : ''
            }
        </div>
    )
}; 
 
export default ConditionalField;
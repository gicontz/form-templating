import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
 
const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
 
const Select = styled.select``;
 
export type TItem = {
    label: string;
    value: string | number;
}
 
interface Props {
    options?: TItem[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
 
const SelectField: React.ForwardRefExoticComponent<Props> = React.forwardRef(({
    options,
    onChange,
    ...others
}, innerRef) => {
    const defaultOptions = options ? options : [{ label: 'Select Item', value: 0 }];
    return (
        <FieldContainer {...others}>
            <Select onChange={onChange} ref={innerRef as ForwardedRef<HTMLSelectElement>}>
                {defaultOptions.map(({label, value}, i) => {
                    return (
                        <option value={value} key={i}>{label}</option>
                    )
                })}
            </Select>
        </FieldContainer>
    )
});
 
export default SelectField;
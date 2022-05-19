import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export type FillType = 'outlined' | 'filled';

const Label = styled.label``;

export const InputField = styled.input<{ fill: FillType }>`
    ${({ fill }) => {
        return fill === 'outlined' ? `
            border: none;
            padding: 7px;
            outline: none;
        ` : '';
        }
    }
`;

const FieldContainer = styled.div<{ fill: FillType }>`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    ${({ fill, theme }) => {
        return fill === 'outlined' ? `
        ::after {
            content: '';
            width: 100%;
            height: 2px;
            background-color: ${theme.textfield.outlined.normal.BORDER_COLOR};
        }
        ` : '';
        }
    }
`;

const ErrorLabel = styled.p`
    color: red;
    font-size: 11px;
`;

interface TextFieldProps {
    fill: FillType;
    type: string;
    label: string;
    required?: boolean;
    errorMsg?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FunctionComponent<TextFieldProps> = React.forwardRef(({
    fill,
    label,
    type,
    required,
    errorMsg,
    onChange,
    ...others
}, innerRef) => {
    return (
        <FieldContainer fill={fill}>
            <Label>{label}</Label>
            <InputField type={type} fill={fill} required={required} onChange={onChange} {...others} ref={innerRef as React.ForwardedRef<HTMLInputElement>}/>
            {errorMsg && <ErrorLabel>{errorMsg}</ErrorLabel>}
        </FieldContainer>
    )
});
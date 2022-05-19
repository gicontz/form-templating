import React, { FunctionComponent } from 'react';
import { Container } from '../components/Containers';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { setConfig } from '../api/app/actions';
import { useAppContext } from '../provider/app';
import { TConfig } from '../api/app/types';

const StyledContainer = styled(Container)`
    width: 20%;
`;

interface Props {
    
}

type TFormInputs = {
    repeatNum: number;
    inputBoxes: number;
    selectBoxes: number;
    condBoxes: number;
}

const FormBuilder: FunctionComponent<Props> = () => {
    const { register, handleSubmit } = useForm<TFormInputs>();
    const { dispatch } = useAppContext();

    const onSubmit = (data: TFormInputs) => {
        setConfig(data as TConfig, dispatch);
    }

    return (
        <StyledContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField fill='outlined' type='number' label='Number of Repetitions' {...register('repeatNum')}/>
                <TextField fill='outlined' type='number' label='Number of Input Boxes' {...register('inputBoxes')}/>
                <TextField fill='outlined' type='number' label='Number of Select Boxes'{...register('selectBoxes')}/>
                <TextField fill='outlined' type='number' label='Number of Conditional Select Boxes' {...register('condBoxes')}/>
                <Button type='submit'>Submit</Button>
            </form>
        </StyledContainer>
    )
};

export default FormBuilder;


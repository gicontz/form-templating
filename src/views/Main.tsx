import React, { Component } from 'react';
import { Container } from '../components/Containers';
import FormBuilder from '../layouts/FormBuilder';
import FieldsContainer from '../layouts/FieldsContainer';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <FormBuilder />
                <FieldsContainer />
            </Container>
        )
    }
};
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Containers'
import SelectField from '../components/SelectField';
import { InputField } from '../components/TextField';
import ConditionalField from '../components/ConditionalField';
import { useAppContext } from '../provider/app';
 
var createArray = (n: number) => {
    const arr = [];
        for (let i = 1;  i <= n; i++) {
            arr.push(i);
        }
    return arr;
};
 
const RepContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    margin-bottom: 10px;
    padding: 10px;
    > * {
        margin-bottom: 5px;
    }
`;
 
const StyledContainer = styled(Container)`
    width: 75%;
    max-height: 900px;
    overflow-y: auto;
    flex-direction: column;
`;
 
 
const FieldsContainer: FunctionComponent = () => {
    const { store } = useAppContext();
    const reps = createArray(store.repeatNum);
    const inputs = createArray(store.inputBoxes);
    const selects = createArray(store.selectBoxes);
    const conds = createArray(store.condBoxes);
 
    return (
        <StyledContainer>
            {
                reps.length === 0 ? <h2>Nothing to Display</h2>
                 : reps.map((k) => {
                    return (
                        <RepContainer key={k}>
                            <>
                                {
                                    inputs.map((i) => {
                                        return (
                                            <InputField fill='outlined' type='text' placeholder={'Input Text Here'} key={i} />
                                        )
                                    })
                                }
                            </>
                            <>
                                {
                                    selects.map((ii) => {
                                        return (
                                            <SelectField key={`2${ii}`} />
                                        )
                                    })
                                }
                            </>
                            <>
                                {
                                    conds.map((iii) => {
                                        return (
                                            <ConditionalField key={`3${iii}`} />
                                        )
                                    })
                                }
                            </>
                        </RepContainer>
                    )
                })
            }
        </StyledContainer>
    )
};
 
export default FieldsContainer;
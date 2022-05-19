import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ConditionalField from '../ConditionalField';
import { withTheme } from '../../utilities/test';

test('renders ConditionalField', () => {
  const { container } = render(withTheme(<ConditionalField />));
  
  expect(container).not.toBeNull();
});

test('change fieldType of ConditionalField to input', () => {
    const { getByPlaceholderText, getByTestId } = render(withTheme(<ConditionalField />));
    const selEl = getByTestId('conditional-select');
    fireEvent.change(selEl.getElementsByTagName('select')[0], { target: { value: 'input' }});

    expect(getByPlaceholderText('Input Text Here')).not.toBeNull();
});

test('change fieldType of ConditionalField to select', () => {
    const { getByText, getByTestId } = render(withTheme(<ConditionalField />));
    const selEl = getByTestId('conditional-select');
    fireEvent.change(selEl.getElementsByTagName('select')[0], { target: { value: 'select' }});

    expect(getByText('Select Item')).not.toBeNull();
});

test('change fieldType of ConditionalField to none', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(withTheme(<ConditionalField />));
    const selEl = getByTestId('conditional-select');
    fireEvent.change(selEl.getElementsByTagName('select')[0], { target: { value: 'none' }});

    try {
        getByText('Select Item');
        getByPlaceholderText('Input Text Here');
    } catch (e: any) {
        expect((e.message as string).match(/Unable to find/)).toBeTruthy();
    }
});
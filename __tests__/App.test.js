import React from 'react';
import App from '../App';
import {fireEvent, render} from '@testing-library/react-native';

describe('App component', () => {
  it('Should create an item', () => {
    const {getByPlaceholderText, getByText} = render(<App />);

    const addItemButton = getByText('Add Item');
    const textInput = getByPlaceholderText('Type Something...');
    const createdItemText = 'first Item';

    fireEvent.changeText(textInput, createdItemText);
    fireEvent.press(addItemButton);

    const createdItem = getByText(createdItemText);

    expect(createdItem).not.toBeNull();
  });

  it('Should delete an item', () => {
    const {getByPlaceholderText, getByText, queryByText} = render(<App />);

    const addItemButton = getByText('Add Item');
    const textInput = getByPlaceholderText('Type Something...');
    const createdItemText = 'first Item';

    fireEvent.changeText(textInput, createdItemText);
    fireEvent.press(addItemButton);
    const deleteButton = getByText('X');

    fireEvent.press(deleteButton);

    const createdItem = queryByText(createdItemText);
    expect(createdItem).toBeNull();
  });

  it('Should display validation error', () => {
    const {getByText, queryByText} = render(<App />);

    const addItemButton = getByText('Add Item');
    const errorText = 'please type some text...';

    fireEvent.press(addItemButton);

    const error = queryByText(errorText);

    expect(error).not.toBeNull();
  });
});

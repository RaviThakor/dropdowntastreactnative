import React from 'react';
import CDropdown from '../index';
import {render} from '@testing-library/react-native';

describe('dropdown component', () => {
  it('renders dropdown if it has 2 children', () => {
    const screen = render(<CDropdown />);

    const dropdownButton = screen.getByTestId('dropdown-parent');

    expect(dropdownButton.children.length).toBe(2);
  });

  it('renders dropdown if it has Monday text', () => {
    const screen = render(<CDropdown label="Monday" />);

    expect(screen.getByText('Monday'));
  });
});

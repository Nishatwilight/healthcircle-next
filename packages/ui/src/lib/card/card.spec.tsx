import { render } from '@testing-library/react';

import Card from './card';
import React from 'react';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });
});

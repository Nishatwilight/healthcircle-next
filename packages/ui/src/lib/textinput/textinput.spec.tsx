import { render } from '@testing-library/react';

import Textinput from './textinput';
import React from 'react';

describe('Textinput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Textinput label={''} />);
    expect(baseElement).toBeTruthy();
  });
});

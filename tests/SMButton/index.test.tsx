import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import SMButton from '../../src/SMButton';

describe('SMButton Component', () => {
  it('render SMButton with daanniu', () => {
    const button = render(<SMButton title='daanniu' />);
    expect(button.container).toBeTruthy();
  });
});
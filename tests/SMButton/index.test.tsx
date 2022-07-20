import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import SMButton from '../../src/SMButton';

const defaultProps = {
  onClick: jest.fn(),
};
const disabledProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('SMButton Component', () => {
  it('render SMButton with daanniu', () => {
    const button = render(<SMButton {...defaultProps}>daanniu</SMButton>);
    const element = button.getByText('daanniu') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('sm-btn');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct component based on different props', () => {
    const button = render(
      <SMButton btnType="primary" size="large">
        daanniu
      </SMButton>,
    );
    const element = button.getByText('daanniu');
    expect(element).toHaveClass('sm-btn-primary sm-btn-large');
  });
  it('should render a link', () => {
    const button = render(
      <SMButton btnType="link" href="https://www.baidu.com">
        link
      </SMButton>,
    );
    const element = button.getByText('link');
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('sm-btn-link');
  });
  it('disabled type btn', () => {
    const button = render(<SMButton disabled>disabled</SMButton>);
    const element = button.getByText('disabled') as HTMLButtonElement;
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});

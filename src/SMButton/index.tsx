import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import './index.less';

const SMButton: React.FC<ButtonProps> = props => {
  const { children, ...rest } = props;
  return (
    <div className='sm-button'>
      <div>我和按钮在一起,我们是一个组件</div>
      <Button {...rest}>{children}</Button>
    </div>
  )
}

export default SMButton;

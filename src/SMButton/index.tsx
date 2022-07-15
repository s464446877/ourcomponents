import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import './index.less';

export type SMButtonProps = {
  /**
   * @description 标题名称
   * @default 我和按钮在一起,我们是一个组件
   */
  title: string;
} & ButtonProps;

const SMButton: React.FC<SMButtonProps> = props => {
  const { children, title = '我和按钮在一起,我们是一个组件', ...rest } = props;
  return (
    <div className='sm-button'>
      <div>{title}</div>
      <Button {...rest}>{children}</Button>
    </div>
  )
}

export default SMButton;

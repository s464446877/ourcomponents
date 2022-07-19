import React from 'react';
import './index.less';

export type SMButtonProps = {
  /**
   * @description 标题名称
   * @default primary
   */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  onClick?: Function;
  disabled?: boolean;
  children?: React.ReactNode;
};

const SMButton_Antd: React.FC<SMButtonProps> = (props) => {
  const { children, type = 'default', onClick, disabled = false } = props;
  return (
    <>
      <button
        className={'sm-button-antd' + ' ' + 'sm-button-' + type}
        onClick={(e) => {
          if (disabled) return;
          onClick?.(e);
        }}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default SMButton_Antd;

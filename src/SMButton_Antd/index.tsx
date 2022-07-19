import React from 'react';
import './index.less';

export type SMButtonProps = {
  /**
   * @description 按钮类型
   * @default default
   */
  btnType?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  children?: React.ReactNode;
} & Partial<React.ButtonHTMLAttributes<HTMLElement>>;

const SMButton_Antd: React.FC<SMButtonProps> = (props) => {
  const { children, btnType, disabled, ...rest } = props;
  return (
    <>
      <button
        className={'sm-button-antd' + ' ' + 'sm-button-' + btnType}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

SMButton_Antd.defaultProps = {
  btnType: 'default',
  disabled: false,
};

export default SMButton_Antd;

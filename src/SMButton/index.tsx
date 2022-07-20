import classNames from 'classnames';
import React from 'react';
import './index.less';

export type BaseButtonProps = {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 禁用按钮
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 按钮尺寸
   */
  size?: 'large' | 'small';
  /**
   * @description 按钮类型
   * @default defalut
   */
  btnType?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  children: React.ReactNode;
  /**
   * @description link类型时跳转链接
   */
  href?: string;
};
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const SMButton: React.FC<ButtonProps> = (props) => {
  const { children, btnType, size, disabled, href, className, ...rest } = props;

  // sm-btn sm-btn-large sm-btn-primary
  const classes = classNames('sm-btn', className, {
    [`sm-btn-${btnType}`]: btnType,
    [`sm-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
};

SMButton.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default SMButton;

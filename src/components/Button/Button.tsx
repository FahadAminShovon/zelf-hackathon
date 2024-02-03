import { ComponentProps } from 'react';
import styles from './button.module.css';

const Button = ({
  className,
  children,
  variant = 'block',

  ...rest
}: ComponentProps<'button'> & { variant?: 'ghost' | 'block' }) => {
  return (
    <button className={`${className} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

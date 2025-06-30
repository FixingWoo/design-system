import React, { forwardRef, useEffect, useState } from 'react';
import cn from 'classnames';

import { Flex } from '@/components';

import styles from './style.module.scss';
import commonStyles from '../common.module.scss';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  reverse?: boolean;
  label?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      checked,
      defaultChecked,
      onChange,
      name,
      value,
      disabled,
      reverse = false,
      style,
      label,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(defaultChecked ?? false);

    const toggle = (e?: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (onChange) {
        const syntheticEvent =
          e ??
          ({
            target: {
              name,
              value,
              checked: !isChecked,
            },
          } as unknown as React.ChangeEvent<HTMLInputElement>);
        onChange(syntheticEvent);
      }

      if (checked === undefined) {
        setIsChecked((prev) => !prev);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        toggle();
      }
    };

    const handleClick = () => {
      if (!disabled) {
        toggle();
      }
    };

    useEffect(() => {
      if (typeof checked === 'boolean') {
        setIsChecked(checked);
      }
    }, [checked]);

    return (
      <Flex
        gap="16"
        vertical="center"
        horizontal={reverse ? 'space-between' : undefined}
        fillWidth={reverse}
        className={cn(styles.container, className, {
          [styles.reverse]: reverse,
          [styles.disabled]: disabled,
        })}
        onClick={handleClick}
        role="switch"
        aria-checked={isChecked}
        aria-label={label}
        aria-disabled={disabled}
        tabIndex={-1}
      >
        <input
          ref={ref}
          type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={toggle}
          disabled={disabled}
          className={commonStyles.hidden}
          tabIndex={-1}
        />
        <div
          className={cn(styles.switch, {
            [styles.checked]: isChecked,
            [styles.disabled]: disabled,
          })}
        >
          <div
            onKeyDown={handleKeyDown}
            tabIndex={disabled ? -1 : 0}
            className={cn(styles.element, {
              [styles.checked]: isChecked,
              [styles.disabled]: disabled,
            })}
          ></div>
        </div>
        {label && <Flex>{label}</Flex>}
      </Flex>
    );
  }
);

Switch.displayName = 'Switch';
export { Switch };

'use client';

import React, { useState, useEffect, forwardRef } from 'react';
import styles from './style.module.scss';

import { Flex } from '@/components';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  link?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    { label, link, checked, defaultChecked, onChange, style, ...props },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(
      defaultChecked ?? false
    );

    useEffect(() => {
      if (typeof checked === 'boolean') {
        setInternalChecked(checked);
      }
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.disabled) return;
      if (onChange) {
        onChange(e);
      }
      if (checked === undefined) {
        setInternalChecked(e.target.checked);
      }
    };

    return (
      <Flex
        className={styles.label}
        as="label"
        gap="8"
        vertical="center"
        align="left"
        cursor="pointer"
      >
        <input
          className={styles.input}
          type="radio"
          ref={ref}
          checked={internalChecked}
          onChange={handleChange}
          {...props}
        />
        {label}
      </Flex>
    );
  }
);

RadioButton.displayName = 'RadioButton';
export { RadioButton };

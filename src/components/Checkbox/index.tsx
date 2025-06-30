'use client';

import React, { forwardRef, useState, useEffect } from 'react';
import cn from 'classnames';

import { Flex, Button, Icon } from '@/components';

import styles from './style.module.scss';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  link?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
      <Flex vertical="center">
        <label className={styles.label}>
          <Flex position="relative">
            <input
              className={styles.input}
              type="checkbox"
              ref={ref}
              checked={internalChecked}
              onChange={handleChange}
              {...props}
            />

            {internalChecked && (
              <Icon
                position="absolute"
                className={styles.checkIcon}
                onSolid="brand-strong"
                name={'check'}
                size={'xs'}
              />
            )}
          </Flex>
          {label}
        </label>

        {link && (
          <Button
            className={'reset'}
            href={link}
            target={'_blank'}
            style={{
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            보기
          </Button>
        )}
      </Flex>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export { Checkbox };

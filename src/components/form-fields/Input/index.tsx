'use client';

import React, {
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

import { Flex, Text } from '@/components';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    CommonProps {
  id: string;
  label: string;
  height?: 's' | 'm';
  error?: boolean;
  errorMessage?: ReactNode;
  description?: ReactNode;
  radius?:
    | 'none'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left';
  hasPrefix?: ReactNode;
  hasSuffix?: ReactNode;
  labelAsPlaceholder?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      height = 'm',
      error = false,
      errorMessage,
      description,
      radius,
      className,
      style,
      hasPrefix,
      hasSuffix,
      labelAsPlaceholder = false,
      children,
      value,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(!!value);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setIsFilled(!!e.target.value);
      onBlur?.(e);
    };

    useEffect(() => {
      setIsFilled(!!value);
    }, [value]);

    const displayError = error && errorMessage;

    const classNames = cn(styles.input, 'font-body', 'font-default', 'font-m', {
      [styles.filled]: isFilled,
      [styles.focused]: isFocused,
      [styles.withPrefix]: hasPrefix,
      [styles.withSuffix]: hasSuffix,
      [styles.labelAsPlaceholder]: labelAsPlaceholder,
      [styles.hasChildren]: children,
      [styles.error]: displayError && value !== '',
    });

    return (
      <Flex
        direction="column"
        gap="8"
        style={style}
        fillWidth
        fitHeight
        className={cn(className, {
          [styles.error]: displayError && value !== '',
        })}
      >
        <Flex
          transition="micro-medium"
          border="neutral-medium"
          background="neutral-weak"
          overflow="hidden"
          vertical="stretch"
          className={cn(
            styles.base,
            {
              [styles.s]: height === 's',
              [styles.m]: height === 'm',
              [styles.focused]: isFocused,
              [styles.filled]: isFilled,
            },
            radius === 'none'
              ? 'radius-none'
              : radius
              ? `radius-s-${radius}`
              : 'radius-s'
          )}
        >
          {hasPrefix && (
            <Flex paddingLeft="12" className={styles.prefix} position="static">
              {hasPrefix}
            </Flex>
          )}
          <Flex fillWidth direction="column">
            <input
              {...props}
              ref={ref}
              id={id}
              value={value}
              placeholder={labelAsPlaceholder ? label : props.placeholder}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={classNames}
              aria-describedby={displayError ? `${id}-error` : undefined}
              aria-invalid={!!displayError}
            />
            {!labelAsPlaceholder && (
              <Text
                as="label"
                variant="label-default-m"
                htmlFor={id}
                className={cn(styles.label, styles.inputLabel, {
                  [styles.floating]: isFocused || isFilled,
                })}
              >
                {label}
              </Text>
            )}
            {children}
          </Flex>
          {hasSuffix && (
            <Flex paddingRight="12" className={styles.suffix} position="static">
              {hasSuffix}
            </Flex>
          )}
        </Flex>

        {displayError && (
          <Flex paddingX="16">
            <Text
              as="span"
              id={`${id}-error`}
              variant="body-default-s"
              onBackground="danger-weak"
            >
              {errorMessage}
            </Text>
          </Flex>
        )}

        {description && (
          <Flex paddingX="16">
            <Text
              as="span"
              id={`${id}-description`}
              variant="body-default-s"
              onBackground="neutral-weak"
            >
              {description}
            </Text>
          </Flex>
        )}
      </Flex>
    );
  }
);

Input.displayName = 'Input';
export { Input };

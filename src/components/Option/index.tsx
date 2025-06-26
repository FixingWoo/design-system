import React, { forwardRef } from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

import { Flex, Text } from '..';

export interface OptionProps {
  label: React.ReactNode;
  value: string;
  tabIndex?: number;
  selected?: boolean;
  highlighted?: boolean;
  onClick?: (value: string) => void;
}

const Option = forwardRef<HTMLDivElement, OptionProps>(
  (
    { label, value, tabIndex = -1, selected, highlighted, onClick, ...props },
    ref
  ) => {
    return (
      <Flex
        fillWidth
        vertical="center"
        paddingX="12"
        paddingY="8"
        gap="12"
        radius="m"
        role="option"
        aria-selected={selected}
        tabIndex={-1}
        borderWidth={1}
        borderStyle="solid"
        cursor="interactive"
        transition="micro-medium"
        onClick={() => onClick?.(value)}
        ref={ref}
        className={cn(styles.option, {
          [styles.selected]: selected,
          [styles.highlighted]: highlighted,
        })}
        data-value={value}
        {...props}
      >
        <Flex horizontal="start" fillWidth direction="column">
          <Text onBackground="neutral-strong" variant="label-default-s">
            {label}
          </Text>
        </Flex>
      </Flex>
    );
  }
);

Option.displayName = 'Option';
export { Option };

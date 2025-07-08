'use client';

import React, { useRef, useState, ReactNode, useEffect, useMemo } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

import { Flex, Text } from '@/components';

interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    CommonProps {
  label?: string;
  allText?: string;
  placeholder?: string;
  options: IOption[];
  disabled?: boolean;
  error?: boolean;
  errorMessage?: ReactNode;
  description?: ReactNode;
  value: string;
  onChange: (value: string) => void;
}

const Select = ({
  id,
  className,
  label,
  allText,
  placeholder,
  options,
  disabled,
  error,
  errorMessage,
  description,
  value,
  onChange,
  style,
  ref,
  ...props
}: SelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');

  const memoizedOptions = useMemo(() => {
    if (allText) {
      return [{ value: '', label: allText }, ...options];
    }

    return options;
  }, [options, allText]);

  const handleOpen = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleLabel = (value: string) => {
    const label = memoizedOptions.find(
      (option) => option.value === value
    )?.label;

    if (label) {
      setSelectedLabel(label);
    } else {
      setSelectedLabel(memoizedOptions[0].label);
    }
  };

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  /**
   * 컴포넌트가 마운트 되었을 때, document에 이벤트 리스너를 추가
   * 컴포넌트가 언마운트 되었을 때, document에 이벤트 리스너를 제거
   * 컴포넌트가 언마운트될 때 이벤트 리스너를 제거하지 않으면, DOM 요소는 사라져도 React가 해당 요소를 참조해 가비지 컬렉션 대상에서 제외되어 메모리 누수가 발생할 수 있다.
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (
      event.target instanceof Node &&
      containerRef.current &&
      !containerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const displayError = error && errorMessage;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    handleLabel(value);
  }, [value]);

  useEffect(() => {
    const selectedIndex = memoizedOptions.findIndex(
      (option) => option.value === value
    );

    if (
      selectedIndex >= 0 &&
      listRef.current &&
      itemRefs.current[selectedIndex]
    ) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        block: 'start',
      });
    }
  }, [isOpen]);

  return (
    <Flex
      direction="column"
      gap="8"
      fillWidth
      fitHeight
      style={style}
      ref={containerRef}
    >
      <Flex
        cursor="pointer"
        paddingX="20"
        paddingY="12"
        radius="xs"
        border="neutral-strong"
        className={cn(
          styles.select,
          {
            [styles.open]: isOpen,
            [styles.error]: displayError && value !== '',
            [styles.disabled]: disabled,
          },
          className
        )}
        ref={ref}
        onClick={handleOpen}
        {...props}
      >
        <Text variant="body-default-m">{selectedLabel}</Text>

        {isOpen && (
          <Flex
            className={styles.options}
            direction="column"
            position="absolute"
            top="56"
            left="0"
            right="0"
            cursor="pointer"
            paddingX="8"
            paddingY="12"
            border="brand-weak"
            radius="xs"
            overflowY="auto"
            maxHeight="250"
          >
            <ul className={styles.list} ref={listRef}>
              <Flex direction="column" className={styles.scrollbar}>
                {memoizedOptions.map((option, i) => (
                  <Flex
                    className={styles.item}
                    as="li"
                    paddingX="16"
                    paddingY="12"
                    radius="xs"
                    key={option.value}
                    ref={(el: HTMLLIElement) => {
                      itemRefs.current[i] = el;
                    }}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    <Text
                      className={cn(styles.label, {
                        [styles.active]: selectedLabel === option.label,
                      })}
                    >
                      {option.label}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </ul>
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
    </Flex>
  );
};

Select.displayName = 'Select';
export { Select };

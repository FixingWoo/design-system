'use client';

import React, { forwardRef } from 'react';
import { IconType } from 'react-icons';
import cn from 'classnames';

import styles from './style.module.scss';

import { iconLibrary, IconName } from './icon';
import { Flex } from '@/components';

interface IconProps extends React.ComponentProps<typeof Flex> {
  name: IconName;
  onBackground?: `${ColorScheme}-${ColorWeight}`;
  onSolid?: `${ColorScheme}-${ColorWeight}`;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ name, onBackground, onSolid, size = 'm', className, ...rest }, ref) => {
    const IconComponent: IconType | undefined = iconLibrary[name];

    let colorClass = '';

    if (onBackground) {
      const [scheme, weight] = onBackground.split('-') as [
        ColorScheme,
        ColorWeight
      ];
      colorClass = `${scheme}-on-background-${weight}`;
    } else if (onSolid) {
      const [scheme, weight] = onSolid.split('-') as [ColorScheme, ColorWeight];
      colorClass = `${scheme}-on-solid-${weight}`;
    }

    if (!IconComponent) {
      console.warn(`"${name}" 아이콘은 존재하지 않습니다.`);
      return null;
    }

    return (
      <Flex
        inline
        fit
        as="span"
        ref={ref}
        className={cn(colorClass, styles.icon, styles[size], className)}
        {...rest}
      >
        <IconComponent />
      </Flex>
    );
  }
);

Icon.displayName = 'Icon';
export { Icon };

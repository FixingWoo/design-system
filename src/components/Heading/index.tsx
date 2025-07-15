'use client';

import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';

import { getVariantClasses, generateClassName } from '@/utils';

type HeadingProps<T extends ElementType> = TextProps<T> &
  CommonProps &
  SpacingProps &
  ComponentPropsWithoutRef<T>;

const Heading = <T extends ElementType = 'h1'>({
  as,
  variant,
  size,
  weight,
  onBackground,
  align,
  wrap = 'balance',
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingX,
  paddingY,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  marginX,
  marginY,
  children,
  style,
  className,
  ...props
}: HeadingProps<T>) => {
  const Component = as || 'h1';

  let colorClass = 'neutral-on-background-strong';
  if (onBackground) {
    const [scheme, weight] = onBackground.split('-') as [
      ColorScheme,
      ColorWeight
    ];
    colorClass = `${scheme}-on-background-${weight}`;
  }

  const classes = variant ? getVariantClasses(variant) : [];

  const combinedClasses = cn(
    ...classes,
    colorClass,
    className,
    generateClassName('p', padding),
    generateClassName('pl', paddingLeft),
    generateClassName('pr', paddingRight),
    generateClassName('pt', paddingTop),
    generateClassName('pb', paddingBottom),
    generateClassName('px', paddingX),
    generateClassName('py', paddingY),
    generateClassName('m', margin),
    generateClassName('ml', marginLeft),
    generateClassName('mr', marginRight),
    generateClassName('mt', marginTop),
    generateClassName('mb', marginBottom),
    generateClassName('mx', marginX),
    generateClassName('my', marginY)
  );

  return (
    <Component
      className={combinedClasses}
      style={{ textAlign: align, textWrap: wrap, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
};

Heading.displayName = 'Heading';
export { Heading };

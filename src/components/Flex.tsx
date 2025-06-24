'use client';

import { CSSProperties, HTMLAttributes } from 'react';
import cn from 'classnames';

import { SIZES, T_SHIRT_SIZES } from '@/constants';
import { getVariantClasses } from '@/utils';

interface ComponentProps
  extends HTMLAttributes<HTMLDivElement>,
    FlexProps,
    SpacingProps,
    SizeProps,
    StyleProps,
    CommonProps,
    DisplayProps,
    ConditionalProps {}

const Flex = ({
  as: Component = 'div',
  onBackground,
  background,
  solid,
  inline,
  mobileDirection,
  flex,
  direction,
  horizontal,
  vertical,
  center,
  gap,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingX,
  paddingY,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderStyle,
  borderWidth,
  radius,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  marginX,
  marginY,
  textVariant,
  textSize,
  textWeight,
  position = 'relative',
  top,
  right,
  bottom,
  left,
  cursor,
  width,
  height,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  fit = false,
  fitWidth = false,
  fitHeight = false,
  fill = false,
  fillWidth = false,
  fillHeight = false,
  hide,
  show,
  overflow,
  overflowX,
  overflowY,
  zIndex,
  shadow,
  className,
  ref,
  style,
  children,
  ...rest
}: ComponentProps) => {
  const sizeClass = textSize ? `font-${textSize}` : '';
  const weightClass = textWeight ? `font-${textWeight}` : '';

  let colorClass = '';
  if (onBackground) {
    const [scheme, weight] = onBackground.split('-') as [
      ColorScheme,
      ColorWeight
    ];
    colorClass = `${scheme}-on-background-${weight}`;
  }

  const variantClasses = textVariant
    ? getVariantClasses(textVariant)
    : [sizeClass, weightClass];

  const generateDynamicClass = (type: string, value: string | undefined) => {
    if (!value) return undefined;

    if (value === 'transparent') {
      return `transparent-border`;
    }

    const parts = value.split('-');
    if (parts.includes('alpha')) {
      const [scheme, , weight] = parts;
      return `${scheme}-${type}-alpha-${weight}`;
    }

    const [scheme, weight] = value.split('-') as [ColorScheme, ColorWeight];
    return `${scheme}-${type}-${weight}`;
  };

  const classes = cn(
    inline ? 'inline-flex' : 'flex',
    mobileDirection && `s-flex-${mobileDirection}`,
    direction && `flex-${direction}`,
    flex && `flex-${flex}`,
    generateDynamicClass('background', background),
    generateDynamicClass('solid', solid),
    generateDynamicClass(
      'border',
      border || borderTop || borderRight || borderBottom || borderLeft
    ),
    horizontal &&
      (direction === 'row' ||
      direction === 'row-reverse' ||
      direction === undefined
        ? `justify-${horizontal}`
        : `align-${horizontal}`),
    vertical &&
      (direction === 'row' ||
      direction === 'row-reverse' ||
      direction === undefined
        ? `align-${vertical}`
        : `justify-${vertical}`),
    horizontal && `flex-${horizontal}`,
    vertical && `flex-${vertical}`,
    center && 'center',
    gap === '-1'
      ? direction === 'column' || direction === 'column-reverse'
        ? 'g-vertical--1'
        : 'g-horizontal--1'
      : gap && `g-${gap}`,
    padding && `p-${padding}`,
    paddingLeft && `pl-${paddingLeft}`,
    paddingRight && `pr-${paddingRight}`,
    paddingTop && `pt-${paddingTop}`,
    paddingBottom && `pb-${paddingBottom}`,
    paddingX && `px-${paddingX}`,
    paddingY && `py-${paddingY}`,
    (border || borderTop || borderRight || borderBottom || borderLeft) &&
      !borderStyle &&
      'border-solid',
    (borderTop || borderRight || borderBottom || borderLeft) && 'border-reset',
    border && !borderWidth && 'border-1',
    borderTop && 'border-top-1',
    borderRight && 'border-right-1',
    borderBottom && 'border-bottom-1',
    borderLeft && 'border-left-1',
    borderWidth && `border-${borderWidth}`,
    borderStyle && `border-${borderStyle}`,
    radius === 'full' ? 'radius-full' : radius && `radius-${radius}`,
    margin && `m-${margin}`,
    marginLeft && `ml-${marginLeft}`,
    marginRight && `mr-${marginRight}`,
    marginTop && `mt-${marginTop}`,
    marginBottom && `mb-${marginBottom}`,
    marginX && `mx-${marginX}`,
    marginY && `my-${marginY}`,
    position && `${position}`,
    top && `top-${top}`,
    right && `right-${right}`,
    bottom && `bottom-${bottom}`,
    left && `left-${left}`,
    cursor && `cursor-${cursor}`,
    width,
    height,
    maxWidth,
    minWidth,
    minHeight,
    maxHeight,
    fit && 'fit',
    fitWidth && 'fit-width',
    fitHeight && 'fit-height',
    fill && 'fill',
    fillWidth && !minWidth && 'min-width-0',
    fillHeight && !minHeight && 'min-height-0',
    fill && 'min-height-0',
    fill && 'min-width-0',
    (fillWidth || maxWidth) && 'fill-width',
    (fillHeight || maxHeight) && 'fill-height',
    hide && `${hide}-flex-hide`,
    show && `${show}-flex-show`,
    overflow && `overflow-${overflow}`,
    overflowX && `overflow-x-${overflowX}`,
    overflowY && `overflow-y-${overflowY}`,
    zIndex && `z-index-${zIndex}`,
    shadow && `shadow-${shadow}`,
    colorClass,
    ...variantClasses,
    className
  );

  const parseSize = (
    value: number | string | undefined,
    type: 'width' | 'height'
  ): string | undefined => {
    if (!value) return undefined;

    if (typeof value === 'number') return `${value}rem`;

    if (typeof value === 'string' && SIZES.includes(value)) {
      return `var(--static-space-${value})`;
    }

    if (typeof value === 'string' && T_SHIRT_SIZES.includes(value)) {
      return `var(--responsive-${type}-${value})`;
    }

    return undefined;
  };

  const styles: CSSProperties = {
    maxWidth: parseSize(maxWidth, 'width'),
    minWidth: parseSize(minWidth, 'width'),
    minHeight: parseSize(minHeight, 'height'),
    maxHeight: parseSize(maxHeight, 'height'),
    width: parseSize(width, 'width'),
    height: parseSize(height, 'height'),
    ...style,
  };

  return (
    <Component ref={ref} className={classes} style={styles} {...rest}>
      {children}
    </Component>
  );
};

Flex.displayName = 'Flex';
export { Flex };

import { SIZES, T_SHIRT_SIZES } from '@/constants';

export const getVariantClasses = (variant: TextVariant) => {
  const [fontType, weight, size] = variant.split('-');
  return [`font-${fontType}`, `font-${weight}`, `font-${size}`];
};

export const generateClassName = (
  prefix: string,
  token: SpacingToken | undefined
) => {
  return token ? `${prefix}-${token}` : undefined;
};

export const parseSize = (
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

export const generateDynamicClass = (
  type: string,
  value: string | undefined
) => {
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

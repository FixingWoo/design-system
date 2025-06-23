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

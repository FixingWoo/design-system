interface CommonProps {
  className?: string;
  style?: React.CSSProperties;
  onBackground?: `${ColorScheme}-${ColorWeight}`;
  align?: CSSProperties['textAlign'];
  ref?: Ref<HTMLElement>;
}

interface ConditionalProps {
  hide?: 's' | 'm' | 'l';
  show?: 's' | 'm' | 'l';
}

interface DisplayProps {
  as?: ElementType;
  inline?: boolean;
  pointerEvents?: 'none' | 'all' | 'auto';
  position?: CSSProperties['position'];
  overflow?: CSSProperties['overflow'];
  overflowX?: CSSProperties['overflowX'];
  overflowY?: CSSProperties['overflowY'];
  zIndex?: 0 | 1 | 10;
  transition?:
    | 'micro-short'
    | 'micro-medium'
    | 'micro-long'
    | 'macro-short'
    | 'macro-medium'
    | 'macro-long';
}

interface FlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  mobileDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  horizontal?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  vertical?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  center?: boolean;
  wrap?: boolean;
  flex?: flex;
}

interface TextProps<T extends ElementType = 'span'> extends HTMLAttributes<T> {
  as?: T;
  variant?: TextVariant;
  wrap?: CSSProperties['textWrap'];
  size?: TextSize;
  weight?: TextWeight;
}

interface SpacingProps {
  padding?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingX?: SpacingToken;
  paddingY?: SpacingToken;
  margin?: SpacingToken;
  marginLeft?: SpacingToken;
  marginRight?: SpacingToken;
  marginTop?: SpacingToken;
  marginBottom?: SpacingToken;
  marginX?: SpacingToken;
  marginY?: SpacingToken;
  top?: SpacingToken;
  right?: SpacingToken;
  bottom?: SpacingToken;
  left?: SpacingToken;
  gap?: SpacingToken | '-1';
}

interface SizeProps {
  width?: number | SpacingToken;
  height?: number | SpacingToken;
  maxWidth?: number | SpacingToken;
  minWidth?: number | SpacingToken;
  minHeight?: number | SpacingToken;
  maxHeight?: number | SpacingToken;
  fit?: boolean;
  fitWidth?: boolean;
  fitHeight?: boolean;
  fill?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
}

interface StyleProps {
  background?:
    | `${ColorScheme}-${ColorWeight}`
    | `${ColorScheme}-alpha-${ColorWeight}`
    | 'surface'
    | 'transparent';
  solid?: `${ColorScheme}-${ColorWeight}`;
  borderTop?:
    | `${ColorScheme}-${ColorWeight}`
    | `${ColorScheme}-alpha-${ColorWeight}`
    | 'surface'
    | 'transparent';
  borderRight?:
    | `${ColorScheme}-${ColorWeight}`
    | `${ColorScheme}-alpha-${ColorWeight}`
    | 'surface'
    | 'transparent';
  borderBottom?:
    | `${ColorScheme}-${ColorWeight}`
    | `${ColorScheme}-alpha-${ColorWeight}`
    | 'surface'
    | 'transparent';
  borderLeft?:
    | `${ColorScheme}-${ColorWeight}`
    | `${ColorScheme}-alpha-${ColorWeight}`
    | 'surface'
    | 'transparent';
  border?:
    | `${ColorScheme}-${ColorWeight}`
    | `${ColorScheme}-alpha-${ColorWeight}`
    | 'surface'
    | 'transparent';
  borderStyle?: 'solid';
  borderWidth?: 1 | 2;
  topRadius?: RadiusSize;
  rightRadius?: RadiusSize;
  bottomRadius?: RadiusSize;
  leftRadius?: RadiusSize;
  topLeftRadius?: RadiusSize;
  topRightRadius?: RadiusSize;
  bottomLeftRadius?: RadiusSize;
  bottomRightRadius?: RadiusSize;
  radius?: RadiusSize | `${RadiusSize}-${RadiusNest}`;
  shadow?: ShadowSize;
  textVariant?: TextVariant;
  textSize?: TextSize;
  textType?: TextType;
  textWeight?: TextWeight;
  cursor?: CSSProperties['cursor'] | 'interactive';
}

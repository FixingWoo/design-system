type StaticSpacingToken =
  | '0'
  | '1'
  | '2'
  | '4'
  | '8'
  | '12'
  | '16'
  | '20'
  | '24'
  | '32'
  | '40'
  | '48'
  | '56'
  | '64'
  | '80'
  | '104'
  | '128'
  | '160'
  | '250';

type TShirtSizes = 'xs' | 's' | 'm' | 'l' | 'xl';

type ResponsiveSpacingToken = TShirtSizes;

type ShadowSize = TShirtSizes;

type SpacingToken = StaticSpacingToken | ResponsiveSpacingToken;

type RadiusSize = TShirtSizes | 'full';

type RadiusNest = '4' | '8';

type ColorScheme = 'neutral' | 'brand' | 'danger';

type ColorWeight = 'weak' | 'medium' | 'strong';

type TextSize = TShirtSizes;

type TextVariant = `${TextType}-${TextWeight}-${TextSize}`;

type TextType = 'body' | 'heading' | 'display' | 'label';

type TextWeight = 'default' | 'strong';

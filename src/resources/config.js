import { Noto_Sans_KR } from 'next/font/google';

const primaryFont = Noto_Sans_KR({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
};

export { font };

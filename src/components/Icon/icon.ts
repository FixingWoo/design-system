import { IconType } from 'react-icons';

import { HiCheck, HiCheckCircle } from 'react-icons/hi2';

export const iconLibrary: Record<string, IconType> = {
  check: HiCheck,
  checkCircle: HiCheckCircle,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;

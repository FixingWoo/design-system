'use client';

import React from 'react';
import { Flex } from '@/components';

interface LineProps extends React.ComponentProps<typeof Flex> {
  vert?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

const Line = ({ vert, fullWidth, className, style, ...rest }: LineProps) => {
  return (
    <Flex
      minWidth={vert ? '1' : undefined}
      minHeight={vert ? undefined : '1'}
      width={vert ? '1' : undefined}
      height={vert ? undefined : '1'}
      fillWidth={!vert}
      fillHeight={vert}
      background="neutral-strong"
      direction={vert ? 'column' : 'row'}
      className={className}
      style={style}
      {...rest}
    />
  );
};

Line.displayName = 'Line';
export { Line };

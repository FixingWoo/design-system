'use client';

import { Flex } from './Flex';

interface ColumnProps extends React.ComponentProps<typeof Flex> {
  children?: React.ReactNode;
}

const Column = ({ ref, children, ...rest }: ColumnProps) => {
  return (
    <Flex direction="column" ref={ref} {...rest}>
      {children}
    </Flex>
  );
};

Column.displayName = 'Column';
export { Column };

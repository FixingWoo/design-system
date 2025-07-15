import type { Meta, StoryObj } from '@storybook/nextjs';
import { Grid, Flex } from '../components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    columns: '4',
    mobileColumns: '2',
    gap: '4',
    fitWidth: true,
    children: (
      <>
        <Flex
          width={10}
          height={10}
          padding="s"
          background="neutral-weak"
          border="neutral-strong"
          radius="xs"
        >
          1
        </Flex>
        <Flex
          width={10}
          height={10}
          padding="s"
          background="neutral-weak"
          border="neutral-strong"
          radius="xs"
        >
          2
        </Flex>
        <Flex
          width={10}
          height={10}
          padding="s"
          background="neutral-weak"
          border="neutral-strong"
          radius="xs"
        >
          3
        </Flex>
        <Flex
          width={10}
          height={10}
          padding="s"
          background="neutral-weak"
          border="neutral-strong"
          radius="xs"
        >
          4
        </Flex>
      </>
    ),
  },
};

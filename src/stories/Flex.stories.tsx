import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../components/Flex';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    position: { table: { disable: true } },
    fit: { table: { disable: true } },
    fitWidth: { table: { disable: true } },
    fitHeight: { table: { disable: true } },
    fill: { table: { disable: true } },
    fillWidth: { table: { disable: true } },
    fillHeight: { table: { disable: true } },
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    as: {
      control: { type: 'select' },
      options: ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Flex padding="s" background="neutral-weak">
          자식 1
        </Flex>
        <Flex padding="s" background="neutral-medium">
          자식 2
        </Flex>
        <Flex padding="s" background="neutral-strong">
          자식 3
        </Flex>
      </>
    ),
  },
};

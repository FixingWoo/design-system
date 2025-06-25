import type { Meta, StoryObj } from '@storybook/nextjs';
import { Column } from '../components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Column> = {
  title: 'Components/Column',
  component: Column,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Column>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Column padding="s" background="neutral-weak">
          자식 1
        </Column>
        <Column padding="s" background="neutral-medium">
          자식 2
        </Column>
        <Column padding="s" background="neutral-strong">
          자식 3
        </Column>
      </>
    ),
  },
};

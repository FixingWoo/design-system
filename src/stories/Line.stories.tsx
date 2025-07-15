import type { Meta, StoryObj } from '@storybook/nextjs';
import { Line } from '@/components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Line> = {
  title: 'Components/Line',
  component: Line,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Line>;

export const Default: Story = {
  args: {
    onBackground: 'neutral-weak',
  },
};

export const Vertical: Story = {
  args: {
    onBackground: 'neutral-weak',
    height: 10,
    vert: true,
  },
};

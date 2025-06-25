import type { Meta, StoryObj } from '@storybook/nextjs';
import { Heading } from '../components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    variant: {
      control: { type: 'select' },
      options: [
        'display-strong-xl',
        'display-strong-l',
        'display-strong-m',
        'display-strong-s',
        'display-default-xl',
      ],
    },
    onBackground: {
      control: { type: 'select' },
      options: [
        'neutral-weak',
        'neutral-medium',
        'neutral-strong',
        'brand-weak',
        'brand-medium',
        'brand-strong',
      ],
    },
    wrap: {
      control: { type: 'select' },
      options: ['wrap', 'nowrap', 'balance', 'pretty'],
    },
  },
};

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    variant: undefined,
    onBackground: 'neutral-weak',
    children: 'Heading Component',
  },
};

export default meta;

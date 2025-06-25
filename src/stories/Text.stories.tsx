import type { Meta, StoryObj } from '@storybook/nextjs';
import { Text } from '../components/Text';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        '',
        'body-default-s',
        'body-default-m',
        'body-default-l',
        'body-strong-s',
        'body-strong-m',
        'body-strong-l',
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
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    variant: undefined,
    weight: 'default',
    onBackground: 'neutral-weak',
    children: 'Text Component',
  },
};

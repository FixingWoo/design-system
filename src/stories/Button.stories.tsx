import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button, Flex } from '../components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

const buttons = [
  { id: 'primary', variant: 'primary', label: 'Click me' },
  { id: 'secondary', variant: 'secondary', label: 'Click me' },
  { id: 'tertiary', variant: 'tertiary', label: 'Click me' },
  { id: 'ghost', variant: 'ghost', label: 'Click me' },
];

export const Default: Story = {
  render: () => (
    <Flex gap="s">
      {buttons.map(({ id, variant, label }) => (
        <Button
          id={id}
          key={id}
          variant={variant as 'primary' | 'secondary' | 'tertiary' | 'ghost'}
          label={label}
        />
      ))}
    </Flex>
  ),
};

import type { Meta, StoryObj } from '@storybook/nextjs';
import { Switch } from '../../components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Switch> = {
  title: 'Components/FormControls/Switch',
  component: Switch,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: '레이블',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: '레이블',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: '레이블',
    disabled: true,
    checked: true,
  },
};

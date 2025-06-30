import type { Meta, StoryObj } from '@storybook/nextjs';
import { RadioButton } from '../components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: '레이블',
    disabled: false,
  },
};

export const WithDisabled: Story = {
  args: {
    label: '레이블',
    disabled: true,
  },
};

export const WithCheckedDisabled: Story = {
  args: {
    label: '레이블',
    disabled: true,
    checked: true,
  },
};

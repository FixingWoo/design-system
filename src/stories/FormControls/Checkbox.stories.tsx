import type { Meta, StoryObj } from '@storybook/nextjs';
import { Checkbox } from '../../components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/FormControls/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: '레이블',
    disabled: false,
  },
};

export const WithLink: Story = {
  args: {
    label: '레이블',
    link: '#',
    disabled: false,
  },
};

export const WithDisabled: Story = {
  args: {
    label: '레이블',
    disabled: true,
  },
};

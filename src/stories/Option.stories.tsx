import type { Meta, StoryObj } from '@storybook/nextjs';

import { Option } from '@/components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Option> = {
  title: 'Components/Option',
  component: Option,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Option>;

const options = [
  { label: '사과', value: 'apple' },
  { label: '바나나', value: 'banana' },
  { label: '체리', value: 'cherry' },
];

export const Default: Story = {
  render: () => (
    <div>
      {options.map((opt) => (
        <Option key={opt.value} label={opt.label} value={opt.value} />
      ))}
    </div>
  ),
};

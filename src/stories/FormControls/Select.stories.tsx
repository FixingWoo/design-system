import type { Meta, StoryObj } from '@storybook/nextjs';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Select, Flex, Button } from '../../components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Select> = {
  title: 'Components/FormControls/Select',
  component: Select,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: '레이블',
    options: [
      { value: '옵션1', label: '옵션1' },
      { value: '옵션2', label: '옵션2' },
      { value: '옵션3', label: '옵션3' },
    ],
    placeholder: '선택해주세요.',
    error: true,
    errorMessage: '에러 메시지',
    onChange: (value) => {
      console.log(value);
    },
  },
};

// React Hook Form과 Zod를 사용한 폼 스토리

const formSchema = z.object({
  day: z.string().min(1, { message: '선택해주세요.' }),
});

type FormData = z.infer<typeof formSchema>;

const DAYS = [
  { value: '옵션1', label: '옵션1' },
  { value: '옵션2', label: '옵션2' },
  { value: '옵션3', label: '옵션3' },
  { value: '옵션4', label: '옵션4' },
  { value: '옵션5', label: '옵션5' },
  { value: '옵션6', label: '옵션6' },
  { value: '옵션7', label: '옵션7' },
  { value: '옵션8', label: '옵션8' },
  { value: '옵션9', label: '옵션9' },
  { value: '옵션10', label: '옵션10' },
];

const FormExample = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <Flex direction="column" gap="l">
      <Flex as="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="day"
          control={control}
          render={({ field }) => (
            <Select
              options={DAYS}
              allText={'선택'}
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.day?.message}
            />
          )}
        />
      </Flex>
    </Flex>
  );
};

export const WithFormValidation: Story = {
  render: () => <FormExample />,
  parameters: {
    docs: {
      description: {
        story:
          'React Hook Form과 Zod를 사용한 폼 검증 예시입니다. 이메일, 비밀번호, 이름 필드에 대한 실시간 검증이 적용되어 있습니다.',
      },
    },
  },
};

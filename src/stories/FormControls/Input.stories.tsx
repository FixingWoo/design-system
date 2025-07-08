import type { Meta, StoryObj } from '@storybook/nextjs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button, Input, Flex, Text } from '../../components';

import '@/tokens/index.scss';
import '@/styles/index.scss';

const meta: Meta<typeof Input> = {
  title: 'Components/FormControls/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <Input
      id="input"
      label="Input"
      description="Description"
      onFocus={() => console.log('focus')}
      onBlur={() => console.log('blur')}
    />
  ),
};

// React Hook Form과 Zod를 사용한 폼 스토리

// Zod 스키마 정의
const formSchema = z.object({
  email: z.string().email('올바른 이메일을 입력해주세요'),
  password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다'),
  name: z.string().min(2, '이름은 최소 2자 이상이어야 합니다'),
});

type FormData = z.infer<typeof formSchema>;
const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
        <Flex direction="column" gap="m" width={25}>
          <Input
            id="email"
            label="이메일"
            description="회원가입에 사용할 이메일을 입력해주세요"
            error={!!errors.email}
            errorMessage={errors.email?.message}
            {...register('email')}
          />

          <Input
            id="password"
            label="비밀번호"
            type="password"
            description="8자 이상의 안전한 비밀번호를 입력해주세요"
            error={!!errors.password}
            errorMessage={errors.password?.message}
            {...register('password')}
          />

          <Input
            id="name"
            label="이름"
            description="실명을 입력해주세요"
            error={!!errors.name}
            errorMessage={errors.name?.message}
            {...register('name')}
          />

          <Flex horizontal="start">
            <Button variant="primary" size="l" type="submit" radius="none">
              제출
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        gap="s"
        padding="m"
        background="danger-weak"
        radius="m"
      >
        <Text variant="body-strong-xl">현재 폼 데이터:</Text>
        <pre style={{ margin: 0, fontSize: '16px', lineHeight: '1.5' }}>
          {JSON.stringify(watch(), null, 2)}
        </pre>
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

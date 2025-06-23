import type { Preview } from '@storybook/nextjs';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      if (typeof document !== 'undefined') {
        const html = document.documentElement;
        html.setAttribute('data-neutral', 'gray');
        html.setAttribute('data-brand', 'indigo');
      }
      return Story();
    },
  ],
};

export default preview;

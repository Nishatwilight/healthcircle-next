import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary = {
  args: {
    args: {
        text: 'Click Me', 
        padding: 10, 
        disabled: false,
      },
  },
};

export const Heading: Story = {
  args: {
    text: 'Click Me', 
    padding: 0,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Card!/gi)).toBeTruthy();
  },
};
import type { Meta, StoryObj } from '@storybook/react';
// import { Button } from './button';

// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

// const meta: Meta<typeof Button> = {
//   component: Button,
//   title: 'Component/Button',
// };
// export default meta;
// type Story = StoryObj<typeof Button>;

// export const Primary = {
//   args: {
//     args: {
//         text: 'Click Me', 
//         padding: 10, 
//         disabled: false,
//       },
//   },
// };

// export const Secondary: Story = {
//   args: {
//     text: 'Click Me', 
//     padding: 0,
//     disabled: false,
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
//   },
// };

import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button>Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Large = () => <Button size="large">Large Button</Button>;
export const Medium = () => <Button size="medium">Medium Button</Button>;
export const Small = () => <Button size="small">Small Button</Button>;

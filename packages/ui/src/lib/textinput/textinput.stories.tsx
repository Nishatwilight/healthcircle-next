import React from 'react';
import { Meta, Story } from '@storybook/react';
import Textinput, { TextinputProps } from './textinput';

export default {
  title: 'Components/InputText',
  component: Textinput,
} as Meta;

const Template: Story<TextinputProps> = (args) => <Textinput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Customer Name:',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Input Text with Value',
  initialValue: 'Hello, world!',
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Input Text with icon',
  // initialValue: 'Hello, world!',
};

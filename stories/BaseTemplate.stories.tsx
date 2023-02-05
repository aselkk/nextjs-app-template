import { Meta, StoryFn } from '@storybook/react';
import {
  BaseTemplate,
  BaseTemplateProps,
} from '../components/templates/base/BaseTemplate';
import { mockBaseTemplateProps } from '../components/templates/base/BaseTemplate.mocks';

export default {
  title: 'templates/base/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} as Meta<typeof BaseTemplate>;

const Template: StoryFn<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base,
} as BaseTemplateProps;

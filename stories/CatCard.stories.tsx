import { Meta, StoryFn } from '@storybook/react';
import { CatCard, CatCardProps } from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';

export default {
  title: 'cards/CatCard',
  component: CatCard,
  argTypes: {},
} as Meta<typeof CatCard>;

const Template: StoryFn<typeof CatCard> = (args) => <CatCard {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockCatCardProps.base,
} as CatCardProps;

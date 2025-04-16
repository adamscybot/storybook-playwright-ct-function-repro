

import { createTest } from '@storybook/react/experimental-playwright';
import { test as base, expect } from '@playwright/experimental-ct-react';
 
// See explanation below for `.portable` stories file
import stories from './Button.stories.portable';
 
const test = createTest(base);
 
test('render button without function passed to props', async ({ mount }) => {
  await mount(<stories.Primary />);
});
 
test('render button with function was passed to props', async ({ mount }) => {

  const component = await mount(<stories.Primary label="label from test" onClick={() => console.log('buttonClicked')} />);
  await expect(component).toContainText('label from test');
});
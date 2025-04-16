
import { composeStories } from '@storybook/react';
 
import * as stories from './Button.stories';
 
// This function will be executed in the browser
// and compose all stories, exporting them in a single object
export default composeStories(stories);
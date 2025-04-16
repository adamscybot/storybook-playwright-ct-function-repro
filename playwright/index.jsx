// import { test } from '@playwright/experimental-ct-react';
import { setProjectAnnotations } from '@storybook/react';
import * as previewAnnotations from '../.storybook/preview';
 
setProjectAnnotations(previewAnnotations);
 
// Supports beforeAll hook from Storybook
// test.beforeAll(annotations.beforeAll);
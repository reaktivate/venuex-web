import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../src/ui/styles/defaultTheme.json';
import { setOptions } from '@storybook/addon-options';
import '@storybook/addon-console';

setOptions({
  name: 'VenueX'
});

function loadStories() {
  require('../src/stories');
}

const style = {
  display: 'flex',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 300,
  padding: 8
};

addDecorator((story) => (
  <div style={style}>
    <ThemeProvider theme={defaultTheme}>
      {story()}
    </ThemeProvider>
  </div>
));

configure(loadStories, module);

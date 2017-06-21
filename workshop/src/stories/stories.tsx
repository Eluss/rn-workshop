/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Start } from '../Start/StartScreen'

storiesOf('Start screen', module)
  .add('with short text', () =>
    <Start text='test' updateText={() => { }}>
    </Start>
  )
  .add('with long text', () =>
    <Start text='testing testing testing'
      updateText={() => { }}>
    </Start>
  );

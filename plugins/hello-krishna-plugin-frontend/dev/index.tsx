import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { helloKrishnaPluginFrontendPlugin, HelloKrishnaPluginFrontendPage } from '../src/plugin';

createDevApp()
  .registerPlugin(helloKrishnaPluginFrontendPlugin)
  .addPage({
    element: <HelloKrishnaPluginFrontendPage />,
    title: 'Root Page',
    path: '/hello-krishna-plugin-frontend',
  })
  .render();

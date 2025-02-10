import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const helloKrishnaPluginFrontendPlugin = createPlugin({
  id: 'hello-krishna-plugin-frontend',
  routes: {
    root: rootRouteRef,
  },
});

export const HelloKrishnaPluginFrontendPage = helloKrishnaPluginFrontendPlugin.provide(
  createRoutableExtension({
    name: 'HelloKrishnaPluginFrontendPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

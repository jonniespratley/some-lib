import {esbuildPlugin} from '@web/dev-server-esbuild';

export default {
  nodeResolve: true,
  target: 'auto-always',
  files: [
    'src/**/*.test.ts',
    'src/**/*.spec.ts'
  ],
  plugins: [esbuildPlugin({
    // shorthand for loaders: { '.ts': 'ts' }
    ts: true,
    // shorthand for loaders: { '.json': 'json' }
    json: true,
  })],
};

import { Config } from '@stencil/core';
import { postcss} from '@stencil-community/postcss';
export const config: Config = {
  namespace: 'post-css-test',
  plugins: [
    postcss({}),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  globalStyle:'src/common/global.css'
};

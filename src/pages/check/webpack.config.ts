import { merge } from 'webpack-merge';
import singleSpaDefaults from 'webpack-config-single-spa-react';
import type { Configuration } from 'webpack';

export default (webpackConfigEnv: Record<string, any>, argv: Record<string, any>): Configuration => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'corevera',
    projectName: 'check',
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
   
  });
};

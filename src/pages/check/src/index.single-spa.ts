import React from 'react';
import * as ReactDOM from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import Check from './Check';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient: ReactDOM,
  rootComponent: Check,
  errorBoundary(err: Error, info: { componentStack: string }, props: Record<string, unknown>) {
    return <div>Error!</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
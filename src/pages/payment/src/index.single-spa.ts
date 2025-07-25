import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import Payment from './Payment';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Payment,
  errorBoundary(err: Error, info: { componentStack: string }, props: any) {
    return <div>Error!</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

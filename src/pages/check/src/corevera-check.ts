import React from "react";
import * as ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err: Error, info: { componentStack: string }, props: Record<string, unknown>) {
    return <div>حدث خطأ</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

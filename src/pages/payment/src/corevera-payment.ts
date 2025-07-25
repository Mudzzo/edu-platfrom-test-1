import React from "react";
import * as ReactDOMClient from "react-dom/client"; // مهم استخدام * عشان الـ types
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err: Error, info: { componentStack: string }, props: any) {
    return <div>حدث خطأ</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;


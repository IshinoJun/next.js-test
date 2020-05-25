import * as React from "react";
import App, { AppProps } from "next/app";
import "sanitize.css";

export default class extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

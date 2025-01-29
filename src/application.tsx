import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import App from "./app/App";

const lifecycle = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    errorBoundary(err, info, props) {
        console.error(err, info, props);
        return <div>Error</div>;
    },
});

export const { bootstrap, mount, unmount } = lifecycle;

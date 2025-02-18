import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import App from "./app/App";

export const parcel = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    errorBoundary(err, info, props) {
        console.error(err, info, props);
        return <div>Error</div>;
    },
});

export { getTokens, getUser } from "@/entities/auth/service";

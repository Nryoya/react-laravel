import "./bootstrap";
import "../css/app.css";

import React from "react";
import ReactDOM from 'react-dom/client'
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
            <App {...props} />
        );
    },
});
import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/variables.css'
import './assets/styles/fonts.scss'
import './assets/styles/global.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </BrowserRouter>
    </Provider>
);
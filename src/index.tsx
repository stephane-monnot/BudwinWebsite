import "./sass/index.scss";

import {
    faGithub,
    faLinkedin,
    faMedium,
} from "@fortawesome/free-brands-svg-icons";

import App from "./app";
import PageFooter from "./components/page-footer";
import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
    faGithub,
    faLinkedin,
    faMedium,
);

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<PageFooter copyrightYear={new Date().getFullYear()} />, document.getElementById("footer"));

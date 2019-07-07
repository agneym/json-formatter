import React from "react";
import ReactDOM from "react-dom";
import * as ServiceWorker from "./sw";

import App from "./components/App";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register(ServiceWorker).then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // Registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

ReactDOM.render(<App />, document.getElementById("root"));

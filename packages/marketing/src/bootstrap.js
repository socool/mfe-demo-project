import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

//mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);
};
// if env is development and in isolation
// call mount immediately
if (process.env.NODE_ENV == "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
// we are running throught container
// and e should export the mount function
export { mount };

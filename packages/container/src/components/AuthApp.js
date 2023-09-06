import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      //can recieve (location)
      onNavigate: ({ pathname: nextPathname }) => {
        console.log(nextPathname);
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        console.log("User signed in");
      },
    });
    history.listen(onParentNavigate);
  }, []); // add [] for render MarketingApp once on screen

  return <div ref={ref} />;
};

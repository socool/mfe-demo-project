import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []); // add [] for render MarketingApp once on screen

  return <div ref={ref} />;
};

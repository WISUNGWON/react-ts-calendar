import React, { useState, useEffect } from "react";
// components
import Hatch from "./components/Hatch/Hatch";
// Helpers
import { HatchType, createCalendar } from "./helpers";
// Styles
import { GlobalStyle, StyledApp } from "./App.styles";

const App: React.FC = () => {
  const [hatches, setHatches] = useState([] as HatchType[]);
  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setHatches(calendar);
  }, []);
  return (
    <StyledApp>
      <GlobalStyle />
      <div>Start here</div>
    </StyledApp>
  );
};

export default App;

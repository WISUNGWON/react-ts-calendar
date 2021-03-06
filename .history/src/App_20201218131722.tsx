import React, { useState, useEffect } from "react";
// components
import Hatch from "./components/Hatch/Hatch";
// Styles
import { GlobalStyle, StyledApp } from "./App.styles";

const App: React.FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <div>Start here</div>
    </StyledApp>
  );
};

export default App;

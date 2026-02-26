import { useState } from "react";
import BuilderWrapper from "./layout/BuilderWrapper/BuilderWrapper";

function App() {
  const [activeItem, SetActiveItem] = useState(null);

  return <BuilderWrapper />;
}

export default App;

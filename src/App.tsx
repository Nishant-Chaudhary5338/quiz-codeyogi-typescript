/** @format */

import { useState } from "react";
import Button from "./components/button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button theme="secondary">Hello</Button>
    </div>
  );
}

export default App;

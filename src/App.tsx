/** @format */

import { useState } from "react";
import Button from "./components/button/Button";
import Input from "./components/input/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Input id="First Name" name="First Name">
        First name
      </Input>
    </div>
  );
}

export default App;

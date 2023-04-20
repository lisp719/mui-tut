import { TextField } from "@mui/material";

import { ChangeEvent, useState } from "react";

function App() {
  const [num, setNum] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.patternMismatch) {
      setNum(e.target.value);
    }
  };

  return (
    <>
      <TextField
        value={num}
        onChange={handleChange}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]{1,3}" }}
      />
    </>
  );
}

export default App;

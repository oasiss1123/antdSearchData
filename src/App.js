import FormSearch from "./components/FormSearch";
import SingleInputSearch from "./components/SIngleInputSearch";
import { useState } from "react";
import { Button } from "antd";

export default function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "SingleSearch" : "FormSearch"}
      </Button>
      {toggle ? <SingleInputSearch /> : <FormSearch />}
    </>
  );
}

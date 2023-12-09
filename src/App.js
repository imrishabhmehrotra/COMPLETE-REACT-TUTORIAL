import React, { useState } from "react";
import Button from "./Button";
import Text from "./Text";

const App = () => {
  const [data, setData] = useState([
    {
      id: "a",
      text: "text 1",
    },
    { id: "b", text: "text 2" },
    { id: "c", text: "text 3" },
    { id: "d", text: "text 4" },
  ]);
  const handleClickAction = () => {
    console.log("I was clicked from parent");
  };
  return;
  <>
    {data.map((item, index) => (
      <Text key={index}>{item.text}</Text>
    ))}
  </>;
};

export default App;

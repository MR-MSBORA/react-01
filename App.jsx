import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [data, setData] = useState("");

  const getValue = (val) => {
    setData((prev) => prev + val); 
  };
  

  const calculate = () => {
    try {
      setData(eval(data).toString()); 
    } catch (error) {
      setData("Error");
    }
  };

  const clear = () => {
    setData("");
  };

  const backspace = () => {
    setData((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="m-8 mx-20 px-4 py-2 text-left bg-black border-8 border-white w-fit h-fit">
          <p className="bg-white text-lg text-black font-bold px-2.5 py-1 w-90 max-w-full overflow-auto break-all">
            {data || 0}
          </p>

          <div className="grid grid-cols-4 gap-1.5 p-1.5 bg-gray-700 w-full">
            <Button onClick={clear} value="AC" />
            <Button onClick={backspace} value="⌫" />
            <Button onClick={getValue} value="%" />
            <Button onClick={getValue} value="*" />

            <Button onClick={getValue} value="1" />
            <Button onClick={getValue} value="2" />
            <Button onClick={getValue} value="3" />
            <Button onClick={getValue} value="/" />

            <Button onClick={getValue} value="4" />
            <Button onClick={getValue} value="5" />
            <Button onClick={getValue} value="6" />
            <Button onClick={getValue} value="+" />

            <Button onClick={getValue} value="7" />
            <Button onClick={getValue} value="8" />
            <Button onClick={getValue} value="9" />
            <Button onClick={getValue} value="-" />

            <Button onClick={getValue} value="0" />
            <Button onClick={getValue} value="(" />
            <Button onClick={getValue} value=")" />
            <Button onClick={calculate} value="=" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

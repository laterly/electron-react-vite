import { useState } from "react";
interface Props {
  msg?: string;
}
function HelloWorld(props: Props) {
  const { msg } = props;
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h1>{msg}</h1>
      <button
        onClick={() => {
          setCount((value) => value + 1);
        }}
      >
        count is: {count}
      </button>
      <p>
        Edit <code>components/HelloWorld.vue</code> to test hot module
        replacement.
      </p>
    </>
  );
}

export default HelloWorld;

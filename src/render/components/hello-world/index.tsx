import { toJS } from "mobx";
import { observer } from "mobx-react";
import { Button } from "antd";
import { appStore } from "../../store";
interface Props {
  msg?: string;
}
function HelloWorld(props: Props) {
  const { msg } = props;
  return (
    <>
      <h1>{msg}</h1>
      <Button
        type="primary"
        onClick={() => {
          const count = toJS(appStore.count);
          appStore.setCount(count + 1);
        }}
      >
        count is: {appStore.count}
      </Button>
      <p>
        Edit <code>components/HelloWorld.vue</code> to test hot module
        replacement.
      </p>
    </>
  );
}

export default observer(HelloWorld);

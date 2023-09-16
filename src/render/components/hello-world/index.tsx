import { toJS } from "mobx";
import { observer } from "mobx-react";
import store from "../../store";
interface Props {
  msg?: string;
}
function HelloWorld(props: Props) {
  const { appStore } = store;
  const { msg } = props;
  return (
    <>
      <h1>{msg}</h1>
      <button
        onClick={() => {
          const count = toJS(appStore.count);
          appStore.setCount(count + 1);
        }}
      >
        count is: {appStore.count}
      </button>
      <p>
        Edit <code>components/HelloWorld.vue</code> to test hot module
        replacement.
      </p>
    </>
  );
}

export default observer(HelloWorld);

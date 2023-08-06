
import { Provider } from "react-redux";
import { store } from ".";
import { persistStore } from "redux-persist";

persistStore(store); // persist the store

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}

/**
 * @description The code above creates the provider for us. Notice the persistStore line of code. Since we need to persist a section of the state, we need this line before supplying the store to the Provider.


With the provider in place we can move it to client components that need access to the the store.
 */
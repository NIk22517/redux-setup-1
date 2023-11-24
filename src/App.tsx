import React, { memo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import createStore from "./store";
import Main from "./main";
const { store, persistor } = createStore();

const App: React.FC = (props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default memo(App);

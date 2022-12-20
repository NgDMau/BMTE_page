/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import AppsPage from "./pages/apps";
import { Provider } from "react-redux";
import { persistor, store } from "./rootStore";

import { PersistGate } from "redux-persist/integration/react";
import StyleGlobal from "./styles";

const RootRouter = function () {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<AppsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <StyleGlobal />
          <RootRouter />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

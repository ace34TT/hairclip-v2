import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Favicon from "react-favicon";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux/store";
//
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.baseURL =
  "https://www.hairclip-v2-server.miarajoris.com/public/api/";
//
const queryClient = new QueryClient();
//
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
//
let persistor = persistStore(store);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Favicon url="https://i.ibb.co/0st12ck/1-transparent-logo-black-scroped.png" />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

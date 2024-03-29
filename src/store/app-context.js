import { createContext, useState } from "react";

const AppContext = createContext({
  appData: {},
  setData: (key, value) => {},
  removeData: (key) => {},
  clearData: () => {},
});

const AppContextProvider = (props) => {
  const [appData, setAppData] = useState({});

  const setDataHandler = (key, value) => {
    setAppData((preEntries) => ({ ...preEntries, [key]: value }));
  };

  const removeDataHandler = (key) => {
    setAppData((preEntries) => delete preEntries[key]);
  };

  const clearDataHandler = () => {
    setAppData({});
  };

  const context = {
    appData: appData,
    setData: setDataHandler,
    removeData: removeDataHandler,
    clearData: clearDataHandler,
  };

  return <AppContext.Provider value={context}> {props.children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext as default };

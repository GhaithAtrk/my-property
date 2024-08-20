"use client";

import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }: any) => {
  const [propData, setPropData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("propData");
    if (storedData) {
      setPropData(JSON.parse(storedData));
    }
  }, []);

  return (
    <DataContext.Provider value={{ propData, setPropData }}>{children}</DataContext.Provider>
  );
};

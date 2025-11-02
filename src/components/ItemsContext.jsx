// ItemsContext.js
import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState({
    curtains: { onSite: 0, factory: 0, sheers: 0, selectedType: "factory" },
    carpet: { qty: 0 },
    sofa: { qty: 0 },
    ac: { qty: 0 },
    mattress: { qty: 0 },
  });

  const updateItem = (category, key, value) => {
    setItems((prevItems) => ({
      ...prevItems,
      [category]: {
        ...prevItems[category],
        [key]: value,
      },
    }));
  };

  const removeItem = (category, key) => {
    // For curtains, reset the quantity/price to 0
    // For others, qty to 0
    setItems((prevItems) => ({
      ...prevItems,
      [category]: {
        ...prevItems[category],
        [key]: 0,
      },
    }));
  };

  return (
    <ItemsContext.Provider value={{ items, updateItem, removeItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

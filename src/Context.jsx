import { useState, createContext, useEffect } from "react";

export const DataContext = createContext(null);

export function ContextProvider({ children }) {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        setQuestion(data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <DataContext.Provider value={{ question}}>
      {children}
    </DataContext.Provider>
  );
}

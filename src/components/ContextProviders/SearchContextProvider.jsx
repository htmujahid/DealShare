import { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <SearchContext.Provider value={{ searchKeyword, setSearchKeyword }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import components from "../../Data/Components/components";
import SearchListItem from "../SearchBar/SearchListItem";
import useSearch from "../../hooks/useSearch";
import NoResult from "../SearchBar/NoResult";
function Modal() {
  const isOpen = useSelector((state) => state.ModalSlice.isOpen);
  const [query, setQuery] = useState("");

  const { filteredItems: filtered } = useSearch(components, query);
  return (
    <div
      style={{ zIndex: "10000" }}
      className={`absolute ml-auto mr-auto left-0 right-0 top-0 ${
        isOpen ? "flex" : "hidden"
      }  bottom-0 mt-16 mb-auto bg-white h-[400px] w-[750px] rounded-lg p-5  flex-col`}
    >
      <SearchBar onChange={(e) => setQuery(e.target.value)} value={query} />
      <div className='h-full py-4 overflow-y-scroll scroll space-y-3'>
        {filtered &&
          filtered.map((comp) => {
            return (
              <SearchListItem
                key={comp.id}
                text={comp.title}
                link={comp.path}
              />
            );
          })}
        {filtered.length === 0 && <NoResult query={query} />}
      </div>
    </div>
  );
}

export default Modal;

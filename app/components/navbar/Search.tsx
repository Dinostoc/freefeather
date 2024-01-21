"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-sm
        transition
        cursor-pointer
        "
    >
      <div
        className="
            flex
            flex-row
            items-center
            justify-between
        "
      >
        <div
          className="
    p-2
    bg-orange-400
    rounded-full
    text-white
    "
          style={{
            marginLeft: "8px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button style={{ border: "none", background: "none", padding: "0" }}>
            <BiSearch size={18} />
          </button>
        </div>
        <div
          className="
                text-sm
                font-semibold
                px-4    
            "
        >
          Titre
        </div>
        <div
          className="
                hidden
                sm:block
                text-sm
                font-semibold
                px-4
                border-x-[1px]
                flex-1
                text-center
            "
        >
          Auteur
        </div>
        <div
          className="
                text-sm
                pl-3
                pr-2
                text-gray-600
                flex
                flex-row
                items-center
                gap-3
            "
        >
          <input
            className="w-full placeholder-gray-100 text-sm pl-3 focus:outline-none bg-rose-50 placeholder-gray-500"
            placeholder="Rechercher"
            type="text"
          />
          <button className="flex items-center bg-orange-400 text-sm font-semibold text-white p-[11px] ml-2 px-14 rounded-md">
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

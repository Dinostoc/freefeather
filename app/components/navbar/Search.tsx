'use client';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-sm
        transition
        cursor-pointer
        ">
        <div className="
            flex
            flex-row        
            items-center
            justify-between
        ">
            <div className="
                text-sm
                font-semibold
                px-4    
            ">
                Titre
            </div>
            <div className="
                hidden
                sm:block
                text-sm
                font-semibold
                px-4
                border-x-[1px]
                flex-1
                text-center
            ">
                Auteur
            </div>
            <div className="
                text-sm
                pl-3
                pr-2
                text-gray-600
                flex
                flex-row
                items-center
                gap-3
            ">
                <div className=" sm:block">Add Books</div>
                <div className="
                    p-2
                    bg-orange-400
                    rounded-full
                    text-white
                    ">
                        <BiSearch size={18} />
                </div>
            </div>

        </div>
    </div>
  )
};

export default Search;

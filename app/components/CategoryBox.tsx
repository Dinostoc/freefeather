'use client'

import { useRouter, useSearchParams } from "next/navigation";
import querystring from "query-string";
import { useCallback, useState } from "react";
import { IconType } from "react-icons";
import MenuItem from "./navbar/MenuItem";

interface CategoryBoxProps {
    icon?: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    let editHandleBookMenu = useCallback(() => {
        console.log(label);
        if (label==="Livres") {
            toggleOpen();
        }
        else {
            handleClick();
          }
    }, []);


    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = querystring.parse(params.toString());
        }

        const updatedQuery: any = {
            ... currentQuery,
            category: label
        }

        if (params?.get('category') == label) {
            delete updatedQuery.category;
        }

        const url = querystring.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);


    return (
        <div onClick={editHandleBookMenu}
            className={`
            flex
            flex-col
            items-center
            gap-2
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}>
            {/* <Icon size={26} /> */}
            <div className="font-medium text-sm">
                {label}
            </div>


            {isOpen && (
            <div className='
                absolute
                rounded-xl
                shadow-md
                w-[10vw]
                md:w-3/4bg-white
                overflow-hidden
                left-1/3
                top-44
                text-sm
                z-10
            '>
                <div className='flex flex-col cursor-pointer'>
                    
                    
                        <>
                            <MenuItem
                                onClick={() => {}}
                                label="Romance"
                            />
                            <MenuItem
                                //onClick={() => router.push('/cart')}
                                onClick={() => {}}
                                label="Policier"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Fantasy"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Science fiction"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Histoire"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Poésie"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Biographie"
                            />
                        </>
                    </div>
            </div>
        )}
        </div>
  )
};

export default CategoryBox;



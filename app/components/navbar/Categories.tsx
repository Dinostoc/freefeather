'use client'

import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
    {
        label: 'Roman et littérature',
        description: 'Un roman classique'
    },
    {
        label: 'Policier',
        description: 'Un roman policier'
    },
    {
        label: 'Art',
        description: 'Un livre sur l art'
    },
    {
        label: 'Histoire',
        description: 'Un livre sur l histoire'
    },
    {
        label: 'Bande dessinée',
        description: 'Une bande dessinée'
    },
    {
        label: 'Fantasy',
        description: 'Un roman policier'
    },
    {
        label: 'Science-fiction',
        description: 'Un roman policier'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="
                flex
                flex-row
                items-center
                justify-between
                h-9
                overflow-x-auto
                ">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category == item.label}
                    />
                ))}
            </div>
        </Container>
    )
};

export default Categories;

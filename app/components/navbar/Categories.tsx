'use client'

import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../Container";


export const categories = [
    {
        label: 'A propos',
        description: 'A propos de nous'
    },
    {
        label: 'Livres',
        description: 'Tous les livres disponibles'
    },
    {
        label: 'Auteurs',
        description: 'La liste des auteurs'
    },
    {
        label: 'Contact',
        description: 'Nos coordonnées'
    }
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

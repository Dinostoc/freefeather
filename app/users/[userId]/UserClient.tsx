'use client'


import { SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import Image from "next/image";
import UserHead from "@/app/components/users/UserHead";
import UserInfo from "@/app/components/users/UserInfo";

interface UserClientProps {
    user: SafeUser
    currentUser: SafeUser | null;
}

const UserClient: React.FC<UserClientProps> = ({
    user,
    currentUser
}) => {
    // const category = useMemo(() => {
    //     return categories.find((item) =>
    //     item.label == listing.category);
    // }, [listing.category]);


    return (
        <Container>
            <div className="flex gap-14 max-w-screen-full mx-auto mt-10">
                <div className="flex gap-6">
                    {/* <Image
                            className="rounded-full hover:shadow-xl"
                            height="230"
                            width="230"
                            alt="Image"
                            src={user.image || "/images/placeholder.jpg"}                        
                        /> */}
                    <UserHead 
                        name={user.name}
                        imageSrc={user.image}
                        id={user.id}
                        email=""
                        currentUser={currentUser}
                    />
                    
                </div>
                <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-7
                        md:gap-6
                        mt-6
                        ">
                        <UserInfo
                            user={user}
                            currentUser={currentUser}
                        />
                        {/* <ListingInfo
                            user={user}
                            //category={category}
                            description={user.email}
                            author={user.name}
                            price={0}
                        /> */}
                        </div>
            </div>
        </Container>
    )
};

export default UserClient;

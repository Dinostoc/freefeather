import getUserById from "@/app/actions/getUserById";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import UserClient from "./UserClient";


interface IParams {
    userId?: string;
}


const UserPage =  async ({ params }: { params: IParams}) => {
    const user = await getUserById(params);
    const currentUser = await getCurrentUser();

    if (!user) {
        return (
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>
        )
    }
    return (
        <div className="absolute mt-10">            
            <ClientOnly>                
                <UserClient
                    // a gauche, listing sans user? ||||| a droite = listing avec user dedans
                   user={user}
                   currentUser={currentUser}       
                />
            </ClientOnly>
        </div>
    )
};

export default UserPage;

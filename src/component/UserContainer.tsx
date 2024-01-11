import UserList from "./UserList";
import useUserData from "../hooks/useUserData";
const UserContainer = () => {
    const {user,error,isLoading}=useUserData();

  return (
   <div className="">
     <UserList isLoading={isLoading} user={user} error={error}></UserList>
   </div>
  );
};

export default UserContainer;

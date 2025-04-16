import ShowUsers from "../FetchDataFromAPI/ShowUsers";
import { AxiosPackage, Todos, UserList } from "../FetchDataFromAPI/Todos";

const MakeAPITab = () => {
    return(
        <div>
            <div className="flex api-container">
                   <ShowUsers/>
                    <Todos/>
                    <AxiosPackage/>
                    <UserList/>
                  </div>
        </div>
    )
}

export default MakeAPITab;
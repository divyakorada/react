import ShowUsers from "../FetchDataFromAPI/ShowUsers";
import { AxiosPackage, Todos, UserList, TimerComponent } from "../FetchDataFromAPI/Todos";

const MakeAPITab = () => {
    return(
        <div>
            <div className="flex api-container">
                   <ShowUsers/>
                    <Todos/>
                    <AxiosPackage/>
                    <UserList/>
                  </div>
                    <TimerComponent />
        </div>
    )
}

export default MakeAPITab;
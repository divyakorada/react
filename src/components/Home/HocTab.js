import { FinalComponent, HigherOrder } from "../HOC/Hoc";

import  UserComp from "../HOC/Users"
import PostsComp from "../HOC/Posts";


const HocTab = () => {
    return(
        <div>
              <FinalComponent/>
              <div className="flex">
                <UserComp />
                <PostsComp/>
             </div>
             
        </div>
    )
}

export default HocTab;
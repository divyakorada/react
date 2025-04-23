import { NavLink, Outlet } from "react-router-dom"

const InterviewLayout = () => {
    return(
        <div>
            <h1>Interview  Page</h1>
            <nav>
                <NavLink to="Debounce">Debounce</NavLink>
                <NavLink to="round2">Function Chain</NavLink>
                <NavLink to="round3">Code Split (Dynamic import)</NavLink>
                <NavLink to="searchFilter">Search Filter</NavLink>
            </nav>
            <hr/>
            <Outlet/> {/* nested interview rounds render here */}
        </div>
    )
}

export default InterviewLayout;
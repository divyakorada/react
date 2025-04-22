import { NavLink, Outlet } from "react-router-dom"

const InterviewLayout = () => {
    return(
        <div>
            <h1>Interview  Page</h1>
            <nav>
                <NavLink to="Debounce">Debounce</NavLink>
                <NavLink to="round2">Round 2</NavLink>
                <NavLink to="round3">Round 3</NavLink>
            </nav>
            <hr/>
            <Outlet/> {/* nested interview rounds render here */}
        </div>
    )
}

export default InterviewLayout;
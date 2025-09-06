import { NavLink, Outlet } from "react-router-dom"

const HomeLayout = () => {
    return(
        <div>
            <h3>Home  Page</h3>
            <nav>
                <NavLink to="ContentProjectionTab">ContentProjectionTab</NavLink>
                <NavLink to="MakeAPITab">MakeAPITab</NavLink>
                <NavLink to="FormTab">FormTab</NavLink>
                <NavLink to="DataCommunicationTab">DataCommunication</NavLink>
                <NavLink to="HocTab">Hoc</NavLink>
                <NavLink to="HooksTab">Hooks</NavLink>
                <NavLink to="PropsTab">Props</NavLink>
                <NavLink to="ErrorBoundaryTab">ErrorBoundary</NavLink>
                <NavLink to="ControlledUncontrolledTab">ControlledUncontrolled</NavLink>
                <NavLink to="ListTab">List</NavLink>
                <NavLink to="PortalTab">Portal</NavLink>
                <NavLink to="TodoListTab">Todos</NavLink>
                <NavLink to="ToolkitTab">Toolkit</NavLink>
                <NavLink to="tanstackTab">Tanstack Query</NavLink>
            </nav>
            <hr/>
            <Outlet/> {/* nested Home render here */}
        </div>
    )
}

export default HomeLayout;
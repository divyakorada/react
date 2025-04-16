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
                <NavLink to="ControlledUncontrolledTab">ControlledUncontrolledTab</NavLink>
                <NavLink to="ListTab">ListTab</NavLink>
                <NavLink to="PortalTab">PortalTab</NavLink>
            </nav>
            <hr/>
            <Outlet/> {/* nested Home render here */}
        </div>
    )
}

export default HomeLayout;
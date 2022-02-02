import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/user'>Usuarios</Link>
                    </li>
                    <li>
                        <Link to='/messages'>Mensajes</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout
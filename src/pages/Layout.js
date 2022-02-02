import { Outlet, Link } from "react-router-dom";
import Button from '@material-ui/core/Button'

const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <Button variant="contained" color="secondary">
                        <Link to='/'>Home</Link>
                    </Button>
                    <Button variant="contained" color="success">
                        <Link to='/user'>Usuarios</Link>
                    </Button>
                    <Button variant="contained" color="primary">
                        <Link to='/messages'>Mensajes</Link>
                    </Button>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout
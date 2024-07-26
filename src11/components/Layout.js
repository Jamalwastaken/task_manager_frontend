import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
    return(
    <>
    <nav>
        <ul>
            <li>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                
            </li>
        </ul>
    </nav>
    <Outlet />
    </>  
    );
};
export default Layout;

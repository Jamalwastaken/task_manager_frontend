import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        /*<Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/tasks">Tasks</Nav.Link>
            </Nav.Item>
        </Nav>*/
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;

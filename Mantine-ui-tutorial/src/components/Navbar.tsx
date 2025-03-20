import { AppShell, NavLink } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppShell.Navbar p="md" style={{ gap: "10px" }}>
            <NavLink label="Dasboard" onClick={() => navigate('/')} style={{ margin: "5px" }} />
            <NavLink label="Button Component" onClick={() => navigate('/button')} style={{ margin: "5px" }} />
        </AppShell.Navbar>
    )
}

export default Navbar;
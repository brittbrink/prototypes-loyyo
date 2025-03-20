import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import ButtonComponent from "./Button";
import Dashboard from "./Dashboard";

const RouterSwitcher = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/button" element={<ButtonComponent/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}   

export default RouterSwitcher;
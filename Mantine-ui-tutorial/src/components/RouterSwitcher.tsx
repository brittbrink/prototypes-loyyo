import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import TextComponent from "./Text";
import ButtonComponent from "./Button";

const RouterSwitcher = () => {
    return (
        <Routes>
            <Route path="/" element={<TextComponent />} />
            <Route path="/text" element={<TextComponent />} />
            <Route path="/button" element={<ButtonComponent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}   

export default RouterSwitcher;
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<ProjectsPage />} />
                <Route path="/project/:id" element={<ProjectDetailsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
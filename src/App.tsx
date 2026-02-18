import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { useProjectStore } from "./timeline/store";
import { ProjectsListPage } from "./pages/ProjectsListPage";
import { TimelineEditorPage } from "./pages/TimelineEditorPage";

function App() {
  const loadProjects = useProjectStore(state => state.loadProjects);
  
  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return (
    <Routes>
      <Route path="/" element={<ProjectsListPage />} />
      <Route path="/project/:id" element={<TimelineEditorPage />} />
    </Routes>
  );
}

export default App;

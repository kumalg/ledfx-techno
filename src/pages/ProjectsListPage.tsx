import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProjectStore } from "../timeline/store";
import { SettingsModal } from "../components/SettingsModal";

export function ProjectsListPage() {
  const navigate = useNavigate();
  const projects = useProjectStore((state) => state.projects);
  const createProject = useProjectStore((state) => state.createProject);
  const deleteProject = useProjectStore((state) => state.deleteProject);
  
  const [showDialog, setShowDialog] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectUrl, setNewProjectUrl] = useState("");
  const [newProjectDuration, setNewProjectDuration] = useState("");

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName || !newProjectUrl || !newProjectDuration) return;
    
    const duration = parseFloat(newProjectDuration);
    if (isNaN(duration) || duration <= 0) return;
    
    const project = createProject(newProjectName, newProjectUrl, duration);
    setShowDialog(false);
    setNewProjectName("");
    setNewProjectUrl("");
    setNewProjectDuration("");
    navigate(`/project/${project.id}`);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this project?")) {
      deleteProject(id);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">LedFX Timeline</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Create synchronized light shows for your videos
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium flex items-center gap-2"
              aria-label="Settings"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </button>
            <button
              onClick={() => setShowDialog(true)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              New Project
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              No projects yet
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Create your first light show project to start synchronizing effects
              with your favorite videos
            </p>
            <button
              onClick={() => setShowDialog(true)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Create Your First Project
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="aspect-video bg-muted relative">
                  {project.thumbnailUrl ? (
                    <img
                      src={project.thumbnailUrl}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white font-mono">
                    {formatDuration(project.duration)}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <button
                      onClick={(e) => handleDelete(e, project.id)}
                      className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all p-1"
                      aria-label="Delete project"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{project.clips.length} clips</span>
                    <span>•</span>
                    <span>{formatDate(project.updatedAt)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card border border-border rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Create New Project
            </h2>
            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="My Awesome Light Show"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  YouTube URL
                </label>
                <input
                  type="url"
                  value={newProjectUrl}
                  onChange={(e) => setNewProjectUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://youtube.com/watch?v=..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Duration (seconds)
                </label>
                <input
                  type="number"
                  value={newProjectDuration}
                  onChange={(e) => setNewProjectDuration(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="180"
                  min="1"
                  step="0.1"
                  required
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowDialog(false)}
                  className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}

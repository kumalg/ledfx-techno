import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProjectStore } from "../timeline/store";
import { Timeline } from "../components/timeline/Timeline";
import { VideoPlayer } from "../components/VideoPlayer";
import { TransportControls } from "../components/TransportControls";
import { EffectsPalette } from "../components/EffectsPalette";
import { ClipConfigPanel } from "../components/ClipConfigPanel";

export function TimelineEditorPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentProject = useProjectStore((state) => state.currentProject);
  const setCurrentProject = useProjectStore((state) => state.setCurrentProject);
  const selectedClipId = useProjectStore((state) => state.timelineState.selectedClipId);
  const [showEffects, setShowEffects] = useState(true);

  useEffect(() => {
    if (id) {
      setCurrentProject(id);
    }
  }, [id, setCurrentProject]);
  
  // Auto-switch to properties panel when a clip is selected
  useEffect(() => {
    if (selectedClipId) {
      setShowEffects(false);
    }
  }, [selectedClipId]);

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <header className="border-b border-border bg-card px-6 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-foreground">{currentProject.name}</h1>
        </div>
        <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
          <button
            onClick={() => setShowEffects(true)}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              showEffects
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Effects
          </button>
          <button
            onClick={() => setShowEffects(false)}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              !showEffects
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Properties
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 bg-background p-4 flex flex-col min-h-0">
            <div className="flex-1 min-h-0">
              <VideoPlayer />
            </div>
            <TransportControls />
          </div>
          <div className="h-80 border-t border-border flex-shrink-0">
            <Timeline />
          </div>
        </div>
        {showEffects ? <EffectsPalette /> : <ClipConfigPanel />}
      </main>
    </div>
  );
}

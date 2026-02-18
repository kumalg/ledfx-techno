import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProjectStore } from "../timeline/store";
import { Timeline } from "../components/timeline/Timeline";
import { VideoPlayer } from "../components/VideoPlayer";
import { TransportControls } from "../components/TransportControls";
import { EffectsPalette } from "../components/EffectsPalette";
import { ClipConfigPanel } from "../components/ClipConfigPanel";
import { SettingsModal } from "../components/SettingsModal";

export function TimelineEditorPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentProject = useProjectStore((state) => state.currentProject);
  const setCurrentProject = useProjectStore((state) => state.setCurrentProject);
  const selectedClipId = useProjectStore((state) => state.timelineState.selectedClipId);
  const [showEffects, setShowEffects] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

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
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowSettings(true)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Settings"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
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
      
      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}

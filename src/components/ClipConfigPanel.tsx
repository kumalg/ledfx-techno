import { useProjectStore } from "../timeline/store";

export function ClipConfigPanel() {
  const currentProject = useProjectStore((state) => state.currentProject);
  const selectedClipId = useProjectStore((state) => state.timelineState.selectedClipId);
  const updateClip = useProjectStore((state) => state.updateClip);
  const setSelectedClip = useProjectStore((state) => state.setSelectedClip);
  
  if (!selectedClipId || !currentProject) {
    return (
      <div className="w-80 bg-card border-l border-border flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8 text-center">
          <div>
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">
              Select a clip to edit its properties
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  const selectedClip = currentProject.clips.find((c) => c.id === selectedClipId);
  
  if (!selectedClip) return null;
  
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      updateClip(selectedClipId, { duration: value });
    }
  };
  
  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      updateClip(selectedClipId, { startTime: value });
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(2);
    return `${mins}:${parseFloat(secs).toString().padStart(2, '0')}`;
  };
  
  const configKeys = Object.keys(selectedClip.config).filter(
    key => !key.startsWith('_') && typeof selectedClip.config[key] !== 'object'
  );
  
  return (
    <div className="w-80 bg-card border-l border-border flex flex-col">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Clip Properties</h2>
        <button
          onClick={() => setSelectedClip(null)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
            Effect
          </h3>
          <div className="bg-background rounded-lg p-3 border border-border">
            <div className="text-sm font-medium text-foreground mb-1">
              {selectedClip.effect.name || selectedClip.effect.type}
            </div>
            <div className="text-xs text-muted-foreground">
              {selectedClip.effect.type}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
            Timing
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-foreground mb-1">
                Start Time
              </label>
              <input
                type="number"
                value={selectedClip.startTime.toFixed(2)}
                onChange={handleStartTimeChange}
                step="0.1"
                min="0"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="text-xs text-muted-foreground mt-1">
                {formatTime(selectedClip.startTime)}
              </div>
            </div>
            
            <div>
              <label className="block text-xs text-foreground mb-1">
                Duration
              </label>
              <input
                type="number"
                value={selectedClip.duration.toFixed(2)}
                onChange={handleDurationChange}
                step="0.1"
                min="0.1"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="text-xs text-muted-foreground mt-1">
                {formatTime(selectedClip.duration)}
              </div>
            </div>
          </div>
        </div>
        
        {configKeys.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
              Effect Parameters
            </h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {configKeys.map((key) => (
                <div key={key} className="bg-background rounded p-2 border border-border">
                  <div className="text-xs text-foreground font-medium mb-1">
                    {key.replace(/_/g, ' ')}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {String(selectedClip.config[key])}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

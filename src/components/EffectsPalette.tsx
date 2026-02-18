import { useProjectStore } from "../timeline/store";
import { effect } from "../ledfx/types/effect";

interface EffectPreset {
  name: string;
  effect: ReturnType<typeof effect>;
  color: string;
}

const effectPresets: EffectPreset[] = [
  {
    name: "Gradient Scan 2",
    effect: { ...effect.gradient2Scan("#ff0084", 3, 0), name: "Gradient Scan 2" },
    color: "#ff0084",
  },
  {
    name: "Gradient Scan 1",
    effect: { ...effect.gradient1Scan("#00ffff", 2, 0), name: "Gradient Scan 1" },
    color: "#00ffff",
  },
  {
    name: "Small Scan",
    effect: { ...effect.gradient1ScanSmall("#ffff00", 4, 0), name: "Small Scan" },
    color: "#ffff00",
  },
  {
    name: "Bass Strobe",
    effect: { ...effect.strobeBass("#ff0000"), name: "Bass Strobe" },
    color: "#ff0000",
  },
  {
    name: "Blade Power",
    effect: { ...effect.bladeDefault("#00ff00"), name: "Blade Power" },
    color: "#00ff00",
  },
  {
    name: "Off",
    effect: { ...effect.off(), name: "Off" },
    color: "#000000",
  },
];

export function EffectsPalette() {
  const setDraggedEffect = useProjectStore((state) => state.setDraggedEffect);
  
  const handleDragStart = (e: React.DragEvent, preset: EffectPreset) => {
    setDraggedEffect(preset.effect);
    e.dataTransfer.effectAllowed = "copy";
    
    // Create a custom drag image
    const dragImage = document.createElement("div");
    dragImage.className = "px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-medium";
    dragImage.textContent = preset.name;
    dragImage.style.position = "absolute";
    dragImage.style.top = "-1000px";
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 0, 0);
    setTimeout(() => document.body.removeChild(dragImage), 0);
  };
  
  const handleDragEnd = () => {
    setDraggedEffect(null);
  };
  
  return (
    <div className="w-64 bg-card border-l border-border flex flex-col">
      <div className="px-4 py-3 border-b border-border">
        <h2 className="text-sm font-semibold text-foreground">Effects</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Drag effects to timeline tracks
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {effectPresets.map((preset) => (
          <div
            key={preset.name}
            draggable
            onDragStart={(e) => handleDragStart(e, preset)}
            onDragEnd={handleDragEnd}
            className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 cursor-grab active:cursor-grabbing transition-all group"
          >
            <div
              className="w-8 h-8 rounded flex-shrink-0 border border-border"
              style={{ backgroundColor: preset.color }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">
                {preset.name}
              </div>
              <div className="text-xs text-muted-foreground truncate">
                {preset.effect.type}
              </div>
            </div>
            <svg
              className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        ))}
      </div>
      
      <div className="px-4 py-3 border-t border-border">
        <button className="w-full px-3 py-2 text-sm bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
          Create Custom Effect
        </button>
      </div>
    </div>
  );
}

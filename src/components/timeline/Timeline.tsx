import { useMemo, useState } from "react";
import { Timeline as XTimelineEditor } from "@xzdarcy/react-timeline-editor";
import "@xzdarcy/react-timeline-editor/dist/style.css";
import { ALL_DEVICE_KEYS } from "../../ledfx/devices";
import { useProjectStore } from "../../timeline/store";

interface TimelineAction {
  id: string;
  start: number;
  end: number;
  effectName: string;
}

interface TimelineTrack {
  id: string;
  name: string;
  actions: TimelineAction[];
}

export function Timeline() {
  const currentProject = useProjectStore((state) => state.currentProject);
  const updateClip = useProjectStore((state) => state.updateClip);
  const deleteClip = useProjectStore((state) => state.deleteClip);
  const [scale] = useState(100);

  const editorData = useMemo(() => {
    if (!currentProject) return [];

    return ALL_DEVICE_KEYS.map((deviceId) => ({
      id: deviceId,
      name: {
        rails: "Rails",
        rails2: "Rails 2",
        ceiling: "Ceiling",
      }[deviceId] || deviceId,
      actions: currentProject.clips
        .filter((clip) => clip.deviceId === deviceId)
        .map((clip) => ({
          id: clip.id,
          start: Math.round(clip.startTime * 1000), // Convert to ms
          end: Math.round((clip.startTime + clip.duration) * 1000),
          effectName: clip.effect.name || clip.effect.type,
        })),
    }));
  }, [currentProject]);

  const handleActionChange = (
    trackId: string,
    actionId: string,
    updates: { start?: number; end?: number }
  ) => {
    const startTime = updates.start !== undefined ? updates.start / 1000 : undefined;
    const endTime = updates.end !== undefined ? updates.end / 1000 : undefined;

    if (startTime !== undefined || endTime !== undefined) {
      const duration =
        endTime !== undefined && startTime !== undefined
          ? endTime - startTime
          : endTime !== undefined
            ? endTime / 1000 - (currentProject?.clips.find((c) => c.id === actionId)?.startTime || 0)
            : undefined;

      updateClip(actionId, {
        startTime: startTime,
        duration: duration,
      });
    }
  };

  const handleActionRemove = (_trackId: string, actionId: string) => {
    deleteClip(actionId);
  };

  return (
    <div className="w-full h-full">
      <XTimelineEditor
        scale={scale}
        editorData={editorData}
        onChangeAction={handleActionChange}
        onRemoveAction={handleActionRemove}
      />
    </div>
  );
}

/**
 * Converts a duration string in the format "HH:MM:SS" or "MM:SS" with optional milliseconds to total milliseconds.
 * @param duration - The duration string (e.g., "01:23:45.678" or "23:45.678").
 * @returns The total duration in milliseconds.
 */
export const durationToMilliseconds = (duration: string): number => {
  const [timePart, millisecondsPart] = duration.split('.');
  const parts = timePart.split(':').map(Number);

  let hours = 0, minutes = 0, seconds = 0;

  if (parts.length === 3) {
    [hours, minutes, seconds] = parts;
  } else if (parts.length === 2) {
    [minutes, seconds] = parts;
  } else {
    throw new Error("Invalid duration format. Expected 'HH:MM:SS', 'MM:SS', or with optional '.milliseconds'.");
  }

  const milliseconds = millisecondsPart ? parseInt(millisecondsPart, 10) : 0;

  return (hours * 3600 * 1000) + (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
};

// Example usage:
// const duration1 = "01:23:45.678";
// const duration2 = "23:45.678";
// const duration3 = "23:45";
// console.log(durationToMilliseconds(duration1)); // Output: 5025678
// console.log(durationToMilliseconds(duration2)); // Output: 1425678
// console.log(durationToMilliseconds(duration3)); // Output: 1425000

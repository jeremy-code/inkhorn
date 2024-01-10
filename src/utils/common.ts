// Convert the FormData object into a plain object (value is a string and not FormDataEntryValue)
export const parseFormData = (formData: FormData) =>
  Object.fromEntries(Array.from(formData, ([k, v]) => [k, v.toString()]));

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean
): (...funcArgs: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout as ReturnType<typeof setTimeout>);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

// create an array of time slots in 15 minute increments
export const createTimeSlots = () =>
  Array.from({ length: 96 }, (_, i) => {
    const hour = Math.floor(i / 4) % 12 || 12;
    const minute = (i % 4) * 15;
    const amPm = i < 48 ? "am" : "pm";
    return `${hour}:${minute.toString().padStart(2, "0")}${amPm}`;
  });

export const convertToTimeObject = (timeString: string) => {
  const [time, modifier] = timeString.split(/(am|pm)/i);
  return new Date(`1970-01-01 ${time} ${modifier.toUpperCase()}`);
};

export const formatTime = (time: Date) =>
  new Date(time).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

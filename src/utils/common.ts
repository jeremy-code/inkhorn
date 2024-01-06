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

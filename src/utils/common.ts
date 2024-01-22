// Convert the FormData object into an object
// handles multiple values for the same key (e.g. checkboxes)
export const parseFormData = (formData: FormData) =>
  Object.fromEntries(
    Array.from(formData.keys()).map((key) => [
      key,
      formData.getAll(key).length > 1 ? formData.getAll(key) : formData.get(key),
    ])
  );

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean
): (...funcArgs: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const context = this;

    const later = () => {
      timeout = undefined;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && timeout === undefined;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export function getPercentage(part: number, whole: number, fixed = 2) {
  return `${((part * 100) / whole).toFixed(fixed)}%`;
}

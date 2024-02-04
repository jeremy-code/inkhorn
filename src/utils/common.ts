// Convert the FormData object into an object
// handles multiple values for the same key (e.g. checkboxes)
export const parseFormData = (formData: FormData) =>
  Array.from(formData.entries()).reduce(
    (acc, [k, v]) => {
      if (!acc[k]) {
        const values = formData.getAll(k);
        acc[k] = values.length > 1 ? values : v;
      }
      return acc;
    },
    {} as Record<string, FormDataEntryValue | FormDataEntryValue[]>
  );

export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  callback: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const later = () => {
      timeout = undefined;
      if (!immediate) callback.apply(this, args);
    };

    const callNow = immediate && timeout === undefined;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) callback.apply(this, args);
  };
}

export const getPercentage = (part: number, whole = 1, fixed = 2) =>
  `${((part * 100) / whole).toFixed(fixed)}%`;

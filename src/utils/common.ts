// Convert the FormData object into a plain object (value is a string and not FormDataEntryValue)
export const parseFormData = (formData: FormData) =>
  Object.fromEntries(Array.from(formData).map(([k, v]) => [k, v.toString()]));

export const savePreferences = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadPreferences = (key: string) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

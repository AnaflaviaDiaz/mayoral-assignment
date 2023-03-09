//@ts-nocheck
export const debounce = (callback, delay: number) => {
  const debouncedFunction = (...args) => {
    setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
};

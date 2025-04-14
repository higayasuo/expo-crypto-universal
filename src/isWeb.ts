/**
 * Checks if the current environment is a web environment.
 *
 * @returns {boolean} True if the current environment is a web environment, false otherwise.
 */
export const isWeb = (): boolean => {
  return (
    typeof window !== 'undefined' &&
    typeof window?.crypto?.getRandomValues === 'function'
  );
};

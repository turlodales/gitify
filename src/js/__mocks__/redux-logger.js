export function createLogger () {
  return ({ getState }) => (next) => (action) => {
    return next(action);
  };
};
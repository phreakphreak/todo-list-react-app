export const currentLocation = () => {
  return window.location.hash.replace(/^#/, '') || '/';
};

export const navigate = (to) => (window.location.hash = to);

const isPrefersDarkSheme = () => {
  const isPrefersDarkSheme = window.matchMedia("(prefers-color-scheme: dark)");

  return isPrefersDarkSheme.matches;
};

export default isPrefersDarkSheme;

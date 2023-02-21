const isPrefersDarkSheme = () => {
  const isPrefersDarkSheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storageColorSheme = localStorage.getItem('colorSheme');
  const isLightSheme = storageColorSheme === 'light' || !isPrefersDarkSheme.matches;
  const isDarkSheme = storageColorSheme === 'dark' || isPrefersDarkSheme.matches;

  return isLightSheme ? !isLightSheme : isDarkSheme;
};

export default isPrefersDarkSheme;

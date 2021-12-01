const setCapitalize = (word) => {
  const capitalized = word.split('').map((char, i) => {
    if (i === 0) return char.toUpperCase();
    return char;
  });
  return capitalized.join('');
};

export default setCapitalize;

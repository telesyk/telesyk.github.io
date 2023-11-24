const getFilteredByDateData = (data, abc = true) => {
  let newArr = [];
  let minDate = null;
  let middleArr;
  let allDates;

  data.forEach(item => {
    if (!item) return;
    
    middleArr = minDate === null ? data : middleArr.filter(d => d.date !== minDate);
    allDates = middleArr.map(d => d.date);
    minDate = Math.min(...allDates);

    const minItem = middleArr.find(d => d.date === minDate)
    
    newArr.push(minItem);
  });

  return !abc ? newArr.reverse() : newArr;
}

export default getFilteredByDateData;
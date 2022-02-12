const nameInverter = function (name) {
  if (name === undefined) {
    return 'Error';
  }
  const nameArr = name.trim().split(' ');
  if (nameArr.length === 0) {
    return '';
  }
  if (nameArr.length === 1) {
    if (nameArr[0].includes('.')) {
      return '';
    } else {
      return nameArr[0];
    }
  }
  if (nameArr.length === 2) {
    if (nameArr[0].includes('.')) {
      return `${nameArr[0]} ${nameArr[1]}`;
    } else {
      return `${nameArr[1]}, ${nameArr[0]}`;
    }
  }
  if (nameArr.length === 3) {
    return `${nameArr[0]} ${nameArr[2]}, ${nameArr[1]}`;
  }
};

module.exports = nameInverter;
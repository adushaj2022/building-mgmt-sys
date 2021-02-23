const validator = (array, fields) => {
  const errors = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!element) {
      errors.push({
        field: fields[index],
        message: "Please complete this field",
      });
    }
  }
  return errors;
};

module.exports = validator;

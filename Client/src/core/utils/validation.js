const isValidMobile = (val) => {
  let regex = new RegExp("^[0][9][0-9][0-9]{8,8}$").test(val);
  return regex;
};


const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export { isValidMobile, isValidEmail };

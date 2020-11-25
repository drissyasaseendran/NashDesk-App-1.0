export const validateEmail = (emailStr) => {
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailStr.match(mailFormat);
};

export const validatePassword = (password) => {
  return password.length > 0;
};

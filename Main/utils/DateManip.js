import moment from "moment";

export const serverDateToMomentJs = (serverDate) => {
  return moment.utc(serverDate, "ddd, DD MMM YYYY HH:mm:ss ZZZ");
};

export const tsDateToMomentJs = (epochDate) => {
  return moment.unix(epochDate).utc();
};

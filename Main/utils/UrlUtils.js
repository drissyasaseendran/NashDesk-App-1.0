import { downloadApiPath } from "../endpoints";

export const generateImgDwnloadUrl = (imgHashcode) => {
  return downloadApiPath + "?hashcode=" + imgHashcode;
};

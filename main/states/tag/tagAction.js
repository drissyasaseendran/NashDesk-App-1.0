export const TAG_EDIT = "TAG_EDIT";
export const TAG_STATUS = "TAG_STATUS";


export const tagEdit = (res) => {

    return { type: TAG_EDIT ,data:res};
  };

export const tagStatus = (res) => {
    return { type: TAG_STATUS ,data:res};
};
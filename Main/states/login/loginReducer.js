import * as loginHdr from "./loginAction";

const defaultData = {
  loginData: {
    agentType: "none",
    companyId: "0",
    createdDate: "",
    firstName: "Test",
    image: "",
    username: "none",
    emailId: "none",
  },
  status: "",
};

const loginReducer = (state = defaultData, action) => {
  let data = {};
  switch (action.type) {
    case loginHdr.LOGIN_SUCCESS:
      data = 
      {
        agentType: action.payload.agent_type,
        companyId: action.payload.company_id,
        emailId: action.payload.email_id,
        firstName: action.payload.first_name,
        image: action.payload.image,
        username: action.payload.username,
        createdDate: action.payload.created_date,
      };
      return { ...state, loginData: data, status: "success" };
    case loginHdr.LOGIN_WAIT:
      return { ...state, status: "wait" };

    case loginHdr.LOGIN_FAILURE:
      return { ...state, status: "failed" };

    case loginHdr.LOGIN_ERROR:
      return { ...state, status: "error" };

    case loginHdr.LOGOUT:
      return defaultData;
    default:
      return state;
  }
};

export default loginReducer;

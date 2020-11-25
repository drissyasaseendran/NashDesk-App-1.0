import urljoin from "url-join";

export const domainUrl = "http://195.181.244.26:5000";
// export const domainUrl = "http://127.0.0.1:5000"
export const apiPath = urljoin(domainUrl, "/api");

// login + logout + cred_validate
export const loginApiPath = urljoin(apiPath, "/agentlogin");
export const logoutApiPath = urljoin(apiPath, "/agentlogout");
export const credValidateApiPath = urljoin(apiPath, "/credvalidation");

//Statuscard Analytics
export const statuscardanalytics = urljoin(apiPath,'/statuscardanalytics')

//notification api
export const notificationApiPath = urljoin(apiPath, "/notification");

//upload and download api
export const downloadApiPath = urljoin(domainUrl, "/download");
export const uploadApiPath = urljoin(domainUrl, "/upload");
export const fileDeleteApiPath = urljoin(apiPath, "/filedelete");
//leadershipboard+memos
export const leadershipApiPath = urljoin(apiPath, "/leadershipboard");
export const broadcastApiPath = urljoin(apiPath, "/messagememos");

//company_ext_id endpoint

export const fetchCompanyExtIdApiPath = urljoin(apiPath, "/fetchcompanyextid");

//Analytics endpoints
export const ticketAnalyticsApiPath = urljoin(apiPath, "/ticketanalytics");

//Analytics Emotional Glance
export const emotionalGlanceApiPath = urljoin(apiPath, "/featureflag");
//Analytics Webmessenger
export const webMessengerApiPath = urljoin(apiPath, "/webmessenger");
//Analytics Webmessenger
export const helpdeskApiPath = urljoin(apiPath, "/helpdesk");
//AGENT SETTINGS
export const agentApiPath = urljoin(apiPath, "/agentsettings");
//AGENT SETTINGS
export const agentdeleteApiPath = urljoin(apiPath, "/deleteagent");
//GROUP SETTINGS
export const groupApiPath = urljoin(apiPath, "/groups");
//GROUP tag
export const tagApiPath = urljoin(apiPath, "/tags");
//Profile 
export const profileApiPath = urljoin(apiPath, "/profile");

//TicketSettings
export const ticketSettingsApiPath = urljoin(apiPath, "/ticketsettings");

//TicketSettings
export const clusteringApiPath = urljoin(apiPath, "/clustering");

//
export const cannedApiPath = urljoin(apiPath, "/cannedresponses");


// Mail
export const mailApiPath = urljoin(apiPath, "/mail");
export const testmailApiPath = urljoin(apiPath, "/testmail");

//Task
export const taskaddApiPath = urljoin(apiPath, "/addandassigntask");
//viewTask
export const taskViewApiPath = urljoin(apiPath, "/taskactions");
//viewTask
export const ruleApiPath = urljoin(apiPath, "/rules");

//view
export const ticketbypriorityApiPath = urljoin(apiPath, "/ticketbypriority");
export const tickettrafficApiPath = urljoin(apiPath, "/tickettraffic");
export const resolutiontimeApiPath = urljoin(apiPath, "/resolutiontime");
export const firstresponsetimeApiPath = urljoin(apiPath, "/firstresponsetime");
export const avgresponsetimeApiPath = urljoin(apiPath, "/avgresponsetime");
export const ticketanalyticsApiPath = urljoin(apiPath, "/ticketanalytics");
export const agentuserApiPath =  urljoin(apiPath,'/checkuseravail')

// MAIL
export const eventApiPath =  urljoin(apiPath,'/eventlogs')

// Role
export const roleApiPath =  urljoin(apiPath,'/roledetails')
export const roleCountApiPath =  urljoin(apiPath,'/countroles')
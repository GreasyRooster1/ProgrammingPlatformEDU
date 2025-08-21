import {jsonReq} from "./netutils.js";

const API_URL = "http://localhost:8000";

const netUser = {

}

const netProj = {
    // /get_data/<proj_id>
    getData:jsonReq("/project/get_data",true),

    // /get_user_proj_list/<page>
    getUserProjList:jsonReq("/project/get_user_proj_list",true),
}

const netAuth = {

}

const net = {
    user:netUser,
    proj:netProj,
    auth:netAuth,
}

export {net,API_URL};
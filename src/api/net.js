import {jsonReq} from "./netutils.js";

const API_URL = "http://localhost:8000";

const netUser = {

}

const netProj = {
    // /get_data/<proj_id>
    getData:jsonReq("/project/get_data"),

    // /get_user_proj_data_list/<page>
    getUserProjDataList:jsonReq("/project/get_user_proj_data_list"),

    // /get_user_proj_id_list/<page>
    getUserProjIdList:jsonReq("/project/get_user_proj_id_list"),
}

const netAuth = {

}

const net = {
    user:netUser,
    proj:netProj,
    auth:netAuth,
}

export {net,API_URL};
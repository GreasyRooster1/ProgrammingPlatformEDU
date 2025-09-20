import {fileReq, jsonReq, noArgReq, postReq, uploadReq} from "./netutils.js";

const netUser = {

}

const netProj = {
    // /get_data/<proj_id>
    getData:jsonReq("/project/get_data"),

    // /get_user_proj_data_list/<page>
    getUserProjDataList:jsonReq("/project/get_user_proj_data_list"),

    // /get_user_proj_id_list/<page>
    getUserProjIdList:jsonReq("/project/get_user_proj_id_list"),

    // /get_file/<proj_id>/<path..>
    getFile:fileReq("/project/get_file"),

    // /save_file/<proj_id>/<path..>
    // body: file
    saveFile:uploadReq("/project/save_file"),

    //new/<name>/<proj_type>
    new:postReq("/project/new")
}

const netAuth = {
    // /get_username
    getUsername:noArgReq("/auth/get_username"),

    // /get_uid
    getUid:noArgReq("/auth/get_uid"),

    // /verify_uid
    verifyUid:noArgReq("/auth/verify_uid"),
}

const net = {
    user:netUser,
    proj:netProj,
    auth:netAuth,
}

export {net};
import {fileReq, jsonReq, uploadReq} from "./netutils.js";

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
    saveFile:uploadReq("/project/get_file"),
}

const netAuth = {

}

const net = {
    user:netUser,
    proj:netProj,
    auth:netAuth,
}

export {net};
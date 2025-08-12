import {jsonReq} from "./netutils.js";

const API_URL = "http://localhost:8000";

const netUser = {

}

const netProj = {
    // testsd
    getData:jsonReq("/project/get_data")
}

const netAuth = {

}

const net = {
    user:netUser,
    proj:netProj,
    auth:netAuth,
}
net.proj.getData()
export {net,API_URL};
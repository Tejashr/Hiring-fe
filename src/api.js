import axios from "axios";

export function Postlogin(data){
    return axios.post(`https://hiring-be.herokuapp.com/login`,data)
}

export function Postregister(data){
    return axios.post(`https://hiring-be.herokuapp.com/register`,data)
}

export function GetuserbyEmail(id){
    return axios.get(`https://hiring-be.herokuapp.com/user/${id}`)
}

export function Postreclogin(data){
    return axios.post(`https://hiring-be.herokuapp.com/reclogin`,data)
}

export function Postrecregister(data){
    return axios.post(`https://hiring-be.herokuapp.com/recregister`,data)
}

export function GetrecruiterbyEmail(id){
    return axios.get(`https://hiring-be.herokuapp.com/recruiter/${id}`)
}

export function Postcompany(data){
    return axios.post(`https://hiring-be.herokuapp.com/company`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function Postappliedjobs(data){
    return axios.post(`https://hiring-be.herokuapp.com/apply`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function GetrecruiterbyId(id){
    return axios.get(`https://hiring-be.herokuapp.com/recruiters/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function GetuserbyId(id){
    return axios.get(`https://hiring-be.herokuapp.com/users/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function Getjobs(){
    return axios.get(`https://hiring-be.herokuapp.com/job`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function GetappliedjobId(id){
    return axios.get(`https://hiring-be.herokuapp.com/appliedjob/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function Getcandidatesdetailsbyemail(id){
    return axios.get(`https://hiring-be.herokuapp.com/viewcandidates/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function GetjobId(id){
    return axios.get(`https://hiring-be.herokuapp.com/jobs/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}
import axios from "axios";

//posting the login data of the candidates
export function Postlogin(data){
    return axios.post(`https://hiring-be.herokuapp.com/login`,data)
}

//posting the register data of the candidates
export function Postregister(data){
    return axios.post(`https://hiring-be.herokuapp.com/register`,data)
}

//getting the details of candidates by email
export function GetuserbyEmail(id){
    return axios.get(`https://hiring-be.herokuapp.com/user/${id}`)
}

//posting the login data of the recruiters
export function Postreclogin(data){
    return axios.post(`https://hiring-be.herokuapp.com/reclogin`,data)
}

//posting the register data of the recruiters
export function Postrecregister(data){
    return axios.post(`https://hiring-be.herokuapp.com/recregister`,data)
}

//getting the details of recruiter by email
export function GetrecruiterbyEmail(id){
    return axios.get(`https://hiring-be.herokuapp.com/recruiter/${id}`)
}

//posting the job details by recruiter
export function Postcompany(data){
    return axios.post(`https://hiring-be.herokuapp.com/company`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//posting the job details of applied jobs
export function Postappliedjobs(data){
    return axios.post(`https://hiring-be.herokuapp.com/apply`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of recruiter by id
export function GetrecruiterbyId(id){
    return axios.get(`https://hiring-be.herokuapp.com/recruiters/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of candidates by id
export function GetuserbyId(id){
    return axios.get(`https://hiring-be.herokuapp.com/users/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of job
export function Getjobs(){
    return axios.get(`https://hiring-be.herokuapp.com/job`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of applied jobs of candidates by id
export function GetappliedjobId(id){
    return axios.get(`https://hiring-be.herokuapp.com/appliedjob/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of candidates by email for recruiters
export function Getcandidatesdetailsbyemail(id){
    return axios.get(`https://hiring-be.herokuapp.com/viewcandidates/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

////getting the job info by id
export function GetjobId(id){
    return axios.get(`https://hiring-be.herokuapp.com/jobs/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}
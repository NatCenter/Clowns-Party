import { getRequests,setRequest,fetchRequests,sendRequest,deleteRequest,getClowns,sendClownRequest,fetchClowns,sendDoneParties } from "./dataAccess.js";

const mainContainer=document.querySelector("container")
const requests=getRequests()
export const completedParties=()=>{
    
    console.log(requests)
    return `
     
    `

}




 const Requests=()=>{
    
   
    let html=`
        <ul>
     
            ${requests.map(completedParties).join("")}
            
        </ul>
    `
    return html
}
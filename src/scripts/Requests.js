import { getRequests,setRequest,fetchRequests,sendRequest,deleteRequest,getClowns,sendClownRequest,fetchClowns,sendDoneParties } from "./dataAccess.js";

const mainContainer=document.querySelector("container")
document.addEventListener("click", click => {
    if (click.target.id.startsWith("requests--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
//setting the clown drop down id
const doneParty={};
document.addEventListener("click",click=>{
    if(click.target.name==="clownSelect"){
        doneParty.clownId=parseInt(click.target.value)
    }

})
//completed button
document.addEventListener("click",click=>{
if(click.target.id==="completeParty"){

    sendDoneParties(doneParty)
}


})

export const convertRequestToListElement=(request)=>{
    const clowns=getClowns()
doneParty.partyId=request.id

    return `<div>
       Parents Name: ${request.parentsName}
       Child name:  ${request.childName}
       Number of kids: ${request.numberOfKids}
       address: ${request.address}
       hours:${request.lengthOfReservation}
       Date: ${request.dateOfReservation}

       <button class="request__delete"
       id="requests--${request.id}"
       > Delete </button>

        </div>
    `

}

// feature to be added in later 
{/* <select name="clownSelect"> 
<option> Please select a clown</option>
${clowns.map((clown)=>{
        return `
          <option value="${clown.id}">${clown.clownName}</option>  
        `

        <button class="request__delete" id="completeParty">Complete</button>
})}

</select> */}

export const Requests=()=>{
    const requests=getRequests()
    

    let html=`
        <ul>
            ${requests.map(convertRequestToListElement).join("")}
            
        </ul>
    `
    return html
}
import { getRequests,setRequest,fetchRequests,sendRequest,deleteRequest,getClowns,sendClownRequest,fetchClowns,sendDoneParties,getDoneParties } from "./dataAccess.js";

const mainContainer=document.querySelector("container")
//deleted buttton
document.addEventListener("click", click => {
    if (click.target.id.startsWith("requests--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
//setting the clown drop down id


//completed button
document.addEventListener("click",click=>{
if(click.target.id.startsWith("completeParty--")){
        const [,requestId]=click.target.id.split("--")
        const clownId=document.querySelector(`select[name='clownSelect--${requestId}']`).value
        
    const donePartyObject={
        partyId:parseInt(requestId),
        clownId:parseInt(clownId)

    }
    if(!donePartyObject.clownId){
        window.alert("Please select a clown")
    }
    else{
    sendDoneParties(donePartyObject);
    }

    
}


})
//need to match the done party id to the request id 

export const convertRequestToListElement=(request)=>{
    const clowns=getClowns()


    return `<div>
       Parents Name: ${request.parentsName}
       Child name:  ${request.childName}
       Number of kids: ${request.numberOfKids}
       address: ${request.address}
       hours:${request.lengthOfReservation}
       Date: ${request.dateOfReservation}
       <select name="clownSelect--${request.id}" > 
       <option> Please select a clown</option>
       ${clowns.map((clown)=>{
               return `
                 <option value="${clown.id}">${clown.clownName}</option> 
                
               `
       
              
       })}
       </select>
       <button class="request__delete" id="completeParty--${request.id}">Complete</button> 
       <button class="request__delete"
       id="requests--${request.id}"
       > Delete </button>

        </div>
    `

}

// feature to be added in later 
/* <select name="clownSelect"> 
<option> Please select a clown</option>
${clowns.map((clown)=>{
        return `
          <option value="${clown.id}">${clown.clownName}</option>  
        `

        <button class="request__delete" id="completeParty">Complete</button>
})}

</select> */

export const Requests=()=>{
    const requests=getRequests()
    const parties=getDoneParties()
    const incompeteRequest=requests.filter((request)=>{
        if(!parties.find(party=>party.partyId=== request.id)){
            return request
        }

    })

    let html=`
        <ul>
            ${incompeteRequest.map(convertRequestToListElement).join("")}
            
        </ul>
    `
    return html
}
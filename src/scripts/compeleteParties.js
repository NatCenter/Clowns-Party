import { getRequests,setRequest,fetchRequests,sendRequest,deleteRequest,deletedPartyRequest,getClowns,sendClownRequest,fetchClowns,sendDoneParties,getDoneParties } from "./dataAccess.js";


const mainContainer=document.querySelector("container")

document.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,thepartyId] = click.target.id.split("--")
        deletedPartyRequest(parseInt(thepartyId))
        deleteRequest(parseInt(thepartyId))
    }
})


//need to match the party id with the request id 
  export const completedParties=()=>{
    const parties=getDoneParties()
    const clowns=getClowns()
    const requests=getRequests()
    

    
    let html=`
        <ul>
  
            ${parties.map((party)=>{
                const requestObject=requests.find((request)=>{
                        return request.id===party.partyId;


                })
                const clownFindObject=clowns.find((clown)=>{
                    return clown.id===party.clownId
                })

                return `
                <li>
                Parents Name: ${requestObject.parentsName}
                Child name:${requestObject.childName}
                Number of kids:${requestObject.numberOfKids}
                address:${requestObject.address}
                hours: ${requestObject.lengthOfReservation}
                Date:${requestObject.dateOfReservation}
                Clown done:${clownFindObject.clownName}
               
               
                     </li>

                     <button class="request__delete"
                     id="request--${party.id}"
                     > Delete </button>
              
                      </div>
                `
                

            }).join("")
        
        }
            
        </ul>
    `
    return html
}
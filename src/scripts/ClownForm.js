import { sendRequest } from "./dataAccess.js";

export const ClownForm=()=>{

    let html=`
        <div class="field>
        <label class="label" for="parentsName"> Parent Name</label>
        <br>
        <input type="text" name="parentsName" class="input"></input>
        <label class="label"> Child Name</label>
        <input type="text" name="childName" class="input"></input>
        <label class="label"> Number of Childern</label>
        <input type="number" name="numberOfKids" class="input"></input>

      

        <label class="label"> Address</label>
        <input type="text" name="address" class="input"></input>
        <label class="label"> Date</label>
        <input type="date" name="dateOfReservation" class="input"></input>
        
        <label class="label"> Length Of Reservation</label>
        <input type="number" name="lengthOfReservation" class="input"></input>
       </div>
        <button class="button" id="submitRequest">Submit Order</button>
    
        
    
        `
return html
}

const mainContainer=document.querySelector("#container")

mainContainer.addEventListener("click",clickEvent=>{
    if(clickEvent.target.id==="submitRequest"){
        const parentsName=document.querySelector("input[name='parentsName']").value
        const childName=document.querySelector("input[name='childName']").value
        const numberOfKids=document.querySelector("input[name='numberOfKids']").value
        const address=document.querySelector("input[name='address']").value
        const dateOfReservation=document.querySelector("input[name='dateOfReservation']").value
        const lengthOfReservation=document.querySelector("input[name='lengthOfReservation']").value
        const dataToSendToAPI={
            parentsName:parentsName,
            childName:childName,
            numberOfKids:numberOfKids,
            address:address,
            dateOfReservation:dateOfReservation,
            lengthOfReservation:lengthOfReservation
            
        }
        sendRequest(dataToSendToAPI)
    }


})
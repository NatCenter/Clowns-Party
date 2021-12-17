import {fetchRequests} from "./dataAccess.js"
import {clowns} from "./Clowns.js"
import {fetchClowns} from "./dataAccess.js"
import { fetchDoneParties } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(fetchDoneParties)

    .then(fetchClowns)  
    .then(
        () => {
            mainContainer.innerHTML = clowns()
        }
    )
    
}
render()
mainContainer.addEventListener(
    "stateChange",
    CustomEvent=>{
        render()
    }
    
    )
    render()
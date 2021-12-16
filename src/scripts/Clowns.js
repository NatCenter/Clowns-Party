import { fetchRequests } from "./dataAccess.js";
import {ClownForm} from "./ClownForm.js"
import { Requests } from "./Requests.js";
import{completedParties} from "./compeleteParties.js"


export const clowns=()=>{
return `
    <h1>Clown car llc</h1>
    <div>
        <h2>Clown form</h2>
        ${ClownForm()}
    </div>


<h1>Party List</h1>

<div>
${Requests()}
</div>


`
}
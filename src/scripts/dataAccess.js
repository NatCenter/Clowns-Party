const applicationState={
    requests:[],
    clowns:[],
    doneParies:{
        requests:[]}
}
const API=" http://localhost:8088"

export const fetchRequests=()=>{
    return fetch (`${API}/requests?_sort=dateOfReservation`)
    .then(response=>response.json())
    .then(
        (serviceRequests)=>{
            applicationState.requests=serviceRequests

        }
    )

}

export const getRequests=()=>{
    return applicationState.requests.map(requst=>({...requst}))
}

export const setRequest=(id)=>{
    (applicationState.doneParies.partyId=id)

}
export const sendRequest=(userServiceRequest)=>{
    const fetchOptions={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userServiceRequest)
    }
    return fetch (`${API}/requests?_sort=dateOfReservation`,fetchOptions)
    .then (response => response.json())
    .then(()=>{
        document.dispatchEvent(new CustomEvent("stateChange"))
    })

}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChange"))
            }
        )
}

//clowns

export const fetchClowns=()=>{
    return fetch(`${API}/Clowns`)
    .then(response=>response.json())
    .then(
        (clownRequest)=>{
            applicationState.clowns=clownRequest

        }
    )

}

export const getClowns=()=>{
    return applicationState.clowns.map(clown=>({...clown}))
}

export const sendClownRequest=(ClownRequestService)=>{
    const fetchOptions={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ClownRequestService)
    }
    return fetch(`${API}/Clowns`,fetchOptions)
    .then(clown=>clown.json())
    .then(()=>{
        document.dispatchEvent(new CustomEvent("stateChange"))
    })

}
//doneParties



export const fetchDoneParties=()=>{
    return fetch(`${API}/DoneParties`)
    .then(response=>response.json())
    .then(
        (donePartiesRequest)=>{
            applicationState.doneParies=donePartiesRequest

        }
    )

}

export const getDoneParties=()=>{
    return applicationState.doneParies.map(doneParty=>({...doneParty}))
}

export const sendDoneParties=(donePartyRequest)=>{
    const fetchOptions={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(donePartyRequest)
    }
    return fetch(`${API}/DoneParties`,fetchOptions)
    .then(doneParty=>doneParty.json())
    .then(()=>{
        document.dispatchEvent(new CustomEvent("stateChange"))
    })

}


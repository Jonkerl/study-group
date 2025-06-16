import { tokenStorage } from "./setup"


export function leaveGroup(groupId:string, userEmail:string){
    const token = sessionStorage.getItem(tokenStorage);
    fetch(`https://study-finder.onrender.com/api/groups/leave?groupId=${groupId}&userEmail=${userEmail}`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export function joinAGroup(groupId:string, userEmail:string){
    const token = sessionStorage.getItem(tokenStorage);
    fetch(`https://study-finder.onrender.com/api/groups/join?groupId=${groupId}&userEmail=${userEmail}`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export function fetchGroups(){
    const token = sessionStorage.getItem(tokenStorage);
    const data = fetch(`https://study-finder.onrender.com/api/groups`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(
        response => response.json()
    ).then(data => data)

    return data;
}

export function fetchMyGroups(userEmail:string){
    const token = sessionStorage.getItem(tokenStorage);
    const data = fetch(`https://study-finder.onrender.com/api/groups/my?userEmail=${userEmail}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(
        response => response.json()
    ).then(data => data)

    return data;
}

// export function createGroup(email, data: StudyGroup){
//     const token = sessionStorage.getItem(tokenStorage);
//     fetch(`https://study-finder.onrender.com/api/groups/my?userEmail=${userEmail}`, {
//         method: "GET",
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     }).then(
//         response => response.json()
//     ).then(data => data)

//     return data;
// }
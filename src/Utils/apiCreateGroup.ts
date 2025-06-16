import type { StudyGroup } from "../context/StudyContext";
import { createEndpoint, tokenStorage } from "./setup";


export default function apiCreateGroup(data: StudyGroup){
    const token = sessionStorage.getItem(tokenStorage);
    console.log(token);

    console.log(data);

    console.log(createEndpoint, "endpoint")
    
    fetch(createEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        })
        .then((res) => res.text())
        .then((data) => console.log("Group created:", data))
        .catch((err) => console.error(err, "errorrrrr"));
}
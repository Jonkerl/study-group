export const loginEndpoint = `${import.meta.env.VITE_URL}auth/signin`
export const signupEndpoint = `${import.meta.env.VITE_URL}auth/signup`
export const createEndpoint = `${import.meta.env.VITE_URL}groups/create`
export const groupsEndpoint = `${import.meta.env.VITE_URL}groups`
export const groupsByCourseEndpoint = `${import.meta.env.VITE_URL}groups/by-course`
export const myGroupsEndpoint = `${import.meta.env.VITE_URL}groups/my`
export const joinGroupEndpoint = `${import.meta.env.VITE_URL}groups/join`
export const leaveGroupEndpoint = `${import.meta.env.VITE_URL}groups/leave`

export const tokenStorage = import.meta.env.VITE_TOKEN_STORAGE
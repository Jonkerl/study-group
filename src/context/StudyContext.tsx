import { createContext, useEffect, useState, type ReactNode } from 'react'
import {useAuth} from '../Hooks/useUser'

export type StudyGroup = {
  id: string
  courseTitle: string
  time: string
  createdBy: string
  location: string
  members: string[]
  maxSize: number
}

type StudyContextType = {
  groups: StudyGroup[]
  userGroups: StudyGroup[]
  createGroup: (course: string, time: string, location: string) => void
  joinGroup: (groupId: string) => void
  leaveGroup: (groupId: string) => void
  userEmail: string
  setUserEmail?: (email:string)=>void
}

export const StudyContext = createContext<StudyContextType>({
  groups: [],
  userGroups: [],
  createGroup: () => {},
  joinGroup: () => {},
  leaveGroup: () => {},
  userEmail: '',
})

export const StudyContextProvider = ({ children }: { children: ReactNode }) => {
  const [groups, setGroups] = useState<StudyGroup[]>([])
  const [userGroups, _] = useState<StudyGroup[]>([])
  const [userEmail, setUserEmail] = useState("");

  const {user} =  useAuth();

  // //useffect to st the user in study context
  useEffect(
    ()=>{
      setUserEmail(user.userData?.email || '');
    },[user]
  )


  

  const createGroup = (courseTitle: string, time: string, location: string) => {
    const newGroup: StudyGroup = {
      id: `course-${Date.now().toString(36)}`,
      courseTitle: courseTitle,
      time,
      location,
      createdBy: userEmail,
      members: [userEmail],
      maxSize: 6
    }

    setGroups(prev => [...prev, newGroup]);
    // setUserGroups(prev => [...prev, newGroup.id])

    // //update api
    // apiCreateGroup(newGroup);
  }

  const joinGroup = (groupId: string) => {
    setGroups(prev =>
      prev.map(group => {
        if (
          group.id === groupId &&
          !group.members.includes(userEmail) &&
          group.members.length < group.maxSize
        ) {
          return {
            ...group,
            members: [...group.members, userEmail]
          };
        }
        return group;
      })
    );
  };


  const leaveGroup = (groupId: string) => {
    console.log("leavegroup --" , groupId)
    setGroups(prev =>
      prev.map(group =>
        group.id === groupId
          ? { ...group, members: group.members.filter(email => email !== userEmail) }
          : group
      )
    )
  }

  return (
    <StudyContext.Provider
      value={{
        groups,
        userGroups,
        createGroup,
        joinGroup,
        leaveGroup,
        userEmail,
        setUserEmail,
      }}
    >
      {children}
    </StudyContext.Provider>
  )
}

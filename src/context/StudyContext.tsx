import { createContext, useState, type ReactNode } from 'react'

export type StudyGroup = {
  id: string
  course: string
  time: string
  location: string
  members: string[]
  maxSize: number
}

type StudyContextType = {
  groups: StudyGroup[]
  userGroups: string[]
  createGroup: (course: string, time: string, location: string) => void
  joinGroup: (groupId: string) => void
  leaveGroup: (groupId: string) => void
  userEmail: string
  setUserEmail: (email: string) => void
}

export const StudyContext = createContext<StudyContextType>({
  groups: [],
  userGroups: [],
  createGroup: () => {},
  joinGroup: () => {},
  leaveGroup: () => {},
  userEmail: '',
  setUserEmail: () => {},
})

export const StudyContextProvider = ({ children }: { children: ReactNode }) => {
  const [groups, setGroups] = useState<StudyGroup[]>([])
  const [userGroups, setUserGroups] = useState<string[]>([])
  const [userEmail, setUserEmail] = useState("john@campusedu") 

    const createGroup = (course: string, time: string, location: string) => {
      const newGroup: StudyGroup = {
        id: `${course}-${Date.now()}`,
        course,
        time,
        location,
        members: [userEmail],
        maxSize: 6
      }

      setGroups(prev => [...prev, newGroup])
      setUserGroups(prev => [...prev, newGroup.id])
    }

  const joinGroup = (groupId: string) => {
    setGroups(prev =>
      prev.map(group =>
        group.id === groupId &&
        !group.members.includes(userEmail) &&
        group.members.length < group.maxSize
          ? { ...group, members: [...group.members, userEmail] }
          : group
      )
    )
    setUserGroups(prev => [...new Set([...prev, groupId])])
  }

  const leaveGroup = (groupId: string) => {
    setGroups(prev =>
      prev.map(group =>
        group.id === groupId
          ? { ...group, members: group.members.filter(email => email !== userEmail) }
          : group
      )
    )
    setUserGroups(prev => prev.filter(id => id !== groupId))
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
        setUserEmail
      }}
    >
      {children}
    </StudyContext.Provider>
  )
}

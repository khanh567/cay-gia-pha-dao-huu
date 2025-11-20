import { create } from 'zustand'

export type Member = {
  id: string
  name: string
  gender: 'Nam' | 'Nữ'
  birth?: string
  relation?: string
  fatherId?: string
  motherId?: string
}

export type FamilyEvent = {
  id: string
  title: string
  date: string
  type: string
  personId?: string
}

export const useFamilyStore = create<{
  isAuthenticated: boolean
  members: Member[]
  events: FamilyEvent[]
  login: (pass: string) => boolean
  logout: () => void
  addMember: (m: Omit<Member, 'id'>) => void
  deleteMember: (id: string) => void
}>((set) => ({
  isAuthenticated: localStorage.getItem('auth2025') === 'true',
  members: JSON.parse(localStorage.getItem('members2025') || 'null') || [
    { id: '1', name: "Đào Hữu Tý", gender: "Nam", birth: "1975-04-15", relation: "Chồng" },
    { id: '2', name: "Trần Thị Hường", gender: "Nữ", birth: "1978-09-20", relation: "Vợ" },
    { id: '3', name: "Đào Hữu Khánh", gender: "Nam", birth: "2002-06-10", relation: "Con trai", fatherId: "1", motherId: "2" },
    { id: '4', name: "Đào Hữu Quốc", gender: "Nam", birth: "2005-12-25", relation: "Con trai", fatherId: "1", motherId: "2" },
  ],
  events: JSON.parse(localStorage.getItem('events2025') || 'null') || [
    { id: 'e1', title: "Kỷ niệm ngày cưới", date: "2025-05-20", type: "Kỷ niệm cưới" },
    { id: 'e2', title: "Sinh nhật anh Khánh", date: "2025-06-10", type: "Sinh nhật", personId: "3" },
  ],

  login: (pass) => {
    if (pass === 'dao2025') {
      localStorage.setItem('auth2025', 'true')
      set({ isAuthenticated: true })
      return true
    }
    return false
  },

  logout: () => {
    localStorage.removeItem('auth2025')
    set({ isAuthenticated: false })
  },

  addMember: (m) => set((state) => {
    const newList = [...state.members, { ...m, id: Date.now().toString() }]
    localStorage.setItem('members2025', JSON.stringify(newList))
    return { members: newList }
  }),

  deleteMember: (id) => set((state) => {
    const newList = state.members.filter(m => m.id !== id)
    localStorage.setItem('members2025', JSON.stringify(newList))
    return { members: newList }
  }),
}))
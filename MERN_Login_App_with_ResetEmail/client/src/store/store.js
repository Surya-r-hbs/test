import create from 'zustand';

export const useAuthStore = create((set) => ({
    auth : {
        username : '',
        active : false
    },
    setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})) 
}))

export const useData = create((set) => ({
    person: {
        block: '',
        room: '',
    },
    setBlock : (block) => set((state) => ({ person : { ...state.person, block : block }})), 
    setRoom : (room) => set((state) => ({ person : { ...state.person, room : room }})) 
}))
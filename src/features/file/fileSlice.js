import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    files: [],
    currentDir: null
}

export const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setFiles: (state, action) => {
            state.files = action.payload
        },
        setCurrentDir: (state, action) => {
            state.currentDir = action.payload
        },
        addFile: (state, action) => {
            state.files = [...files, action.payload]
        }
        
    }
})

export default fileSlice.reducer
export const { setFiles, setCurrentDir, addFile } = fileSlice.actions

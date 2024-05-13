import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    files: [],
    currentDir: null,
    popup: 'none',
    dirStack: []
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
            state.files.push(action.payload)
        },
        setUpPopup: (state, action) => {
            state.popup = action.payload
        },
        pushToStack: (state, action) => {
            state.dirStack.push(action.payload)

        },
        popFromStack: (state, action) => {
            state.dirStack.pop()
        }
    }
})

export default fileSlice.reducer
export const { setFiles, setCurrentDir, addFile, setUpPopup, pushToStack, popFromStack} = fileSlice.actions

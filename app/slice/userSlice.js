import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "User",
    initialState: {
        name: "",
        email: "",
        photo: ""
    },
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        logOutUser: (state)=>{
            state.name = null
            state.email = null
            state.photo = null
        }
    }
})

export default userSlice.reducer;
export const {setUserLogin, logOutUser} = userSlice.actions

export const setName = (state) => state.user.name;
export const setEmail = (state) => state.user.email;
export const setPhoto = (state) => state.user.photo;

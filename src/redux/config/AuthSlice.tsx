import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
    isTutorialSeen: boolean;
}

const initialState: AuthState = {
    isLoggedIn: false, 
    isTutorialSeen: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        markTutorial(state){
            state.isTutorialSeen = true;
        },
    },
});

export const { login, logout, markTutorial } = authSlice.actions;

export default authSlice.reducer;

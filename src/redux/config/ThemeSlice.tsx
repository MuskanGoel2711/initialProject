import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
    themeMode: 'light' | 'dark';
}

const initialState: ThemeState = {
    themeMode: 'light',
};

const saveThemeToStorage = async (theme: string | null | undefined) => {
    try {
        await AsyncStorage.setItem('themeMode', theme || 'light');
    } catch (error) {
        console.error('Failed to save the theme to storage:', error);
    }
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.themeMode = action.payload;
            saveThemeToStorage(action.payload);
        },
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.themeMode = action.payload;
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;

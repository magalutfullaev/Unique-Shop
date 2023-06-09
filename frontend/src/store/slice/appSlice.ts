import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAppSlice {
    activeNav: string;
    navItems: { name: string, value: string, gender?: boolean }[]
    logged: boolean;
    categoryType: string
}

const initialState: IAppSlice = {
    activeNav: '',
    logged: true,
    navItems: [
        {
            name: 'man',
            value: 'Мужское',
            gender: true,
        },
        {
            name: 'woman',
            value: 'Женское',
            gender: true,
        },
        {
            name: 'unisex',
            value: 'Унисекс',
            gender: true,
        },
        {
            name: 'sale',
            value: 'Продажа'
        },
        {
            name: 'faq',
            value: 'FAQ'
        },
        {
            name: 'about-company',
            value: 'О компании'
        },
    ],
    categoryType: 'top'
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setActiveNav: (state, action: PayloadAction<string>) => {
            localStorage.setItem('activeNav', action.payload)
            state.activeNav = action.payload
        },
        setCategoryType: (state, action) => {
            state.categoryType = action.payload;
        }
    }
})

export const {setActiveNav, setCategoryType} = appSlice.actions;
export default appSlice.reducer;
import React, { ChangeEvent, ChangeEventHandler, createContext, useContext, useState } from 'react';

type StateType = {
    activeMenu: boolean,
    setActiveMenu: any,
    isClicked: {
        chat: boolean,
        cart: boolean,
        userProfile: boolean,
        notification: boolean
    },
    setIsClicked: any,
    handleClick: Function,
    screenSize: number,
    setScreenSize: Function,
    currentColor: string,
    currentMode: any,
    setCurrentColor: Function,
    setCurrentMode: any,
    themeSettings: boolean,
    setThemeSettings: Function,
    setMode: any,
    setColor: Function
}

const StateContext = createContext({} as StateType);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }: any) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(0);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color: string) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const handleClick = (clicked: any) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    return (

        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setCurrentColor,
                setCurrentMode,
                themeSettings,
                setThemeSettings,
                setMode,
                setColor
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
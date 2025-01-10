
import '../styles/ColorPicker.css'
import {useState} from "react";



export const ColorPicker = () => {

    const setThemeColor = (color) => {
        document.documentElement.style.setProperty('--header-background-color', color)
    }

    const setTextColor = (color) => {
        document.documentElement.style.setProperty('--header-text-color', color)
    }

    const [selectedTheme, setSelectedTheme] = useState("#BFD7F2");
    const [selectedTextColor, setSelectedTextColor] = useState("#2B313D");


    const handleThemeChange = (e) => {
        setSelectedTheme(e.target.value);
        setThemeColor(e.target.value);
    }

    const handleTextColor = (e) => {
        setSelectedTextColor(e.target.value);
        setTextColor(e.target.value);
    }

    return (
        <div className="color-picker">

            <h2>Customize</h2>
            <div className="text-controls">
                <span>Text color</span>
                <input type="color"
                       value={selectedTextColor}
                       onChange={handleTextColor}
                       className="color-picker"
                />
            </div>


            <div className="theme-controls">
                <span>Theme color</span>
                <input type="color"
                       value={selectedTheme}
                       onChange={handleThemeChange}
                       className="color-picker"
                />
            </div>
        </div>
    )
}
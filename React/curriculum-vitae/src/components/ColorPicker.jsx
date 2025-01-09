
import '../styles/ColorPicker.css'



export const ColorPicker = () => {

    const [selectedColor, setSelectedColor] = "ffffff";

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    }

    return (
        <div className="color-picker">
            <input type="color"
                   value={selectedColor}
                   onChange={handleColorChange}
                   className="color-picker"
            />
        </div>
    )
}
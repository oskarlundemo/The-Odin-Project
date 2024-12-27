

 export function Greeting () {
    return <div className = "Oskar">
        <h1>Oskar</h1>
        <svg>
            <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2"/>
        </svg>
        <form>
            <input type="text"/>
        </form>
    </div>
 }


 export function Animals () {
    const animals = ['lion', 'monkey', 'dog'];

    return <ul>
        {animals.map((animal, index) => (
            <li key={index}>{animal}</li>
        ))}
    </ul>
 }


 function Button ({color, fontSize, text}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button style={buttonStyle}>
            {text}
        </button>
    )
}

export function App () {
    return (
        <div>
            <Button color="red" fontSize={20} text="Click me"/>
            <Button color="orange" fontSize={20} text="Click me" />
            <Button color="blue" fontSize={20} text="Click me" />
        </div>
    )
}





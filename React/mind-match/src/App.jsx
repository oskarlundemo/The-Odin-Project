import './App.css'
import * as Prototype from "prop-types";

function App({children}) {

  return (
      <div className="app-wrapper">
          {children}
      </div>
  )
}


App.prototypes = {
    children: Prototype.string,
}

export default App

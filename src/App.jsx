import React from "react";
import Routing from "./pages/Routing";

export default function App() {
    return (
        <div className="App">
            <h1>Recipes</h1>
            <Routing />
            fetch('spoontacular.com/api&key="process.env.API_KEY")
        </div>
    )
}
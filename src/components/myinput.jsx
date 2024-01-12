import { useState } from "react";

export default function MyInput() {
    const [texte,setTexte] = useState("")
    return(
        <div>
            <label>
                <input
                 type="text"
                 value={texte}
                 onChange={(e) => setTexte(e.target.value)}
                 />
            </label>
            <p>you typed: <b><i> {texte}</i></b></p>
        </div>
    )
}
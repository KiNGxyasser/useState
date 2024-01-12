import {useState} from "react";

export default function CheckBox(){
    const [liked, setLiked] = useState(false)

    return(
        <div>
            <label>
                <input
                 type="checkbox"
                 checked={liked}
                 onChange={(e) => setLiked(e.target.checked)}
                 />{" "} Do I like banana?
            </label>
            <p>I {liked ? "like" : "did not like"} banana</p>
        </div>
    )
}
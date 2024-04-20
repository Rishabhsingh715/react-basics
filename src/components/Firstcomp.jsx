import { useState } from "react";

function Teddy(){

    let [score, setScore] = useState(10)

    function incScore(){
        setScore(++score)
    }

    return (
        <>
        <h1 onClick={incScore}>I am the first teddy bear</h1>
        <p>Score: {score}</p>
        </>
    )

}
function Teddy2(){

    return (
        <>
        <h1>I am the badaaa teddy bear</h1>
        </>
    )

}

export {Teddy,Teddy2};
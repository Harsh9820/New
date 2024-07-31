import React, { useState } from 'react'

function Preser() {
    const [isFancy, setIsfancy] = useState(false)
    const styl = {
        borderRadius: '25px',
        border: '2px solid',
    }
        if(isFancy){
            return (
            <div>
                <Counter isFancy={true} st={styl} />
                <label>
                    <input type="checkbox" checked={isFancy} onChange={(e) => {setIsfancy(e.target.checked)}} />
                    Use Fancy Styling
                </label>
            </div>
        )}
    return (
        <div>
            <Counter isFancy={false} st={styl} />
            <label>
                <input type="checkbox" checked={isFancy} onChange={(e) => {setIsfancy(e.target.checked)}} />
                    Use Fancy Styling
            </label>
        </div>
    )
}

function Counter({ isFancy, st }){
    const [score, setScore] = useState(0)
    console.log(isFancy);
    return (
        <>
            <div style={(isFancy) ? st : {}}>
                {score}
                <button onClick={(e) => {setScore(score+1)}}>Add Score</button>
            </div>
        </>
    );
}

export default Preser
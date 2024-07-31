import React, { useState } from 'react'

function Reset1() {
  const [hint, setHint] = useState(false)
    return (
        <div>
            { hint &&
                <p>Show hint</p>
            }
            <Form />
            { hint ? (
                <button onClick={() => {
                setHint(false);
                }}>Hide hint</button>
            ) : (
                <button onClick={() => {
                        setHint(true);
                }}>Show hint</button>
            )}
        </div>
    )
}

function Form(){
    const [text, setText] = useState('');
    return(
        <>
            <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
        </>
    )
}

export default Reset1
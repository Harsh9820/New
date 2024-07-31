import React, { useState } from 'react'

function Chat({to}) {
    const [text, setText] = useState('')
  return (
    <div>
        <label>
            Write your post:
            <br /><textarea name="postContent" rows={4} cols={40} placeholder={`Chat to `+to.name}/>
        </label>
        <br />
        <button onClick={(e) => e.target.value}>Send to {to.name}</button>
    </div>
  )
}

export default Chat
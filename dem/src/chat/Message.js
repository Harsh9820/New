import React, { useState } from 'react'
import ContactList from './ContactList'
import Chat from './Chat'

const contacts = [
    { id: 0, name: 'Harsh', email: 'hrshkmar2014@gmail.com' },
    { id: 1, name: 'Alice', email: 'cs17harsh98@gmail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
]
function Message() {
    const [to, setTo] = useState(contacts[0])
  return (
    <div>
        <ContactList cont = {contacts} selected={to} onSelect={to => setTo(to)}/>
        <Chat key={to.id} to={to}/>
    </div>
  )
}

export default Message
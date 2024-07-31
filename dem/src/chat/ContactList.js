import React from 'react'

function ContactList({ cont, selected, onSelect }) {
  return (
    <div>
        {cont.map((c) => 
            <li key={c.id} style={{listStyle: 'none'}}>
                <button style={{padding: '15px', width:'100px', height:'50px'}} onClick={() => onSelect(c)} >{c.name}</button>
            </li>
        )}
    </div>
  )
}

export default ContactList
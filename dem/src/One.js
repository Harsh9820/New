import React, { useState } from 'react'

function Panel( {title, children, isActive, onShow} ) {
  
  return (
    <section>
      <h3>{title}</h3>
    {isActive ? (<> 
      <p>{children}</p>
      </>
      ) : (
      <button onClick={onShow}>Show</button>
    )}
    </section>
  )
}

function One() {
  const [active, setActive] = useState(false)
  return (
    <>
      <h3>Lifting State up</h3>
      
      <Panel title="Panel 1" isActive={active} onShow={() => setActive(true)}>
        sdiujhfkshdfk sjh hidshf uisduif hsih jshdy sgd isudhfiushjdiufgsiu hf
      </Panel>
      <Panel title="Panel 2" isActive={!active} onShow={() => setActive(false)}>
        jsdsfksdhf hwkhfksdhf ksdh fkshkd hsk fhisudf ksdf kshdkf sbdkhf skh db
      </Panel>
      </>
    )
}

export default One
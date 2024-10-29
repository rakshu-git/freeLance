import React from 'react'

const Participants = () => {

    const list=['Vinay Kumar','Rakshan','Nishan','Pavithra','Charan','Anusha','Riyanshi','Keerthana','Rishik','Divakar','Nisha','Guru','Shivananda','Sujatha','WildCard - 1','WildCard - 2']
  return (
    <div id="participants" className='list-p' >
        <h1 className='party'>Participants</h1>
        <div className='list-parent' >
       {list.map((ele)=>{
        return <h1 className='list'>{ele}</h1>
       })}
       </div>
    </div>
  )
}

export default Participants
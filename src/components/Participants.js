import React from 'react'

const Participants = () => {

    const list=['Vinay Kumar','Rakshan','Nishan','Pavithra','Charan','Anusha','Riyanshi','Keerthana','Appithu','Rishik','Divakar','Nisha','Guru','Shivananda','Sujatha','Chitresh','Shrinidhi']
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
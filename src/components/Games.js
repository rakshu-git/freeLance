import React from 'react'

const Games = () => {

    let images=["https://global-uploads.webflow.com/5f8b3f92189560cd389cf2b3/643ef739637fcb0f9c5c43c4_indoor-team-building-activities-team-board-games-teamland.com%20(1)-p-3200.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.Qso9TljZ4j8GkP2WQr6xkAHaEo&pid=Api&P=0&h=180",
        "https://www.everythingmom.com/wp-content/uploads/2020/12/Team-Building-Activities-for-Teens-9.jpg",
        "https://tse4.mm.bing.net/th?id=OIP.hzslRfgqyvqvDEVJe2oWsAHaE8&pid=Api&P=0&h=180",
        "https://cdn-images-1.medium.com/max/1200/0*33UnNPeRwkvPQvG5",
        "https://i.pinimg.com/originals/60/c7/f6/60c7f62bca556f000ffb156b235aacfc.jpg",
        "https://i.pinimg.com/originals/d0/70/d7/d070d7ab377bb3dd298f574c53aa8e49.jpg",
        "https://i.ytimg.com/vi/Nystqm6ihFU/maxresdefault.jpg"
    ]
  return (
    <div id="games" className='games2'>
        <h1 className='games1'>Games</h1>
        <div className='games'>
        {images.map((ele)=>{
            return <img src={ele} alt="game" height={200} width={300}/>
        })}
        </div>
       
        
    </div>
  )
}

export default Games
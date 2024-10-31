import React from 'react'

const Places = () => {
    return (
        <div>
 <div className="place-card" id="places" style={{backgroundColor:"#F0F2F5"}}>
            <div className='place-head'>
            <h1 className='pla' >Places To Visit</h1>
            </div>
          
            <div  className='card'>

                <div className='card-box '>
                        <img className='imgRes' src="https://2.bp.blogspot.com/-8XqNNCF-5wI/V0ptdu5tZ6I/AAAAAAAACZ4/_rbbN8zX2cksGjbeZEHeiFW8LQW_KTO6QCLcB/s640/IMG-20151228-00663.jpg" alt="chibbalgudde fish" height="200" width="350" />
                        <div style={{height:"200px"}}>
                        <h2>Chibbalgudde Fish Park</h2>
                        <p>Chibbalgudde is situated on the banks of the famous river Tunga. There is a Srisiddhivinayak temple here. Sanctified by the penance of many sages, this region holds special significance even today.</p>
                        </div>
                </div>

                <div className='card-box'>
                    <img className='imgRes' src="http://2.bp.blogspot.com/_1hVeI0YTvR0/S-LcJyByDVI/AAAAAAAAA1U/24jR-0u0uxo/s1600/kavimane-1.jpg" alt="Kuvempu mane" height="200" width="350" />
                    <h2>Kuppalli Kuvempu Mane</h2>
                    <p>Kavimane is the ancestral house of Kuvempu. Kavimane means House of the poet in the Kannada language. Nestled in the midst of green forests of Malnad, the house presents a scintillating view. </p>
                </div>

                <div className='card-box'>
                    <img className='imgRes'  src="https://tse2.mm.bing.net/th?id=OIP.P_OQAR-9e0SvmnvI98ACkAAAAA&pid=Api&P=0&h=180" alt="hariharapura mata" height="200" width="350" />
                    <h2>Hariharapura Mata</h2>
                    <p>Hariharapura, the holy land, located on the banks of River Tunga is where the Lord Daksha Prajapathi performed his great Yajna (Sacrifice), according to Skanda Purana (Sahyadri Kaanda).</p>
                </div>

            
                <div className='card-box resCard'>
                    <img className='imgRes'  src="https://im.whatshot.in/img/2022/Apr/7-cropped-1650633365.jpg" alt="kundadri hills" height="200" width="350" />
                    <h2>Kundadri Hills</h2>
                    <p>Kundadri is a hill with dense forests in the Western Ghats located in Shimoga District, Karnataka State, India. It is 70 km from Udupi city.</p>
                </div>

                <div className='card-box resCard'>
                    <img className='imgRes'  src="https://jainsattva.com/wp-content/uploads/2024/06/Varanga-Jain-Temple-920x613.jpg" alt="Varanga" height="200" width="350" />
                    <h2>Varanga Jain Temple</h2>
                    <p>Jain temple in karkala district is the oldest temple of Jainism . it is the only clue that there was Jainism people in this place. The surrounding is really beautiful and been to get some photoshoot. Had visited temple some idols were of rock. We can go by ferry also to the temple.</p>
                </div>

                <div className='card-box resCard space '>
                    <img className='imgRes'  src="https://static2.tripoto.com/media/filter/nl/gen/33768/TripDocument/11870778_932433260136121_8560877187230413735_n.jpg" alt="kundadri hills" height="200" width="350" />
                    <h2>Sirimane Falls</h2>
                    <p>Sirimane Falls is a waterfall in the Western Ghats of Karnataka, near Sringeri. It is a popular tourist attraction with an entry fee and a hydraulic power plant nearby</p>
                </div>
            </div>

        </div>
        </div>
       
    )
}

export default Places
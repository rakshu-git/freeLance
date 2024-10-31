import React from 'react';

const Schedule = () => {
    return (
        <div id="schedule" className='schedule'>
            <h1 className='sch'>Schedule</h1>
            <div className='split'>
                <div className='bor1'>
                    <h3>Date :- 1/11/2024</h3>
                    <div  >
                        <p className='sched'>Departure from Mangalore is scheduled for 1:30 PM.</p>
                        <p className='sched'>We will visit Varanga Temple at 4:00 PM.</p>
                        <p className='sched'>Next, we'll head to Agumbe Sunset Point by 5:00 PM.</p>
                        <p className='sched'>Arrival in Teerthalli is expected by 5:45 PM.</p>
                        <p className='sched'>The Tikka party will start at 8:00 PM.</p>
                        <p className='sched'>We'll enjoy games and a campfire from 10:00 PM to 11:30 PM.</p>
                    </div>
                </div>
                <div className='bor bor1'>
                    <h3>Date :- 2/11/2024</h3>
                    <p className='sched'>We will leave early at 6:00 AM after breakfast.</p>
                    <p className='sched'>First stop is Shibalagudde at 7:00 AM.</p>
                    <p className='sched'>Next, we'll visit Kuvempu Mane at 9:00 AM.</p>
                    <p className='sched'>We'll have lunch at Hariharamata.</p>
                    <p className='sched'>After lunch, we'll head to Kundadri Hills at 2:00 PM.</p>
                    <p className='sched'>Finally, we'll visit Sirimane Falls at 4:00 PM and aim to reach home by 9:00 PM.</p>
                </div>
            </div>




        </div>
    );
}

export default Schedule;

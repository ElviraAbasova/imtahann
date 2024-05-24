import React from 'react'

const Events = () => {
  return (
    <section id='events'>
        <div className="container">
        <div className="top">
         <div className='line'></div>
        <h2>Upcoming Events</h2>
        </div>
        <div className="events">
            <div className="event">
                <div className="day">
                    <h3>07</h3>
                    <h4>January</h4>
                </div>
                <div className="center">
                    <h3>Student Festival</h3>
                    <span>Grand Central Park</span>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                </div>
                <div className="img">
                    <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
                </div>
            </div>
            <div className="event">
                <div className="day">
                    <h3>07</h3>
                    <h4>January</h4>
                </div>
                <div className="center">
                    <h3>Open day in the Univesrsity campus</h3>
                    <span>Grand Central Park</span>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                </div>
                <div className="img">
                    <img src="https://preview.colorlib.com/theme/course/images/event_2.jpg" alt="" />
                </div>
            </div>
            <div className="event">
                <div className="day">
                    <h3>07</h3>
                    <h4>January</h4>
                </div>
                <div className="center">
                    <h3>Student Graduation Ceremony</h3>
                    <span>Grand Central Park</span>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                </div>
                <div className="img">
                    <img src="https://preview.colorlib.com/theme/course/images/event_3.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Events
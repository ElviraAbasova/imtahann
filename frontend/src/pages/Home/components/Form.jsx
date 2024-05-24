import React from 'react'

const Form = () => {
  return (
    <section id='form'>
        <div className="left">
            <h3>Register now and get a discount <span>50%</span>  discount until 1 January</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
            <button>REGISTER NOW</button>
        </div>
        <div className="right">
            <h3>Search for your course</h3>
           <form action="">
            <input type="text" placeholder='Course Name'/>
            <input type="text" placeholder='Category'/>
            <input type="text" placeholder='Degree'/>
            <button type='submit'>
                SEARCH COURSE
            </button>
           </form>
        </div>
    </section>
  )
}

export default Form
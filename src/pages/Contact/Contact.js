import React from 'react'
import 'bulma/css/bulma.min.css';

const Contact = () => {
  return (
    <div>

      <div className='container'>
        <div className='block'>
          <h1>Reach out via Email below or copy my email</h1>
          <h2>MayaJoyce Thayne</h2>
          <h2>m.j.thayne@gmail.com</h2>
        </div>
        <div className='column'>

          <form>
            <label>Name:</label>
            <input type="text" required />
            <label>Email:</label>
            <input type="email" required />
        


          <div class='column is-full'>
            <div class="field-body">


              <label> Message:</label>
              <input class="input" type="name" placeholder="Whats up?" required/>
            </div>
          </div>
          <button>Submit</button>
          </form>
        </div>

      </div >
    </div>
  )
}

export default Contact
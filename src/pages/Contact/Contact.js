import React from 'react'
import 'bulma/css/bulma.min.css';

const Contact = () => {
  return (
    <div class='container'>
      <div class='columns'>
        <div class='column is-half'>
          name
        </div>
        <div class='column is-half'>
          email

        </div>
      </div>
      <div class='column is-full'>
      <div class="field-body">
            <div class="field">
              <p class="control"> Add A Message:
                <input class="input" type="name" placeholder="Whats up?" />
              </p>
            </div>
          </div>
      </div>


      {/* <div>
        <h1> Get in touch with me! </h1> */}

        {/* <div class= 'block'>
    <textarea class="box textarea" placeholder="Name Here"></textarea> */}
{/* 
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Name:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="name" placeholder="Name Here" />
              </p>
            </div>
          </div>
          <div class="field-label is-normal">
            <label class="label">Email:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="email" placeholder="Email Address Here" />
              </p>
            </div>
          </div>

        </div>
        <div class='field is-horizontal'>
          <div class="field-label is-normal">
            <label class="label">Message:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="name" placeholder="Whats up?" />
              </p>
            </div>
          </div>
        </div> */}
      </div>
      )
}

      export default Contact
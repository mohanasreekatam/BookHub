import React from 'react'

const Blog = () => {
  return (
    <div>
      <section class="contact" id="contact">
        <br></br>
        <br></br>
        <br></br>
      <h2 class="heading">Contact <span>Me!</span></h2>
      <form action="https://formspree.io/f/xdoqygve" method="POST">
        <div class="input-box">
          <div class="input-field">
            <input name="Name" type="text" placeholder="Full name" required />
            <span class="focus"></span>
          </div>
          <div class="input-field">
            <input
              type="text"
              name="Email"
              placeholder="E-mail Address"
              required
            />
            <span class="focus"></span>
          </div>
        </div>
        <div class="input-box">
          <div class="input-field">
            <input
              type="number"
              name="Number"
              placeholder="Mobile Number"
              required
            />
            <span class="focus"></span>
          </div>
          <div class="input-field">
            <input
              type="text"
              name="Subject"
              placeholder="E-mail Subject"
              required
            />
            <span class="focus"></span>
          </div>
        </div>

        <div class="textarea-field">
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <span class="focus"></span>
        </div>
        <div class="btn-box btns">
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
    </section>
    </div>
  )
}

export default Blog
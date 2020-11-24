import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_gfu2i7f', 'template_w75zi9b', e.target, 'user_XDBNSckTJt34nmIchTblj')
      .then((result) => {
        return console.log(result.text)
      }).catch(error => {
        return console.log(error.text)
      })
    e.target.reset()
  }


  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Karishma Patel</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">karishmapatel93@hotmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form onSubmit={sendEmail}>
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" required name="from_name" />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Email" required name="email" />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required name="subject" />
              </div>
              <div className="field textarea">
                <textarea cols="30" rows="10" placeholder="Message.." required name="message"></textarea>
              </div>
              <div className="button">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

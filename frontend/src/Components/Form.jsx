import { useState } from "react";
import contactUs from "../../assets/projets/contactUs.jpg";
import Button from "./Button";

export default function Form() {
  const [isContact, handleswitch] = useState(true);
  const [openIndexes, handleIndexes] = useState([])

  console.log(openIndexes);

  const response = {
    dates: [
      {
        date: '2025-09-30',
        shifts: ['15:00', '17:00', '18:45']
      },
      {
        date: '2025-10-01',
        shifts: ['14:00', '16:00']
      },
    ]
  }
  const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };

  return (
    <section>
      <div className="container">
        <div className="contactBox">
          <p className="title">CONTACT US</p>
          <br />
          <p className="header">Get in touch</p>
          <div className="formBox">
            <form className="form" action="">
              <div className="switch">
                <div className={isContact ? "active" : null}
                  onClick={() => handleswitch(true)}
                >
                  Contact
                </div>
                <div
                  className={!isContact ? "active" : null}
                  onClick={() => handleswitch(false)}
                >
                  Rendez-vous
                </div>
              </div>
              <div className="flname">
                <div className="fnf">
                  <label htmlFor="fname">
                    First Name{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EA3323"
                    >
                      <path d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z" />
                    </svg>{" "}
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Your First Name"
                    required
                  />
                </div>
                <div className="fnl">
                  <label htmlFor="lname">
                    Last Name{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EA3323"
                    >
                      <path d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z" />
                    </svg>
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Your First Name"
                    required
                  />
                  <span></span>
                </div>
              </div>

              <div className="companyTel">
                <div className="company">
                  <label htmlFor="company">Company Name </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Your First Name"
                  />
                </div>

                <div className="telephone">
                  <label htmlFor="tel">Phone Number </label>
                  <input
                    type="text"
                    name="tel"
                    id="tel"
                    placeholder="Your First Name"
                  />
                </div>
              </div>

              <label className="email" htmlFor="email">
                Email Address{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z" />
                </svg>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                required
              />
              {isContact ? (
                <>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="70"
                    rows="15"
                    placeholder="How can we help you?"
                  ></textarea>
                </>
              ) : (
                <div className="reservation ">
                  <p>Prenez votre rendez-vous en ligne</p>
                  {response.dates.map((value, index) => (
                    <div className="reservation_box" key={index} >
                      <div
                        className="date"
                        onClick={() => {
                          if (openIndexes.includes(index)) {
                            const newOpenIndexes = openIndexes.filter(i => i !== index)
                            handleIndexes(newOpenIndexes)
                          } else {
                            const newOpenIndexes = openIndexes
                            newOpenIndexes.push(index)
                            handleIndexes(newOpenIndexes)
                          }
                        }
                        }
                      >
                        {new Date(value.date).toLocaleDateString("fr-FR", options)}
                        {openIndexes.includes(index) ? (
                          <span className="fleche-up">ᐱ</span>
                        ) : (
                          <span className="fleche-down">ᐯ</span>
                        )}
                      </div>
                      {openIndexes.includes(index) && (
                        <div className="hour">
                          {value.shifts.map((shift, i) => (
                            <span key={i}>{shift}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <Button extraClass="fbtn" title="Send A Message" />
            </form>
            <img src={contactUs} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

{/* <div className="reservation ">
                  <p>Prenez votre rendez-vous en ligne</p>
                  {response.dates.map((value, index) => (
                    <div className="reservation_box">
                      <div  key={index} className="date" onClick={() => isOpen ? handleAccordion(false) : handleAccordion(true)}>
                        {new Date(value.date).toLocaleDateString("fr-FR", options)}
                        {isOpen ?
                          <span className="fleche-down" >ᐯ</span> :
                          <span className="fleche-up">ᐱ</span>}
                      </div>
                      {isOpen && (
                        <div className="hour">
                          {value.shifts.map((shift, i) => (
                            <span key= {i} > {shift} </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div> */}

import React, { useState } from "react";
import { Link } from 'react-router-dom'
const Contact = () => {

  return (
    <>
      <div className="container  text-center">
        <p className="contact">Contact me</p>
        <div >
            <p>Contact me on Whatsapp</p>
          </div>
          <div>
            <p className="fw-bold">03154416919</p>
          </div>
          OR
          <div><label className="fw-bolder text-success">Email me</label></div>
          <div>
          <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">shahussainbadshah786@gmail.com</Link>
          </div>
      </div>
    </>
  );
};

export default Contact;

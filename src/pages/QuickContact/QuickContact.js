import React, { useState } from "react";
import { toast } from "react-toastify";
import { $host } from "../../http";

function QuickContact() {
  const [backCallInput, setBackCallInput] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const successSubmited = () => toast.success("Callback sent successfully!");

  const handleInput = (e) => {
    setBackCallInput({ ...backCallInput, [e.target.name]: e.target.value });
  };

  const submitBackCall = async (e) => {
    e.preventDefault();

    const data = {
      name: backCallInput.name,
      phone: backCallInput.phone,
      email: backCallInput.email,
      description: backCallInput.description,
    };

    $host
      .post(`en/api/backcall`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBackCallInput({
          name: "",
          phone: "",
          email: "",
          description: "",
        });

        successSubmited();
      });
  };

  return (
    <div className="pageDetail__contact">
      <div className="pageDetail__contact--title">QUICK CONTACT</div>
      <div className="pageDetail__contact--form">
        <p>
          <input
            type={"text"}
            placeholder="First name"
            onChange={handleInput}
            name="name"
            value={backCallInput.name}
          />
        </p>
        <p>
          <input
            type={"text"}
            placeholder="Phone number"
            onChange={handleInput}
            name="phone"
            value={backCallInput.phone}
          />
        </p>
        <p>
          <input
            type={"text"}
            placeholder="Email Address"
            onChange={handleInput}
            name="email"
            value={backCallInput.email}
          />
        </p>
        <p>
          <textarea
            type={"text"}
            placeholder="Message"
            onChange={handleInput}
            name="description"
            value={backCallInput.description}
          />
        </p>

        <div className="pageDetail__contact--btn">
          <button onClick={(e) => submitBackCall(e)}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default QuickContact;

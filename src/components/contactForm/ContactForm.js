import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form>
      <label>
        Name
        <input
          name="name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Phone number
        <input
          name="phone"
          value={phone}
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Email address
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

import React, { Component } from "react";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form name="contact" method="POST" data-netlify="true" onSubmit={this.handleSubmit}>

        <div className="mb-6 sm:flex sm:flex-grow">
          <label htmlFor="name" className="w-1/4">Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="sm:ml-6 p-2 w-full sm:flex-grow border-gray-400 border rounded-md"
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-6 sm:flex sm:flex-grow">
          <label htmlFor="email" className="w-1/4">Your Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className="sm:ml-6 p-2 w-full sm:flex-grow border-gray-400 border rounded-md"
            onChange={this.handleChange}
          />
        </div>
        <div className="sm:flex mb-4 md:mb-6">
          <label htmlFor="message" className="w-1/4">Message: </label>
          <textarea
            name="message"
            id="message"
            className="w-full sm:ml-6 sm:flex-grow border-gray-400 border rounded-md"
            rows="6"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-yellow-400"
          >Send</button>
        </div>
        <input type="hidden" name="form-name" value="contact" />
      </form>
    );
  }
}

export default ContactForm;
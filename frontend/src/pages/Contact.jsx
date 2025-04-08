import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formResponse, setFormResponse] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormResponse({
      type: "success",
      message:
        "Thank you for your message! I'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    document
      .getElementById("form-response")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg mb-4">
            Have a question or want to discuss a potential project? Feel free to
            reach out using the form below or through any of my social media
            channels.
          </p>
        </div>
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
              <div className="flex flex-col gap-2">
                <a
                  href="/projects"
                  className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 text-center transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="/services"
                  className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 text-center transition-colors"
                >
                  Services & Pricing
                </a>
                <a
                  href="/research"
                  className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 text-center transition-colors"
                >
                  Research & Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-4">Contact Form</h5>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="message"
                  rows="5"
                  placeholder="Your message..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
            <div
              id="form-response"
              className="mt-4"
              style={{ display: formResponse ? "block" : "none" }}
            >
              {formResponse && (
                <div
                  className={`p-4 ${
                    formResponse.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  } rounded-md`}
                >
                  <i className="bi bi-check-circle-fill mr-2"></i>
                  {formResponse.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-4">
                Contact Information
              </h5>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="bi bi-envelope mr-2"></i>
                  <a
                    href="mailto:contact@example.com"
                    className="text-blue-500 hover:underline"
                  >
                    contact@example.com
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-geo-alt mr-2"></i>
                  UK
                </li>
              </ul>
              <h5 className="text-xl font-semibold mt-6 mb-3">
                Connect on Social Media
              </h5>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#"
                  className="px-3 py-1.5 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100 flex items-center transition-colors"
                >
                  <i className="bi bi-github mr-1"></i> GitHub
                </a>
                <a
                  href="#"
                  className="px-3 py-1.5 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 flex items-center transition-colors"
                >
                  <i className="bi bi-linkedin mr-1"></i> LinkedIn
                </a>
                <a
                  href="#"
                  className="px-3 py-1.5 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100 flex items-center transition-colors"
                >
                  <i className="bi bi-twitter mr-1"></i> X
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-3">Availability</h5>
              <p className="text-gray-700 mb-3">
                I'm currently available for freelance work and consulting. My
                typical response time is within 24 hours.
              </p>
              <p className="text-gray-700">
                For urgent inquiries, please call the phone number listed above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

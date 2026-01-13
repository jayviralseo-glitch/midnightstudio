import React, { useEffect, useRef, useState } from "react";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      
      // Append all selected files
      selectedFiles.forEach((file) => {
        formDataToSend.append('images', file);
      });

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedFiles([]);
        // Reset file input
        const fileInput = document.getElementById('fileUpload');
        if (fileInput) fileInput.value = '';
        setTimeout(() => setSubmitStatus(""), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(https://ebny.co.za/wp-content/uploads/2024/03/captown-3.png)"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-16 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Heading */}
          <div className={`flex flex-col justify-center ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-wide">
                CONTACT US
              </h2>
              <div className="w-16 h-1 bg-[#a855f7]"></div>
            </div>
            <p className="text-white text-base lg:text-lg leading-relaxed">
              If you have any questions or if you would like to start your webcam modelling journey with us, write to us and we will get back to you.
            </p>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-xs mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-transparent border border-white/50 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#a855f7] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-xs mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-transparent border border-white/50 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#a855f7] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white text-xs mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-transparent border border-white/50 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#a855f7] transition-colors"
                  required
                />
              </div>

              {/* Upload Images */}
              <div>
                <label className="block text-white text-xs mb-2">Upload Images (Max 5, JPG/PNG) *</label>
                <div className="border-2 border-dashed border-white/50 bg-transparent py-8 text-center hover:border-[#a855f7] transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/gif"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileUpload"
                    max="5"
                    required
                  />
                  <label htmlFor="fileUpload" className="cursor-pointer block">
                    <div className="text-white text-base font-medium mb-2">
                      {selectedFiles.length > 0 
                        ? `${selectedFiles.length} file(s) selected` 
                        : 'Click to upload images'}
                    </div>
                    {selectedFiles.length === 0 && (
                      <div className="text-white/60 text-xs">
                        Drag and drop or click to browse
                      </div>
                    )}
                  </label>
                </div>
                {selectedFiles.length > 0 && (
                  <div className="mt-3 space-y-1">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="text-xs text-white/80 flex items-center">
                        <span className="mr-2">✓</span>
                        <span className="truncate">{file.name}</span>
                        <span className="ml-auto text-white/60 ml-2">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-xs mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-3 py-2.5 bg-transparent border border-white/50 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#a855f7] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#a855f7] hover:bg-[#8b5cf6] text-white font-semibold text-xs px-8 py-2.5 transition-colors duration-300 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm mt-2">Thank you! Your message has been sent successfully.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail } from "lucide-react";
import BrushStroke from "../components/HomePage/BrushStroke";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const children = sectionRef.current.children;
    if (!children || children.length === 0) return;

    gsap.fromTo(
      children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.17,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white overflow-hidden font-ssBookD">
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative flex flex-col justify-center items-center text-center min-h-[70vh] bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1047966/pexels-photo-1047966.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-3xl drop-shadow-xl">
          <span className="inline-block mb-5 px-6 py-2 font-semibold rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-green-300 text-sm tracking-wider shadow-lg">
            Contact Oak7
          </span>
          <h1 className="text-4xl md:text-6xl font-ssBD mb-5">
            Let’s Plan Your <span className="text-green-400">Next Journey</span>
          </h1>
          <p className="text-lg md:text-xl font-ssLB text-gray-100 mb-4">
            We are always happy to assist you in planning your next journey to the Himalayas.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section
        ref={sectionRef}
        className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative"
      >
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-green-100">
          <div className="mb-12 relative">
            <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-2 z-10">
              Get in Touch
            </h2>
          </div>

          <p className="text-gray-700 font-ssLB text-base leading-relaxed mb-5">
            Whether you are looking for Char Dham Yatra packages, trekking adventures,
            or customized travel experiences, our team is ready to guide you and
            provide the best travel solutions.
          </p>

          <p className="text-gray-700 font-ssLB text-base leading-relaxed mb-8">
            Feel free to reach out to us for bookings, travel inquiries, partnership
            opportunities, or any assistance regarding your trip. We aim to respond
            quickly and help make your travel experience smooth and memorable.
          </p>

          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <span className="inline-block font-bold text-green rounded-full bg-green-100 p-2 mt-1">
                <Phone size={20} />
              </span>
              <div>
                <p className="font-ssSBH text-gray-800 text-base mb-1">Phone / WhatsApp</p>
                <p className="font-ssLB text-gray-700 text-base">+91 92596 00261</p>
                <p className="font-ssLB text-gray-700 text-base">+91 7817879770</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="inline-block font-bold text-green rounded-full bg-green-100 p-2 mt-1">
                <Mail size={20} />
              </span>
              <div>
                <p className="font-ssSBH text-gray-800 text-base mb-1">Email</p>
                <p className="font-ssLB text-gray-700 text-base">hotel7oaks7@gmail.com</p>
                <p className="font-ssLB text-gray-700 text-base">7oakstandt@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="inline-block font-bold text-green rounded-full bg-green-100 p-2 mt-1">
                <MapPin size={20} />
              </span>
              <div>
                <p className="font-ssSBH text-gray-800 text-base mb-1">Website & Socials</p>
                <p className="font-ssLB text-gray-700 text-base">7Oaks.in</p>
                <p className="font-ssLB text-gray-700 text-base">
                  Instagram / Facebook / Pinterest: 7Oaks.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gradient-to-br from-green-50 to-white/90 p-10 rounded-2xl shadow-lg border border-green-100">
          <h3 className="text-2xl font-ssSBH text-green-700 mb-7 text-left">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 font-ssLB">
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-bold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-2 font-bold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-2 font-bold">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg text-base active:scale-95 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message ✈️"}
            </button>
          </form>
        </div>
      </section>

      {/* ---------- MAP / CTA ---------- */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 text-center">
        <div className="inline-block mb-8">
          <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-2 z-10">
            Visit Our Office
          </h2>
          <BrushStroke color="#16a34a" width="120" />
        </div>
        <p className="text-gray-600 font-ssLB mb-8 max-w-2xl mx-auto">
          Drop by for a cup of tea in Rishikesh—let’s plan your adventure together!
        </p>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-green-100 p-4 md:p-0">
          <iframe
            title="Oak7 Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.892631773125!2d78.3237720150928!3d30.121962181861237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390915fe146d1a1d%3A0xa7dc2bb3c61b153a!2sRishikesh%2C%20Uttarakhand%20249192!5e0!3m2!1sen!2sin!4v1701256922508!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
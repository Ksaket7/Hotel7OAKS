import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "react-toastify"; // ✅ added

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
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

  // ✅ FORM SUBMIT HANDLER (UPDATED)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    // 🔥 loading toast
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.update(toastId, {
          render: "Message sent successfully 🚀",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        form.reset();
      } else {
        toast.update(toastId, {
          render: "Failed to send message ❌",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.update(toastId, {
        render: "Server error ⚠️",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white overflow-hidden font-ssBookD">
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center items-center text-center min-h-[70vh] bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1047966/pexels-photo-1047966.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-ssBD mb-5">
            Let’s Plan Your{" "}
            <span className="text-green-400">Next Adventure</span>
          </h1>
          <p className="text-lg text-gray-100">
            We’d love to hear from you — let’s craft your perfect Himalayan
            journey.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        ref={sectionRef}
        className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16"
      >
        {/* INFO */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions? Reach out to us anytime.
          </p>

          <div className="space-y-5">
            <p className="flex items-center gap-3">
              <MapPin /> 21, Tapovan, Rishikesh
            </p>
            <p className="flex items-center gap-3">
              <Phone /> +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <Mail /> info@oak7adventures.com
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-green-700 mb-6">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 border rounded-lg"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-full transition-all"
            >
              {loading ? "Sending..." : "Send Message ✈️"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
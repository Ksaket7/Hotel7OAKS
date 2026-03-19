import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const contactItemsRef = useRef([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sectionRef.current?.children?.length) return;

    const children = Array.from(sectionRef.current.children);
    
    gsap.fromTo(
      children,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true
        },
      },
    );

    // Floating animation for form
    if (formRef.current) {
      gsap.to(formRef.current, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 1
      });
    }
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

    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.update(toastId, {
          render: "Message sent successfully! 🎉",
          type: "success",
          isLoading: false,
          autoClose: 4000,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.update(toastId, {
          render: data.message || "Failed to send message.",
          type: "error",
          isLoading: false,
          autoClose: 4000,
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.update(toastId, {
        render: "Something went wrong while sending the message.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  const contactData = [
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      items: ["+91 92596 00261", "+91 7817879770"],
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      items: ["hotel7oaks7@gmail.com", "7oakstandt@gmail.com"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Website & Socials",
      items: ["7Oaks.in", "Instagram/Facebook/Pinterest: @7Oaks.in"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
   <div className="bg-white overflow-hidden font-ssBookD">
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative flex flex-col justify-center items-center text-center min-h-[80vh] bg-cover bg-center px-6"
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

      {/* CONTACT SECTION */}
      <section ref={sectionRef} className="py-32 relative max-w-7xl mx-auto px-6">
        {/* Decorative blobs */}
        <div className="absolute top-24 right-24 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-24 left-24 w-80 h-80 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl -z-10 animate-pulse [animation-delay:1s]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* LEFT: Contact Info - Glass Panel */}
          <div className="space-y-10">
            <div className="group">
              <h2 className="text-4xl lg:text-5xl font-ssBD bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4 pb-2">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>

            <p className="text-gray-700 font-ssLB text-lg leading-relaxed mb-12 max-w-lg opacity-90">
              Whether you're planning Char Dham Yatra, trekking adventures, or customized travel experiences, 
              our experts are ready to craft your perfect Himalayan journey.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactData.map((contact, index) => (
                <div
                  key={index}
                  ref={(el) => (contactItemsRef.current[index] = el)}
                  className="group/contact relative p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 hover:border-emerald-200/60 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 cursor-pointer overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                       style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  />
                  
                  <div className="relative z-10 flex items-start gap-5">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${contact.color} shadow-xl flex-shrink-0 group-hover:scale-110 transition-all duration-500`}>
                      <contact.icon size={26} className="text-white drop-shadow-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-ssSBH text-xl text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                        {contact.title}
                      </p>
                      {contact.items.map((item, i) => (
                        <p key={i} className="font-ssLB text-gray-700 text-base leading-relaxed hover:text-emerald-600 transition-colors">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact Form - Floating Glass */}
          <div ref={formRef} className="relative">
            <div className="relative bg-white/80 backdrop-blur-2xl p-10 lg:p-12 rounded-3xl shadow-2xl border border-emerald-100/50 hover:border-emerald-200/70 transition-all duration-700 overflow-hidden group/form">
              {/* Decorative orb */}
              <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-r from-emerald-200/40 to-green-200/40 rounded-3xl blur-xl -z-10 animate-pulse"></div>
              
              <h3 className="text-3xl lg:text-4xl font-ssSBH bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 bg-clip-text text-transparent mb-10 relative z-10">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-6 py-5 lg:py-6 rounded-2xl border-2 bg-white/60 backdrop-blur-sm border-gray-200/60 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/60 text-lg placeholder-gray-500 font-ssLB transition-all duration-500 hover:border-gray-300 shadow-lg hover:shadow-xl focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-6 py-5 lg:py-6 rounded-2xl border-2 bg-white/60 backdrop-blur-sm border-gray-200/60 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/60 text-lg placeholder-gray-500 font-ssLB transition-all duration-500 hover:border-gray-300 shadow-lg hover:shadow-xl focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Your Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-6 py-5 lg:py-6 rounded-2xl border-2 bg-white/60 backdrop-blur-sm border-gray-200/60 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/60 text-lg placeholder-gray-500 font-ssLB resize-vertical transition-all duration-500 hover:border-gray-300 shadow-lg hover:shadow-xl focus:outline-none"
                    placeholder="Tell us about your dream Himalayan adventure..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full bg-green-600 text-white font-ssBD text-xl py-6 lg:py-7 px-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden font-semibold tracking-wide uppercase disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message 
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent -skew-x-12 -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-1000 opacity-0 group-hover:opacity-100" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable InquiryForm component
 * Props:
 * - itemName (string): name of the trek/hotel/package
 * - itemType (string): type, e.g. "Trek", "Hotel", "Package"
 */
const Form = ({ itemName = "Experience", itemType = "Tour" }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (!formRef.current) return;
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in this ${itemType}: ${itemName}! We'll reach out soon 🚀`);
  };

  return (
    <div
      ref={formRef}
      className="max-w-3xl mx-auto mt-20 px-6 py-10 bg-gray-50 rounded-3xl shadow-sm border border-gray-200"
    >
      <h2 className="text-3xl font-ssBD text-gray-800 mb-6 text-center">
        Interested in this {itemType}?
      </h2>
      <p className="text-gray-600 font-ssBookD text-center mb-10">
        Fill out the form below and our team will contact you with more details
        about your selected {itemType.toLowerCase()}.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 font-ssBookD">
        {/* Item name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {itemType} Name
          </label>
          <input
            type="text"
            value={itemName}
            readOnly
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Your contact number"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message / Questions
          </label>
          <textarea
            rows="4"
            placeholder={`Tell us about your preferred dates, number of people, or questions about this ${itemType.toLowerCase()}...`}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green text-white font-semibold rounded-full hover:bg-greenH transition-all shadow-sm"
          >
            <Send size={18} /> Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

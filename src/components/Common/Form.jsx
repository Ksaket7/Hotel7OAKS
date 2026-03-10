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
      className="max-w-3xl mx-auto mt-20 px-6 py-10 bg-white rounded-3xl shadow-sm border border-gray-200  tracking-wider"
    >
      <h2 className="text-3xl font-ssBD text-gray-800 mb-6 text-center">
        Interested in this {itemType}?
      </h2>
      <p className="text-gray-600 font-ssBookD text-center mb-10">
        Fill out the form below and our team will contact you with more details
        about your selected {itemType.toLowerCase()}.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 font-ssLB">
        
        {/* Item name */}
        <div>
          <label className="block text-xs text-gray-600 mb-2 font-bold">
            {itemType} Name
          </label>
          <input
            type="text"
            value={itemName}
            readOnly
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-600 shadow-sm cursor-not-allowed"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-xs text-gray-600 mb-2 font-bold">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs text-gray-600 mb-2 font-bold">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs text-gray-600 mb-2 font-bold">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Your contact number"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs text-gray-600 mb-2 font-bold">
            Message / Questions
          </label>
          <textarea
            rows="5"
            placeholder={`Tell us about your preferred dates, number of people, or questions about this ${itemType.toLowerCase()}...`}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg text-base active:scale-95 flex items-center justify-center gap-2"
        >
          <Send size={18} /> Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default Form;
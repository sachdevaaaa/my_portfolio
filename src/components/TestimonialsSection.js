// import React, { useState, useEffect } from 'react';

// const TestimonialsSection = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   // Arrays holding the image URLs for each testimonial
//   const laptopImages = [
//     '../images/laptop1.png', // Testimonial 1 - Laptop
//     '../images/laptop2.png', // Testimonial 2 - Laptop
//   ];

//   const phoneImages = [
//     '/path/to/phone-image1.jpg', // Testimonial 1 - Phone
//     '/path/to/phone-image2.jpg', // Testimonial 2 - Phone
//   ];

//   // Automatically switch between testimonials every few seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % laptopImages.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval);
//   }, [laptopImages.length]);

//   return (
//     <section className="flex flex-col items-center py-12 bg-gray-100">
//       <h2 className="text-3xl font-bold mb-8 text-center">My Works</h2>
      
//       {/* Laptop Image */}
//       <div className="w-11/12 md:w-1/2 lg:w-1/3 mb-6">
//         <img
//           src={laptopImages[currentTestimonial]}
//           alt="Laptop Testimonial"
//           className="w-full object-contain"
//         />
//       </div>
      
//       {/* Phone Image */}
//       <div className="w-6/12 md:w-1/3 lg:w-1/4">
//         <img
//           src={phoneImages[currentTestimonial]}
//           alt="Phone Testimonial"
//           className="w-full object-contain"
//         />
//       </div>

//       {/* Navigation dots or arrows (Optional) */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {laptopImages.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentTestimonial(index)}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               index === currentTestimonial ? 'bg-emerald-500' : 'bg-gray-400'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

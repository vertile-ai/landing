"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFusion Inc.",
    content: "Vertile.ai's AI solutions have revolutionized our customer service operations. Their custom LLM implementation has reduced response times by 60% while increasing customer satisfaction scores.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Director of Innovation, GlobalFinance",
    content: "Working with the Vertile.ai team was seamless from start to finish. Their AI strategy consulting helped us identify opportunities we hadn't considered, and the implementation exceeded our expectations.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "VP of Operations, HealthTech Solutions",
    content: "The RAG system developed by Vertile.ai has transformed our knowledge management processes. Our staff can now access accurate information instantly, improving decision-making across the organization.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI solutions have delivered real value for businesses like yours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
"use client";

import { motion } from "framer-motion";
import { Code, Brain, Zap, Users } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
        <span className="text-white text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export function ServicesSection() {
  const services = [
    {
      icon: '🤖',
      title: 'Custom LLM Development',
      description: 'Develop specialized large language models adapted to your industry terminology, data, and specific business needs.',
    },
    {
      icon: '📊',
      title: 'Data Analytics & Integration',
      description: 'Turn your business data into actionable insights with AI-powered analytics and seamless integration with existing systems.',
    },
    {
      icon: '🔍',
      title: 'RAG Systems',
      description: 'Leverage retrieval-augmented generation to enhance AI responses with your proprietary knowledge and documentation.',
    },
    {
      icon: '💬',
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that understand context and provide helpful, accurate responses.',
    },
    {
      icon: '🔄',
      title: 'Process Automation',
      description: 'Streamline your business operations with AI-powered automation solutions that reduce manual work and errors.',
    },
    {
      icon: '🧠',
      title: 'AI Strategy Consulting',
      description: "Develop a comprehensive AI roadmap tailored to your organization's goals, capabilities, and challenges.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 mb-5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-400 font-medium text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            AI Solutions for Enterprise Needs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We offer a comprehensive suite of AI services to transform your business operations and decision-making processes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 
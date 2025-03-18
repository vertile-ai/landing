import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#features", label: "Features" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    title: "AI Agents",
    description: "Custom AI agents for automation and customer service",
    icon: "🤖",
  },
  {
    title: "RAG Solutions",
    description: "Retrieval-Augmented Generation for enhanced search and insights",
    icon: "🔍",
  },
  {
    title: "LLM Fine-tuning",
    description: "Customized large language models for your specific needs",
    icon: "⚙️",
  },
  {
    title: "Private LLM Hosting",
    description: "Secure, on-premises LLM deployment for data privacy",
    icon: "🔒",
  },
  {
    title: "Cloud LLM Hosting",
    description: "Scalable cloud-based LLM solutions for flexibility",
    icon: "☁️",
  },
];

const features = [
  {
    title: "Expert AI Consulting",
    description: "Our team of AI specialists helps you implement the right solutions",
  },
  {
    title: "Scalable Infrastructure",
    description: "Solutions that grow with your business needs",
  },
  {
    title: "Secure & Compliant",
    description: "Enterprise-grade security for your AI deployments",
  },
];

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Vertile.ai</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="md:hidden bg-white shadow-sm"
          >
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-600 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Empower Your Business with AI Solutions
          </motion.h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vertile.ai provides cutting-edge AI consulting and solutions for enterprises.
            Transform your operations with our AI agents, RAG systems, and LLM expertise.
          </p>
          <button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
            asChild
          >
            <a href="#contact">Get Started <ChevronRight size={20} /></a>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Vertile.ai</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Ready to transform your business with AI? Contact us today for a consultation.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-md border border-gray-300"
              rows={4}
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Vertile.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
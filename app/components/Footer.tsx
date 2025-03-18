"use client";

import { Twitter, Linkedin, Github, Facebook } from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" }
  ];

  const footerLinks = [
    {
      title: "Products",
      links: [
        { label: "AI Consulting", href: "#" },
        { label: "Custom LLMs", href: "#" },
        { label: "RAG Systems", href: "#" },
        { label: "AI Agents", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Tutorials", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Privacy Policy", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Vertile.ai</h3>
            <p className="text-gray-400 mb-4">
              Advanced AI solutions for modern businesses. Transform your operations with cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 className="font-medium text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Vertile.ai. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 
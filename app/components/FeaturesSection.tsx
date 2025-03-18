"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  id: string;
  title: string;
  content: {
    heading: string;
    description: string;
    bulletPoints: string[];
  };
}

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs: TabProps[] = [
    {
      id: 'tab1',
      title: 'Custom LLMs',
      content: {
        heading: 'Tailored Language Models',
        description: 'Our custom large language models are fine-tuned to understand your industry terminology, data, and specific use cases.',
        bulletPoints: [
          'Domain-specific training and adaptation',
          'Fine-tuning on proprietary data',
          'Performance optimization for resource efficiency',
          'Continuous learning and improvement'
        ]
      }
    },
    {
      id: 'tab2',
      title: 'RAG Systems',
      content: {
        heading: 'Knowledge-Enhanced AI',
        description: "Retrieval-augmented generation systems connect AI models with your organization's knowledge base for more accurate and contextualized responses.",
        bulletPoints: [
          'Integration with existing documentation and knowledge bases',
          'Real-time retrieval of relevant information',
          'Reduced hallucinations and factual inaccuracies',
          'Transparent source attribution'
        ]
      }
    },
    {
      id: 'tab3',
      title: 'AI Agents',
      content: {
        heading: 'Autonomous Task Execution',
        description: 'Our AI agents can perform complex tasks autonomously, streamlining workflows and reducing manual intervention.',
        bulletPoints: [
          'Task planning and execution capabilities',
          'Tool and API integration for extended functionality',
          'Multi-step reasoning for complex problem-solving',
          'Human-in-the-loop oversight and control'
        ]
      }
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 mb-5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-400 font-medium text-sm">
            Our Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Advanced AI Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore the cutting-edge AI capabilities that set our solutions apart from traditional approaches.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {tabs.map((tab) => (
              <motion.div
                key={tab.id}
                className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeTab === tab.id ? 1 : 0, y: activeTab === tab.id ? 0 : 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{tab.content.heading}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{tab.content.description}</p>
                    <ul className="space-y-3">
                      {tab.content.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">✓</span>
                          <span className="text-gray-600 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-[300px] h-[300px] bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full flex items-center justify-center p-6">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg">
                        <div className="text-8xl">{tab.id === 'tab1' ? '🧠' : tab.id === 'tab2' ? '🔍' : '🤖'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
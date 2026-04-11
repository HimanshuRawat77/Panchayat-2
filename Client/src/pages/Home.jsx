import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Home = () => {
  const features = [
    {
      icon: '🎤',
      title: 'Voice & Text Complaints',
      description: 'Raise issues using voice or text - our smart system understands both'
    },
    {
      icon: '🤖',
      title: 'AI Assistant',
      description: 'Get instant answers about society rules, timings, and facilities'
    },
    {
      icon: '📋',
      title: 'Track Progress',
      description: 'Monitor your complaints with real-time status updates'
    },
    {
      icon: '📘',
      title: 'Digital Rule Book',
      description: 'Access society rules, regulations, and guidelines anytime'
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Stay updated with maintenance alerts and announcements'
    },
    {
      icon: '⚡',
      title: 'Quick Resolution',
      description: 'Fast assignment to electricians, plumbers, and other workers'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] dark:bg-slate-950 selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-200/20 dark:bg-purple-500/10 blur-[150px] rounded-full -z-10 animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-100 dark:border-blue-800 mb-8 inline-block shadow-sm">
              ✨ Making Living Smarter
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight text-slate-900 dark:text-white">
              Your Society, <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Simplified.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Revolutionizing society management with AI-powered voice complaints, 
              live tracking, and seamless communication.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/signup">
                <motion.button 
                  className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 ring-1 ring-blue-400/50 hover:shadow-blue-500/40 transition-all flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <Link to="/login">
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Why Choose Panchayat?</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium max-w-2xl mx-auto">Make society life smoother, faster, and more organized.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-slate-800"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-4 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">How It Works</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium max-w-2xl mx-auto">Simple, fast, and efficient</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your account with house details' },
              { step: '2', title: 'Raise Complaint', desc: 'Use voice or text to report issues' },
              { step: '3', title: 'Track & Resolve', desc: 'Monitor progress until resolution' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-500/20">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */} 

      {/* Footer */}
      <footer className="py-16 px-4 bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🏘️ Panchayat
          </div>
          <div className="text-slate-500 font-medium">© 2026 Panchayat Platform. Built for better living.</div>
          <div className="flex gap-8 font-bold text-slate-700 dark:text-slate-400">
            <a href="#" className="hover:text-blue-600 transition tracking-tight">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition tracking-tight">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition tracking-tight">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
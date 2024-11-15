"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Brain, CheckCircle, Code2, Laptop, MessageSquare, MousePointer2, Users, Mail, ArrowRight, PlayCircle, Target, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const features = [
    { icon: Brain, title: "AI-Powered Analysis", description: "Advanced algorithms assess your interview performance in real-time" },
    { icon: MessageSquare, title: "Natural Conversations", description: "Engage in fluid, context-aware dialogue with our AI interviewer" },
    { icon: CheckCircle, title: "Detailed Feedback", description: "Receive comprehensive feedback on your responses and behavior" },
    { icon: Users, title: "Industry Experts", description: "Questions crafted based on real interviews from top companies" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient" />
      
      {/* Mouse follower */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Header */}
      <header className="relative z-10">
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">MOCK-SPHERE</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <a href="https://mockspheretrainer.vercel.app/">
                <Button variant="outline" className="bg-purple-500 hover:bg-purple-600 text-white border-none">
                  Experience the interview
                </Button>
             </a>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
              <DialogHeader>
                <DialogTitle>How to use</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p className="text-gray-300">
                  please enter the validkey provided by us in the upcoming page.
                </p>
                {/* Add your form components here */}
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative container mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Master Your Interview Skills with AI
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Practice with our AI-powered mock interviewer and get detailed feedback to land your dream job.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-purple-500 hover:bg-purple-600 text-lg px-8 py-6 group">
              Start Training Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 group">
              <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-32 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block p-2 bg-purple-500/20 rounded-lg mb-4">
                <Target className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold">Experience Real Interview Scenarios</h2>
              <p className="text-gray-300">Our AI interviewer adapts to your responses, creating dynamic conversations that mirror real interviews. Practice with industry-specific questions and receive instant feedback.</p>
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span>Smart Adaptation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  <span>Real-time Analysis</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg transform rotate-3"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 bg-gray-800 rounded-lg p-4">
                      <p className="text-sm">Tell me about a challenging project you've worked on.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-end">
                    <div className="flex-1 bg-purple-500/20 rounded-lg p-4">
                      <p className="text-sm">In my last role, I led a team of five developers...</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { value: "98%", label: "Success Rate", gradient: "from-purple-500 to-pink-500" },
              { value: "coming soon ... ", label: "Practice Sessions", gradient: "from-blue-500 to-cyan-500" },
              { value: "coming soon ...", label: "Companies Hiring", gradient: "from-green-500 to-emerald-500" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-center">
                  <h4 className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </h4>
                  <p className="text-gray-400 mt-2 text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2024 MOCK-SPHERE. Created by Rohit (founder - v77)</p>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-purple-500" />
              <a href="mailto:contactrohitmenon@gmail.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                contactrohitmenon@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

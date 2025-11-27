"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Terminal, Timer, Clock } from 'lucide-react';
import { slides } from '../slides-data';

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [slideTime, setSlideTime] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Timer logic
  useEffect(() => {
    // Reset TOTAL timer only if we go back to the start
    if (currentSlide === 0) {
      setElapsedTime(0);
    }
    // Reset SLIDE timer on every slide change
    setSlideTime(0);
  }, [currentSlide]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    // Start timer from the second slide (index 1) and keep running
    if (currentSlide > 0) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
        setSlideTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentSlide]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const slide = slides[currentSlide];

  // Helper to render markdown-like text with bold/italic
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-jfrog-green font-bold">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="italic text-gray-300">{part.slice(1, -1)}</em>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="bg-gray-800 px-1 rounded text-jfrog-green font-mono text-sm">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-[#0b1c2c] text-white overflow-hidden relative font-sans selection:bg-jfrog-green selection:text-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-jfrog-green to-green-600" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-jfrog-green/5 rounded-full blur-3xl -mr-32 -mb-32 pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mt-32 pointer-events-none" />

      {/* Header */}
      <header className="absolute top-6 left-8 right-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <Terminal className="w-8 h-8 text-jfrog-green" />
          <span className="text-2xl font-bold tracking-tight">JFrog</span>
        </div>
        <div className="flex items-center gap-6">
          {currentSlide > 0 && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Clock size={16} />
                <span className="text-sm">Total: <span className="text-white">{formatTime(elapsedTime)}</span></span>
              </div>
              <div className="flex items-center gap-2 text-jfrog-green font-mono bg-jfrog-green/10 px-3 py-1 rounded-full border border-jfrog-green/20">
                <Timer size={16} />
                <span className="text-sm">Slide: <span className="text-white">{formatTime(slideTime)}</span></span>
              </div>
            </div>
          )}
          <div className="text-gray-500 text-sm font-mono">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen px-16 relative z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full max-w-5xl"
          >
            {/* Title Slide Layout */}
            {currentSlide === 0 ? (
              <div className="text-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  <div className="w-24 h-2 bg-jfrog-green mx-auto rounded-full mb-8" />
                  <h2 className="text-3xl text-gray-300 font-light">
                    {slide.subtitle}
                  </h2>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-16"
                >
                  <p className="text-jfrog-green font-mono text-lg">Press space to start</p>
                </motion.div>
              </div>
            ) : (
              /* Content Slide Layout */
              <div className="space-y-8 pl-8 border-l-4 border-jfrog-green/30">
                <div>
                  <h2 className="text-5xl font-bold mb-2 text-white">{slide.title}</h2>
                  {slide.subtitle && (
                    <h3 className="text-2xl text-jfrog-green font-medium mb-8">{slide.subtitle}</h3>
                  )}
                </div>

                <div className="space-y-6 text-xl text-gray-200 leading-relaxed">
                  {slide.content?.map((block, index) => {
                    if (block.type === 'list') {
                      return (
                        <ul key={index} className="space-y-4">
                          {block.items?.map((item, i) => {
                            const isString = typeof item === 'string';
                            const text = isString ? item : item.text;
                            const subitems = !isString ? item.subitems : null;
                            
                            return (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i + 0.3 }}
                                className="flex flex-col gap-2"
                              >
                                <div className="flex items-start gap-3">
                                  <span className="text-jfrog-green mt-1.5">
                                    <ChevronRight size={20} strokeWidth={3} />
                                  </span>
                                  <span>{renderText(text)}</span>
                                </div>
                                {subitems && subitems.length > 0 && (
                                  <ul className="ml-9 mt-2 space-y-2 border-l border-gray-700 pl-4">
                                    {subitems.map((sub, j) => (
                                      <li key={j} className="text-gray-400 text-lg">
                                        {renderText(sub)}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </motion.li>
                            );
                          })}
                        </ul>
                      );
                    }
                    if (block.type === 'text') {
                      return (
                        <motion.p 
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {block.text && renderText(block.text)}
                        </motion.p>
                      );
                    }
                    if (block.type === 'quote') {
                      return (
                        <motion.blockquote 
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                          className="border-l-4 border-jfrog-green pl-6 py-4 my-8 bg-white/5 rounded-r-lg italic text-2xl text-gray-100"
                        >
                          {block.text && renderText(block.text)}
                        </motion.blockquote>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-20">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full bg-jfrog-green hover:bg-green-500 text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-900/20"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

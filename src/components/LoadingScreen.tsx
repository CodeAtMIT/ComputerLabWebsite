import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Computer } from 'lucide-react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 20;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 flex items-center justify-center"
    >
      <div className="text-center text-white px-4 max-w-lg">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Icon */}
          <div className="w-24 h-24 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
            <Computer className="h-12 w-12 text-white" strokeWidth={1.5} />
          </div>
          
          {/* Text Content */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Maharashtra Institute Of Technology
          </h1>
          <p className="text-lg text-blue-100 mb-2">
            Computer Lab
          </p>
          <p className="text-sm text-blue-200/80 italic">
            Loading an amazing experience...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          {/* Progress Container */}
          <div className="relative">
            {/* Background Track */}
            <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden border border-white/10">
              {/* Progress Fill */}
              <motion.div
                className="h-full bg-white rounded-full shadow-lg"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            
            {/* Progress Percentage */}
            <div className="mt-3 text-sm text-white/70">
              {progress}%
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

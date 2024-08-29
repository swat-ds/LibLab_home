import './App.css';
import Line from './components/Line.jsx';
import { motion } from 'framer-motion';

function App() {
  const fadeInAnimation = {
    opacity: [0, 1],
    x: [50, 0]
  };

  const transitionSettings = {
    duration: 1,
    ease: 'easeOut'
  };

  const hoverScaleSettings = {
    scale: 1.01,  // Slightly increased scale
    transition: { duration: 0.2, ease: 'easeInOut' }  // Smoother scaling transition
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-[#1A0000] overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="flex justify-start h-[15vh] md:h-[20vh] w-screen pl-4 md:pl-12"
        animate={fadeInAnimation}
        transition={{ ...transitionSettings, delay: 0 }}
      >
        <h1 className="text-[#A11833] content-center text-xl sm:text-2xl md:text-4xl lg:text-5xl whitespace-nowrap">
          <span className="font-semibold">LIBLAB </span>
          <span className="font-light">SWARTHMORE</span>
        </h1>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12"
        animate={fadeInAnimation}
        transition={{ ...transitionSettings, delay: 0.25 }}
      >
        <motion.a
          href='https://swat-ds.github.io/liblab/'
          target="_blank"
          rel="noopener noreferrer"
          whileHover={hoverScaleSettings}  // Smoother scaling on hover
        >
          <motion.h1 className="content-start text-4xl sm:text-5xl md:text-7xl lg:text-8xl whitespace-nowrap">
            <span className="font-medium">LibLab</span>
            <span className="font-extrabold">Fellowship</span>
            <span className="font-medium">syllabus</span>
          </motion.h1>
        </motion.a>
        <Line width="40%" thickness="2px" color="#A11833" />
      </motion.div>

      {/* Sign-Up Form */}
      <motion.div
        className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12"
        animate={fadeInAnimation}
        transition={{ ...transitionSettings, delay: 0.5 }}
      >
        <motion.a
          href='https://docs.google.com/forms/d/e/1FAIpQLSe8ULGOedRW8gNlLjGMoWDBoDe6DhL6kC665gcZLhUG7MB2ug/viewform?usp=sf_link'
          target="_blank"
          rel="noopener noreferrer"
          whileHover={hoverScaleSettings}  // Smoother scaling on hover
        >
          <motion.h1 className="content-start text-4xl sm:text-5xl md:text-7xl lg:text-8xl whitespace-nowrap">
            sign-up form
          </motion.h1>
        </motion.a>
        <Line width="40%" thickness="2px" color="#A11833" />
      </motion.div>

      {/* Immersive Realities */}
      <motion.div
        className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12"
        animate={fadeInAnimation}
        transition={{ ...transitionSettings, delay: 0.75 }}
      >
        <motion.a
          href='https://swat-ds.github.io/LibLabMain/'
          target="_blank"
          rel="noopener noreferrer"
          whileHover={hoverScaleSettings}  // Smoother scaling on hover
        >
          <motion.h1 className="content-start text-4xl sm:text-5xl md:text-7xl lg:text-8xl whitespace-nowrap">
            immersive realities
          </motion.h1>
        </motion.a>
        <Line width="40%" thickness="2px" color="#A11833" />
      </motion.div>

      {/* Docs Section */}
      <motion.div
        className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12"
        animate={fadeInAnimation}
        transition={{ ...transitionSettings, delay: 1 }}
      >
        <motion.a
          href='https://swat-ds.github.io/docsLibLab/'
          target="_blank"
          rel="noopener noreferrer"
          whileHover={hoverScaleSettings}  // Smoother scaling on hover
        >
          <motion.h1 className="content-start text-4xl sm:text-5xl md:text-7xl lg:text-8xl whitespace-nowrap">
            docs.
          </motion.h1>
        </motion.a>
        <Line width="40%" thickness="2px" color="#A11833" />
      </motion.div>

      {/* GitHub Section */}
      <motion.div
        className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12"
        animate={fadeInAnimation}
        transition={{ ...transitionSettings, delay: 1.25 }}
      >
        <motion.h1
          className="content-start text-4xl sm:text-5xl md:text-7xl lg:text-8xl whitespace-nowrap"
          whileHover={hoverScaleSettings}  // Smoother scaling on hover
        >
          github.
        </motion.h1>
        <Line width="40%" thickness="2px" color="#A11833" />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        className="flex flex-col justify-end items-end h-[15vh] md:h-[20vh] w-screen pr-4 md:pr-12 pb-3"
        animate={fadeInAnimation}
        transition={{ ...transitionSettings, delay: 1.5 }}
      >
        <a href='https://creativecommons.org/licenses/by-nc/4.0/' target="_blank" rel="noopener noreferrer">
          <h6 className="text-xs sm:text-sm md:text-base text-[#A11833]">ALL RIGHTS RESERVED © LIBLAB 2024</h6>
        </a>
      </motion.div>
    </div>
  );
}

export default App;
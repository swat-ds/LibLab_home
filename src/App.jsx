import './App.css'
import Line from './components/Line.jsx'

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#1A0000] overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-start h-[15vh] md:h-[20vh] w-screen pl-4 md:pl-12">
        <h1 className="text-[#A11833] content-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="font-semibold">LIBLAB </span>
          <span className="font-light">SWARTHMORE</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12">
        <a href='https://swat-ds.github.io/liblab/' target="_blank" rel="noopener noreferrer">
          <h1 className="content-start text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
            <span className="font-medium">ds@</span>
            <span className="font-extrabold">SWAT </span>
            <span className="font-medium">syllabus</span>
          </h1>
        </a>
        <Line width="40%" thickness="2px" color="#A11833" />
      </div>

      {/* Sign-Up Form */}
      <div className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12">
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe8ULGOedRW8gNlLjGMoWDBoDe6DhL6kC665gcZLhUG7MB2ug/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer">
          <h1 className="content-start text-4xl sm:text-6xl md:text-8xl lg:text-9xl">sign-up form</h1>
        </a>
        <Line width="40%" thickness="2px" color="#A11833" />
      </div>

      {/* Immersive Realities */}
      <div className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12">
        <a href='https://ahmad-fayyaz.github.io/LibLabMain/' target="_blank" rel="noopener noreferrer">
          <h1 className="content-start text-4xl sm:text-6xl md:text-8xl lg:text-9xl">immersive realities</h1>
        </a>
        <Line width="40%" thickness="2px" color="#A11833" />
      </div>

      {/* Docs Section */}
      <div className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12">
        <a href='https://swat-ds.github.io/docsLibLab/' target="_blank" rel="noopener noreferrer">
          <h1 className="content-start text-4xl sm:text-6xl md:text-8xl lg:text-9xl">docs.</h1>
        </a>
        <Line width="40%" thickness="2px" color="#A11833" />
      </div>

      {/* GitHub Section */}
      <div className="flex flex-col justify-end h-[10vh] md:h-[12vh] w-screen pl-4 md:pl-12">
        <h1 className="content-start text-4xl sm:text-6xl md:text-8xl lg:text-9xl">github.</h1>
        <Line width="40%" thickness="2px" color="#A11833" />
      </div>

      {/* Footer Section */}
      <div className="flex flex-col justify-end items-end h-[15vh] md:h-[20vh] w-screen pr-4 md:pr-12 pb-3">
        <a href='https://creativecommons.org/licenses/by-nc/4.0/' target="_blank" rel="noopener noreferrer">
          <h6 className="text-xs sm:text-sm md:text-base text-[#A11833]">ALL RIGHTS RESERVED © LIBLAB 2024</h6>
        </a>
      </div>
    </div>
  );
}

export default App;
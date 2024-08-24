import './App.css'

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#1A0000] overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-start h-[15vh] w-screen pl-6 md:pl-12">
        <h1 className="text-[#A11833] content-center text-2xl md:text-7xl lg:text-9xl">
          <span className="font-semibold">LIBLAB </span>
          <span className="font-normal">SWARTHMORE</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex justify-start h-[15vh] w-screen pl-6 md:pl-12">
        <a href='https://swat-ds.github.io/liblab/' target="_blank" rel="noopener noreferrer">
          <h1 className="text-2xl md:text-7xl lg:text-9xl">
            <span className="font-medium">ds@</span>
            <span className="font-extrabold">SWAT </span>
            <span className="font-medium">syllabus</span>
          </h1>
        </a>
      </div>
     
      {/* Sign-Up Form */}
      <div className="flex justify-end h-[15vh] w-screen pr-6 md:pr-12">
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe8ULGOedRW8gNlLjGMoWDBoDe6DhL6kC665gcZLhUG7MB2ug/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer">
          <h1 className="content-center text-2xl md:text-7xl lg:text-9xl">↖sign-up form</h1>
        </a>
      </div>

      {/* Immersive Realities */}
      <div className="flex justify-end h-[15vh] w-screen pr-6 md:pr-12">
        <a href='https://ahmad-fayyaz.github.io/LibLabMain/' target="_blank" rel="noopener noreferrer">
          <h1 className="content-center text-2xl md:text-7xl lg:text-9xl">immersive realities</h1>
        </a>
      </div>

      {/* Docs Section */}
      <div className="flex justify-start h-[15vh] w-screen pl-6 md:pl-12">
        <a href='https://swat-ds.github.io/docsLibLab/' target="_blank" rel="noopener noreferrer">
          <h1 className="content-center text-2xl md:text-7xl lg:text-9xl">docs.</h1>
        </a>
      </div>

      {/* GitHub Section */}
      <div className="flex justify-start h-[15vh] w-screen pl-6 md:pl-12">
        <h1 className="content-center text-2xl md:text-7xl lg:text-9xl">github.</h1>
      </div>

      {/* Footer Section */}
      <div className="flex justify-end items-end h-[10vh] w-screen pr-6 md:pr-12 pb-3">
        <a href='https://creativecommons.org/licenses/by-nc/4.0/' target="_blank" rel="noopener noreferrer">
          <h6 className="text-xs sm:text-sm md:text-base text-[#A11833]">ALL RIGHTS RESERVED © LIBLAB 2024</h6>
        </a>
      </div>
    </div>
  );
}

export default App;
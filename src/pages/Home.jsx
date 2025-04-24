const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white flex items-center justify-center overflow-hidden px-4 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 sm:gap-12 max-w-7xl w-full px-4 sm:px-8 lg:px-16 xl:px-24 animate-fade-in">

        {/* Cartoon Avatar */}
        <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden shadow-xl rounded-3xl border-4 border-gray-700 hover:scale-105 transition-transform duration-500">
          <img
            src="/assets/Joshua_animated.png"
            alt="Cartoon avatar of Joshua"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Joshua dos Santos
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xl mx-auto md:mx-0">
            Software Developer met een passie voor het creëren van innovatieve digitale oplossingen.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;

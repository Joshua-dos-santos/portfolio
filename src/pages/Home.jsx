const Home = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center overflow-hidden p-4">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4 text-center">Joshua dos Santos</h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-300 text-center mb-8">
          A Software developer with a passion for creating innovative solutions.
        </p>
        
        {/* Cartoon Avatar Image */}
        <div className="w-72 h-72 overflow-hidden shadow-lg">
          <img
            src="/assets/Joshua_animated.png" // Path to your image file
            alt="Cartoon avatar of Joshua"
            className="object-cover w-full h-full"
          />
        </div>
  
        {/* Call-to-Action */}
        <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow-lg transition-all duration-300">
          Get in Touch
        </button>
      </div>
    );
  };
  
  export default Home;
  
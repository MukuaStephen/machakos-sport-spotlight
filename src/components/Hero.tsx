const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
          alt="Sports"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Machakos University Sports
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Nurturing talent, building champions, creating legends
          </p>
          <button className="bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors">
            Explore Our Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
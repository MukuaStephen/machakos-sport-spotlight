import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Rugby = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Rugby Program</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf" 
              alt="Rugby Team" 
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Our Rugby Program</h2>
              <p className="text-gray-600 mb-4">
                The Machakos University Rugby program is known for its discipline and competitive spirit. 
                Our teams participate in various regional and national tournaments.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Expert coaching staff</li>
                <li>Structured training program</li>
                <li>Regular matches and tournaments</li>
                <li>State-of-the-art facilities</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Training Schedule</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Weekdays</h3>
                <p className="text-gray-600">Tuesday & Thursday: 4:00 PM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Weekends</h3>
                <p className="text-gray-600">Saturday: 8:00 AM - 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rugby;
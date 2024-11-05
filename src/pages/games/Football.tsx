import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Football = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Football Program</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211" 
              alt="Football Team" 
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Our Football Program</h2>
              <p className="text-gray-600 mb-4">
                Our football program is one of the most successful sports programs at Machakos University. 
                We compete in various tournaments and have a strong track record of achievements.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Professional coaching staff</li>
                <li>Regular training sessions</li>
                <li>Competitive matches</li>
                <li>Modern training facilities</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Training Schedule</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Weekdays</h3>
                <p className="text-gray-600">Monday - Friday: 4:00 PM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Weekends</h3>
                <p className="text-gray-600">Saturday: 9:00 AM - 11:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Football;
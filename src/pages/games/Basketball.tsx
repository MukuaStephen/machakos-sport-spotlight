import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Basketball = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Basketball Program</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8" 
              alt="Basketball Team" 
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Our Basketball Program</h2>
              <p className="text-gray-600 mb-4">
                Our basketball program emphasizes teamwork, skill development, and competitive excellence. 
                We offer opportunities for both men's and women's teams.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dedicated coaching team</li>
                <li>Regular practice sessions</li>
                <li>Inter-university competitions</li>
                <li>Indoor basketball court</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Training Schedule</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Weekdays</h3>
                <p className="text-gray-600">Monday & Wednesday: 4:00 PM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Weekends</h3>
                <p className="text-gray-600">Sunday: 2:00 PM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Basketball;
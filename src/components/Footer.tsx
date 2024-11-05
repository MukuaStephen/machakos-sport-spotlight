const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Machakos University</p>
            <p>P.O. Box 136-90100</p>
            <p>Machakos, Kenya</p>
            <p>Email: sports@mksu.ac.ke</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-secondary">About Us</a></li>
              <li><a href="/games" className="hover:text-secondary">Sports Programs</a></li>
              <li><a href="/schedules" className="hover:text-secondary">Training Schedule</a></li>
              <li><a href="/news" className="hover:text-secondary">Latest News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">Facebook</a></li>
              <li><a href="#" className="hover:text-secondary">Twitter</a></li>
              <li><a href="#" className="hover:text-secondary">Instagram</a></li>
              <li><a href="#" className="hover:text-secondary">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Machakos University Sports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
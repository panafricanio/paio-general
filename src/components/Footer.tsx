import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">About PAIO</h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              The Pan African Informatics Olympiad is an international programming competition for high school students across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://2025.panafricanio.com/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition">PAIO 2025 Website</a></li>
              <li><a href="https://2025.panafricanio.com/results" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition">PAIO 2025 Results</a></li>
              <li><Link href="/organization/history" className="text-gray-800 hover:text-black transition">History</Link></li>
              <li><Link href="/regulations" className="text-gray-800 hover:text-black transition">Regulations</Link></li>
              <li><Link href="/calls/hosts" className="text-gray-800 hover:text-black transition">Call for Hosts</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {/* <a href="#" className="text-gray-800 hover:text-black transition">X</a> */}
              {/* <a href="#" target='_blank' className="text-gray-800 hover:text-black transition">Facebook</a> */}
              <a href="https://www.linkedin.com/company/pan-african-informatics-olympiad/about" target='_blank' className="text-gray-800 hover:text-black transition">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          <p>&copy; 2025 Pan African Informatics Olympiad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

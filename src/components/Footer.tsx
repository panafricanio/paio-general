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
          <div className='grid gap-4'>
            <div>
              <h3 className="text-black font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex">
                {/* <a href="#" className="text-gray-800 hover:text-black transition">X</a> */}
                {/* <a href="#" target='_blank' className="text-gray-800 hover:text-black transition">Facebook</a> */}
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="black" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.893v4.577H8.368V7.5h2.577v1.008h.037c.36-.68 1.237-1.395 2.546-1.395 2.717 0 3.22 1.787 3.22 4.114v5.111zM3.823 6.323a1.684 1.684 0 11-.001-3.368 1.684 1.684 0 01.001 3.368zm1.467 9.976H2.356V7.5h2.934v8.799zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                  <a href="https://www.linkedin.com/company/pan-african-informatics-olympiad/about" target='_blank' className="text-gray-800 hover:text-black transition">LinkedIn</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-black font-bold text-lg mb-4">Contact Us</h3>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="black" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a href="mailto:contact@panafricanio.com" className="text-gray-800 hover:text-black transition">contact@panafricanio.com</a>
                </div>
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

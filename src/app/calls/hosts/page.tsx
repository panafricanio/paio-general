import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function CallForHosts() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-black">Call for Hosts</h1>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-bold mb-4 text-black">Host PAIO 2026 & 2027</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We are seeking passionate organizations and institutions to host the Pan African 
                Informatics Olympiad in 2026 and 2027. This is an opportunity to showcase your 
                country and contribute to African tech education.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Why Host PAIO?</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Showcase your country's technological capabilities</li>
                <li>• Build international partnerships in education</li>
                <li>• Inspire local students in STEM fields</li>
                <li>• Contribute to African tech talent development</li>
                <li>• Gain recognition as a leader in tech education</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Host Requirements</h2>
              <div className="bg-gray-50 p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Technical Infrastructure</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Reliable internet connectivity for 500+ participants</li>
                    <li>• Computer labs with modern programming environments</li>
                    <li>• Backup power and technical support systems</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Venue & Accommodation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Competition venue for 500+ participants</li>
                    <li>• Accommodation for international delegations</li>
                    <li>• Meeting rooms for committees and ceremonies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Organizational Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Local organizing committee</li>
                    <li>• Volunteer coordination</li>
                    <li>• Transportation and logistics support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Application Process</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-4">
                  <span className="font-bold text-black">1.</span>
                  <div>
                    <h4 className="font-bold text-black">Submit Expression of Interest</h4>
                    <p className="text-gray-700">Initial application with basic information about your organization</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-bold text-black">2.</span>
                  <div>
                    <h4 className="font-bold text-black">Detailed Proposal</h4>
                    <p className="text-gray-700">Comprehensive hosting plan including budget and logistics</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-bold text-black">3.</span>
                  <div>
                    <h4 className="font-bold text-black">Evaluation & Selection</h4>
                    <p className="text-gray-700">Review by PAIO committees and final selection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-bold mb-4 text-black">Ready to Apply?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Contact us to receive the detailed hosting guidelines and application forms.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
                  Apply for PAIO 2026
                </button>
                <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
                  Apply for PAIO 2027
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
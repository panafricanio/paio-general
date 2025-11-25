import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function CallForHosts() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-black">Call for Hosts</h1>
          
          <div className="space-y-12">
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">Host PAIO 2026 & 2027</h2>
              <p className="text-gray-700 leading-relaxed max-w-3xl">
                We invite qualified organizations to host the Pan African Informatics Olympiad. 
                Host countries must establish an Host Organizing Committee (HOC), Host Scientific 
                Committee (HSC), and Host Technical Committee (HTC) to oversee all operations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8 text-black">Responsibilities of the Host Country and Organisation</h2>
              <div className="space-y-8 text-gray-700">
                
                <div>
                  <h3 className="font-semibold text-lg text-black mb-3">Official Programme</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Host Organisation must create an Official Programme outlining the itinerary for PAIO and 
                    associated events. This includes accommodation arrangements, meals for National Delegations, 
                    and venues for official events. The programme must be disclosed by the official start of PAIO.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-black mb-3">Financial Coverage</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The Host Organisation covers all official expenses for participants, including:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-2">
                    <li>• Accommodation and meals</li>
                    <li>• Transport between official arrival/departure sites and accommodation</li>
                    <li>• Transport between accommodation and official venues</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-black mb-3">Financial Limitations</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The Host Organisation is not liable for any costs outside the Official Programme, including:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-2 mb-4">
                    <li>• Additional days spent in the Host Country beyond official PAIO duration</li>
                    <li>• Travel to and from the Host Country</li>
                    <li>• Travel before official arrival or after official departure</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    All participants are responsible for obtaining full accident, health, and travel insurance if desired.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-black mb-3">Optional Activities and Fees</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The Host Organisation may offer excursions and cultural trips but is under no obligation to 
                    organize specific activities.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Registration, Participation, and Guest Fees may be charged at the Host's discretion. However, 
                    no fees are charged for the inaugural PAIO held in 2025.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-black mb-3">Post-Event Obligations</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    By the end of PAIO, the Host Organisation must:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-2">
                    <li>• Issue attendance certificates for all participants</li>
                    <li>• Issue awarding certificates for medal winners and Honorable Mentions</li>
                    <li>• Post official final results containing scores of medal-winning contestants</li>
                    <li>• Post a list of all participants</li>
                    <li>• Produce a full results list with final scores of all contestants for the International Committee</li>
                    <li>• Hold an Awards Ceremony for medal presentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-4">
              <h3 className="text-xl font-bold mb-4 text-black">Ready to Apply?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl">
                Contact us to receive the detailed hosting guidelines and application forms.
              </p>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://forms.gle/6J4FZbt8g1ZCzFFF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-900 transition inline-block"
                >
                  Apply for PAIO 2026
                </a>
                <a 
                  href="https://forms.gle/6J4FZbt8g1ZCzFFF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-900 transition inline-block"
                >
                  Apply for PAIO 2027
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-700 leading-relaxed">
                For more detailed information about host country and organisation responsibilities, 
                please refer to the{' '}
                <a 
                  href="https://docs.google.com/document/d/11tjRLzlILvj_6STmVJ3wtYcRDZtmwxWLbZ9L37oEUiU/edit?tab=t.0#heading=h.uat7q9ryg2au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-semibold underline hover:text-gray-700 transition"
                >
                  PAIO Regulations Document (Section 8)
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

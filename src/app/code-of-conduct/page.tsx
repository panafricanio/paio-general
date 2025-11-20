import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CodeOfConduct() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Code of Conduct</h1>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">General Principles</h2>
              <p className="leading-relaxed mb-4">
                All participants in the Pan African Informatics Olympiad are expected to maintain the highest standards of integrity, respect, and professionalism throughout their participation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Academic Integrity</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>No plagiarism or copying of code from other sources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>All submitted solutions must be original work by team members</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>No unauthorized collaboration with other teams</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Proper citation of any external resources or algorithms used</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Professional Conduct</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Treat all judges, organizers, and other participants with respect</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Maintain a positive and supportive atmosphere</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Follow all competition rules and instructions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Accept results gracefully, whether winning or not</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Prohibited Conduct</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Sabotage or interference with other teams' work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Dishonest or deceptive behavior</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Harassment or discrimination of any kind</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Use of unauthorized tools or resources during competition</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-800 mt-8">
              <h3 className="font-bold text-gray-900 mb-2">Violations & Consequences</h3>
              <p>
                Violations of this code of conduct may result in disqualification from the competition, revocation of awards, or banning from future PAIO events. Serious violations may be reported to relevant authorities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

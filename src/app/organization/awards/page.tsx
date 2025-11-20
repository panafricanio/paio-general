import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Awards() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Awards</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              PAIO recognizes excellence in programming and computational thinking through various 
              awards and recognition programs.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🥇</span>
                  <h2 className="text-2xl font-bold text-black">Gold Medal</h2>
                </div>
                <p className="text-gray-700 mb-3">
                  Awarded to the top 10% of participants who demonstrate exceptional programming skills.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Certificate of Excellence</li>
                  <li>• Gold Medal</li>
                  <li>• Scholarship opportunities</li>
                  <li>• Recognition at award ceremony</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🥈</span>
                  <h2 className="text-2xl font-bold text-black">Silver Medal</h2>
                </div>
                <p className="text-gray-700 mb-3">
                  Awarded to participants in the next 20% who show outstanding performance.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Certificate of Merit</li>
                  <li>• Silver Medal</li>
                  <li>• Recognition at award ceremony</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🥉</span>
                  <h2 className="text-2xl font-bold text-black">Bronze Medal</h2>
                </div>
                <p className="text-gray-700 mb-3">
                  Awarded to participants in the next 30% who demonstrate solid programming abilities.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Certificate of Achievement</li>
                  <li>• Bronze Medal</li>
                  <li>• Recognition at award ceremony</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-black">Special Awards</h2>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <h3 className="font-bold">Best Team Award</h3>
                    <p>Recognizes the highest-performing team from each country</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Most Improved Participant</h3>
                    <p>Celebrates significant improvement from previous competitions</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Spirit of PAIO Award</h3>
                    <p>Honors participants who embody the values of collaboration and sportsmanship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
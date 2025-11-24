import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Awards() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-gray-900">Awards</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                Gold, silver and bronze medals are awarded to contestants so that approximately 50 percent of all African contestants receive a medal and the ratio of gold to silver to bronze medals is approximately 1:2:3. Additionally, Honorable Mentions are awarded to contestants who placed in the top half on some contest day but did not receive any medal.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Award Boundaries</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Award boundaries for African contestants are determined as follows:
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🥇</span>
                  <h3 className="text-lg font-semibold text-gray-900">Gold Medal</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-11">
                  The score necessary to achieve a gold medal is the largest score such that at least one twelfth of all African contestants receive a gold medal.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🥈</span>
                  <h3 className="text-lg font-semibold text-gray-900">Silver Medal</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-11">
                  The score necessary to achieve a silver medal is the largest score such that at least one quarter of all African contestants receive a gold or a silver medal.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🥉</span>
                  <h3 className="text-lg font-semibold text-gray-900">Bronze Medal</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-11">
                  The score necessary to achieve a bronze medal is the largest score such that at least one half of all African contestants receive a medal.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">✨</span>
                  <h3 className="text-lg font-semibold text-gray-900">Honorable Mention</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-11">
                  For each contest day separately, the score necessary to achieve an Honorable Mention is the largest score achieved by at least one half of African contestants on that day.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-6">Additional Notes</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Disqualified Contestants:</strong> Disqualified African contestants are still counted as contestants for the purpose of determining the award boundaries.
              </p>
              <p>
                <strong>Non-African Contestants:</strong> Non-African contestants, if any, are awarded medals and Honorable Mentions according to the score thresholds determined for African contestants. Note that the scores of non-African contestants are not taken into account when determining the score thresholds.
              </p>
              <p>
                <strong>Host Organisation:</strong> In case an unexpectedly large number of medals needs to be awarded to non-African contestants, the Host Organisation is permitted to award these medals after the official Award Ceremony.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
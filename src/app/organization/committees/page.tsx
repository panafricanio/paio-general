import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Committees() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Committees</h1>
          
          <div className="space-y-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">International Committee (IC)</h2>
              <p className="text-gray-700 mb-4">
                The IC oversees the overall organization and strategic direction of PAIO competitions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Strategic planning and policy development</li>
                <li>• International relations and partnerships</li>
                <li>• Competition standards and quality assurance</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">International Scientific Committee (ISC)</h2>
              <p className="text-gray-700 mb-4">
                The ISC is responsible for the scientific and technical aspects of the competition.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Problem selection and preparation</li>
                <li>• Technical review and validation</li>
                <li>• Judging system oversight</li>
                <li>• Competition format development</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">International Technical Committee (ITC)</h2>
              <p className="text-gray-700 mb-4">
                The ITC manages the technical infrastructure and systems for PAIO competitions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Competition platform development</li>
                <li>• Technical support during competitions</li>
                <li>• System security and reliability</li>
                <li>• Technology standards and requirements</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">Join Our Committees</h2>
              <p className="text-gray-700 mb-4">
                We welcome qualified professionals and educators to join our committees and contribute to PAIO's mission.
              </p>
              <a href="/calls/committees" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Learn More About Joining →
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
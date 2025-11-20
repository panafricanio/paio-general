import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function JoinCommittees() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Join Our Committees</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              PAIO is seeking qualified professionals and educators to join our committees and 
              help shape the future of programming education in Africa.
            </p>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">International Committee (IC)</h2>
                <p className="text-gray-700 mb-4">
                  Join the strategic leadership of PAIO and help guide our continental mission.
                </p>
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">We're looking for:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Educational leaders and administrators</li>
                    <li>• International development professionals</li>
                    <li>• Policy makers in STEM education</li>
                    <li>• Representatives from African institutions</li>
                  </ul>
                </div>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                  Apply for IC
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">International Scientific Committee (ISC)</h2>
                <p className="text-gray-700 mb-4">
                  Shape the academic and scientific direction of PAIO competitions.
                </p>
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">We're looking for:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Computer science professors and researchers</li>
                    <li>• Programming competition experts</li>
                    <li>• Algorithm and data structure specialists</li>
                    <li>• Educational assessment professionals</li>
                  </ul>
                </div>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                  Apply for ISC
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">International Technical Committee (ITC)</h2>
                <p className="text-gray-700 mb-4">
                  Lead the technical infrastructure and platform development for PAIO.
                </p>
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">We're looking for:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Software engineers and developers</li>
                    <li>• System administrators and DevOps experts</li>
                    <li>• Cybersecurity professionals</li>
                    <li>• Competition platform specialists</li>
                  </ul>
                </div>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                  Apply for ITC
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">General Requirements</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold mb-2">Commitment</h4>
                  <p>3-year term with possibility of renewal</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Time Investment</h4>
                  <p>Monthly virtual meetings plus annual in-person gathering</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Qualifications</h4>
                  <p>Relevant professional experience and passion for African tech education</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Benefits</h4>
                  <p>Network with African tech leaders, contribute to continental development, recognition in PAIO community</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Application Process</h3>
              <ol className="space-y-3 text-gray-700">
                <li>1. Submit your CV and cover letter</li>
                <li>2. Complete the committee-specific questionnaire</li>
                <li>3. Participate in a virtual interview</li>
                <li>4. Reference check and final selection</li>
              </ol>
              <p className="text-gray-600 mt-4 text-sm">
                Applications are reviewed quarterly. Next deadline: March 31, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
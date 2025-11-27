import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Statistics() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-black">Statistics</h1>
          
          <div className="bg-gray-50 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">PAIO 2025 Results</h2>
            <p className="text-gray-700 mb-6">
              View the complete results and statistics from the Pan African Informatics Olympiad 2025.
            </p>
            <a 
              href="https://www.panafricanio.com/results" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition"
            >
              View PAIO 2025 Results →
            </a>
          </div>

          <div className="bg-gray-50 p-8">
            <h3 className="text-xl font-bold mb-6 text-black">PAIO 2025 Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">57</div>
                <div className="text-gray-700">Official Contestants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">14</div>
                <div className="text-gray-700">13 African countries + 1 Guest Country</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">8</div>
                <div className="text-gray-700">Problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">40</div>
                <div className="text-gray-700">Medals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">6</div>
                <div className="text-gray-700">Guest Contestants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">3</div>
                <div className="text-gray-700">Unofficial Contestants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">66</div>
                <div className="text-gray-700">Total Contestants</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
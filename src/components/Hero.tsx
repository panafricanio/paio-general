export default function Hero() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6 text-black">Pan African Informatics Olympiad</h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          An annual programming competition for high school students across Africa, promoting computational thinking and problem-solving skills.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="https://2025.panafricanio.com/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition">
            PAIO 2025 Website
          </a>
          <a href="https://2025.panafricanio.com/results" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-black px-8 py-3 font-semibold hover:bg-gray-200 transition">
            PAIO 2025 Results
          </a>
        </div>
        <div className="mt-12">
          <div className="inline-block bg-gray-50 p-6">
            <h3 className="font-semibold text-black mb-2 text-lg">Host Applications Open</h3>
            <p className="text-gray-700 text-sm mb-4">We are accepting applications from countries to host the PAIO competitions in 2026 and 2027</p>
            <a href="/calls/hosts" className="text-black underline hover:text-gray-600 transition">
              Learn more about hosting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

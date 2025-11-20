import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function History() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">History of PAIO</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">About PAIO</h2>
            <p className="text-gray-700 mb-6">
              The Pan African Informatics Olympiad (PAIO) is Africa's premier programming competition 
              for high school students, bringing together the continent's brightest young minds in 
              computer science and programming.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Mission</h2>
            <p className="text-gray-700 mb-6">
              To foster computational thinking, problem-solving skills, and programming excellence 
              among African youth, while building bridges between countries and cultures across the continent.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Timeline</h2>
            <div className="space-y-6">
              <div className="pl-6">
                <h3 className="font-bold text-lg text-black">2020</h3>
                <p className="text-gray-700">PAIO was conceived as a vision to unite African students through programming</p>
              </div>
              <div className="pl-6">
                <h3 className="font-bold text-lg text-black">2021</h3>
                <p className="text-gray-700">First organizational meetings and framework development</p>
              </div>
              <div className="pl-6">
                <h3 className="font-bold text-lg text-black">2022</h3>
                <p className="text-gray-700">Pilot competitions and initial country partnerships established</p>
              </div>
              <div className="pl-6">
                <h3 className="font-bold text-lg text-black">2023-2025</h3>
                <p className="text-gray-700">Full-scale competitions with growing participation across Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
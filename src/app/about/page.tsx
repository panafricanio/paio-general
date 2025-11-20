import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">About PAIO</h1>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              The Pan African Informatics Olympiad (PAIO) is Africa's premier international programming competition for high school students. Established to foster excellence in computer science education across the continent, PAIO brings together the brightest young programmers from countries across Africa.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Our Mission</h2>
            <p className="leading-relaxed">
              To inspire, challenge, and recognize exceptional young programmers from Africa; to foster a culture of computational thinking and innovation; and to create opportunities for Africa's future leaders in technology.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Our Vision</h2>
            <p className="leading-relaxed">
              A thriving community of African programmers solving complex problems and contributing to technological advancement on the global stage.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What Makes PAIO Special</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-gray-700 font-bold">✓</span>
                <span><strong>Pan-African Reach:</strong> Uniting talented programmers from across the continent</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-700 font-bold">✓</span>
                <span><strong>World-Class Competition:</strong> Problems designed at international standards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-700 font-bold">✓</span>
                <span><strong>Networking Opportunities:</strong> Connect with peers and mentors from top tech companies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-700 font-bold">✓</span>
                <span><strong>Career Development:</strong> Scholarships and opportunities with leading organizations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

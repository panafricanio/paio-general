import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Regulations() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Regulations</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Competition Rules</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Teams consist of 3-4 high school students</li>
              <li>• Each school can send up to 2 teams</li>
              <li>• Competition duration: 5 hours</li>
              <li>• Programming languages: C++, Python, Java</li>
              <li>• All participants must bring valid identification</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Code of Conduct</h2>
            <p className="text-gray-700 mb-4">
              All participants must adhere to the highest standards of academic integrity and sportsmanship.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• No plagiarism or academic dishonesty</li>
              <li>• Respect all judges and organizers</li>
              <li>• Fair competition and no sabotage</li>
              <li>• Professional conduct at all times</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Eligibility</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Participants must be high school students (ages 14-19)</li>
              <li>• Must be citizens or residents of participating African countries</li>
              <li>• Selected through national competitions</li>
              <li>• Maximum 4 students per country</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Competition Format</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Individual competition (not team-based)</li>
              <li>• 6-8 algorithmic problems</li>
              <li>• Problems range from easy to very difficult</li>
              <li>• Partial scoring available for incomplete solutions</li>
            </ul>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-3 text-black">Awards & Recognition</h3>
              <p className="text-gray-700 mb-3">
                PAIO recognizes excellence through medals, certificates, and special awards.
              </p>
              <a href="/organization/awards" className="inline-block bg-black text-white px-4 py-2 rounded font-medium hover:bg-gray-800 transition">
                View Awards Details →
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

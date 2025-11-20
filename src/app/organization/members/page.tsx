import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Members() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Member Countries</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              PAIO brings together students from across Africa, representing the diversity and 
              talent of our continent. Below are our participating member countries.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-900">Participating Countries</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                'Algeria', 'Angola', 'Botswana', 'Cameroon', 'Egypt', 'Ethiopia',
                'Ghana', 'Kenya', 'Morocco', 'Nigeria', 'Rwanda', 'Senegal',
                'South Africa', 'Tanzania', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
              ].map((country) => (
                <div key={country} className="bg-gray-50 p-3 rounded-lg text-center">
                  <span className="font-medium text-gray-900">{country}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-black">Join PAIO</h3>
              <p className="text-gray-700 mb-4">
                Is your country interested in participating in PAIO? We welcome new member countries 
                to join our growing community of African programming enthusiasts.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Requirements:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Designated national coordinator</li>
                  <li>Commitment to annual participation</li>
                  <li>Support for student participants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
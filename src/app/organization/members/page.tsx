import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Members() {
  const countries = [
    { name: 'Algeria', website: 'https://algerianoi.com/', email: 'contact@algerianoi.com', flag: '🇩🇿' },
    { name: 'Djibouti', website: '', email: '', flag: '🇩🇯' },
    { name: 'Egypt', website: 'http://www.eoi.eg/', email: 'info@eoi.eg', flag: '🇪🇬' },
    { name: 'Ghana', website: 'https://www.africanintelclub.com/', email: 'info@africanintelclub.com', flag: '🇬🇭' },
    { name: 'Kenya', website: '', email: '', flag: '🇰🇪' },
    { name: 'Libya', website: 'https://loi.lati.ly/', email: 'safwan.bouna@lati.ly', flag: '🇱🇾' },
    { name: 'Mali', website: 'robotsmali.org.', email: 'info@robotsmali.org', flag: '🇲🇱' },
    { name: 'Morocco', website: 'https://www.morocco-ioi.com/', email: 'moroccanolympiadinformatics@gmail.com', flag: '🇲🇦' },
    { name: 'Nigeria', website: 'https://www.nmc.edu.ng/', email: 'ojbamidele@nmc.edu.ng', flag: '🇳🇬' },
    { name: 'Rwanda', website: 'rwandainformaticsolympiad@gmail.com', email: 'https://www.rwandainformatics.org/', flag: '🇷🇼' },
    { name: 'South Africa', website: 'https://www.iitpsa.org.za/', email: 'info@olympiad.org.za', flag: '🇿🇦' },
    { name: 'Tunisia', website: 'https://www.facebook.com/ITA.Tunisia', email: 'info.tunisian.association@gmail.com', flag: '🇹🇳' },
    { name: 'Zimbabwe', website: '', email: '', flag: '🇿🇼' }
  ].sort((a, b) => a.name.localeCompare(b.name));

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
              {countries.map((country) => (
                <div key={country.name} className="bg-gray-50 p-4 rounded-lg flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{country.name}</h3>
                    <div className="space-y-1 text-sm">
                      {country.website &&
                        <a href={country.website} className="text-blue-600 hover:text-blue-800 block">
                          Website
                        </a>
                      }
                      {country.email &&
                        <a href={`mailto:${country.email}`} className="text-blue-600 hover:text-blue-800 block">
                          email
                        </a>
                      }
                    </div>
                  </div>
                  <span className="text-[40px]">{country.flag}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-black">Join PAIO</h3>
              <p className="text-gray-700 mb-4">
                Is your country interested in participating in PAIO? We welcome new member countries
                to join.
              </p>
              <div className="space-y-2 text-gray-700 mb-6">
                <p><strong>Requirements:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Designated national coordinator</li>
                  <li>Commitment to annual participation</li>
                  <li>Support for student participants</li>
                  <li>Formal Letter of Intent from authorized representative</li>
                  <li>Established National Informatics Olympiad (NIO) program</li>
                </ul>
              </div>
              <a
                href="https://forms.gle/rZuRibL3X2EE8BUV8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-900 transition inline-block"
              >
                Apply Now
              </a>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

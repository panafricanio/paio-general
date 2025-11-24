import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Regulations() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-gray-900">Regulations</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-4">
                The Pan African Olympiad in Informatics (PAIO) is an annual international informatics competition for individual contestants from Africa and additional invited countries. It is accompanied by social and cultural programmes, creating a comprehensive experience for participants. The PAIO is held once per calendar year in an African country, bringing together exceptional young talent in the field of informatics from across the continent.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The regulations governing PAIO are comprehensive and detailed, covering all aspects of the competition including competition format, eligibility requirements, awards, code of conduct, and organizational structure. These regulations are designed to ensure fairness, integrity, and the highest standards of competition while promoting the core objectives of the PAIO: to discover and recognize exceptionally talented young people in informatics, encourage international competition at the highest level, foster friendly international relationships among computer scientists and educators, and promote cultural exchange among nations and participants.
              </p>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              The complete PAIO regulations can be found in the document below:
            </p>
            
            <a 
              href="https://docs.google.com/document/d/11tjRLzlILvj_6STmVJ3wtYcRDZtmwxWLbZ9L37oEUiU/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
            >
              View Full Regulations Document →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

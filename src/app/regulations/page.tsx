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

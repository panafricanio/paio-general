import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function History() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">History of the Establishment of the Pan African Informatics Olympiad (PAIO)</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The idea of creating a continental Informatics competition for Africa emerged from the collective efforts of several individuals deeply committed to advancing computer science education across the continent. Among the earliest contributors were José Esperazano, Hirwa Arnold, and Joel Lee, each of whom played a distinct and essential role in the foundation of PAIO.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Early Foundations</h2>
            <p className="mb-6">
              José Esperazano initiated the vision that would ultimately lead to the establishment of the Rwanda Informatics Olympiad (RwIO). He supported many of the early activities that built the foundation for Informatics education and competitive programming in Rwanda. As the initiative grew, he was joined by Hirwa Arnold, who focused on strengthening the academic structure of the program and developing a network of skilled Informatics coaches, laying the groundwork for long-term sustainability.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Expansion and Continental Vision</h2>
            <p className="mb-6">
              The aspiration to establish a Pan-African Informatics Olympiad existed from the early stages, but its realization accelerated with the involvement of Joel Lee, who joined the Rwanda Informatics Team later on. Joel played a pivotal operational role, turning the continental idea into a concrete project.
            </p>
            <p className="mb-6">
              In IOI 2024, Joel served as Rwanda's first Observer, where he facilitated key connections among African team leaders. His efforts formed the initial network that would later become central to PAIO's creation. Joel also brought together experienced global professionals to form the International Scientific Committee (ISC) and collaborated with the Rwanda Informatics Team to establish the Host Committee (HC) and Technical Committee (TC).
            </p>
            <p className="mb-6">
              The Rwanda Informatics initiative also benefitted from support from the Rwanda Math Olympiad team, particularly Arun Shanmugathan, who shared valuable experience from the Pan African Mathematics Olympiad—experience that informed the structural and organizational design of PAIO.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Strengthening Regional Collaboration</h2>
            <p className="mb-6">
              In July 2025, Hirwa Arnold served as Rwanda's Team Leader at IOI 2025, together with Joel Lee, he further strengthened relationships among African leaders and reinforced coordination between the ISC and participating countries. These collaborative efforts created the structure necessary for a successful inaugural edition.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">The First PAIO</h2>
            <p className="mb-6">
              The first Pan African Informatics Olympiad (PAIO) took place from 12–16 September 2025, hosted by Rwanda in an online format. This landmark event marked the beginning of a continental initiative to promote excellence in Informatics across Africa.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Resources</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <a href="https://www.panafricanio.com/" className="text-blue-600 hover:text-blue-800 underline">Website: https://www.panafricanio.com/</a>
              </li>
              <li>
                <a href="https://www.panafricanio.com/results" className="text-blue-600 hover:text-blue-800 underline">Results: https://www.panafricanio.com/results</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Assembly() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">General Assembly</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">About the General Assembly</h2>
            <p className="text-gray-700 mb-6">
              The General Assembly (GA) is the highest decision-making body of PAIO, comprising 
              representatives from all participating African countries.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Responsibilities</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Setting strategic direction and policies for PAIO</li>
              <li>• Approving annual budgets and financial reports</li>
              <li>• Electing members to key committees</li>
              <li>• Reviewing and updating competition regulations</li>
              <li>• Approving host countries for future competitions</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Meetings</h2>
            <p className="text-gray-700 mb-4">
              The General Assembly meets annually during the PAIO competition period, with 
              extraordinary meetings called as needed.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Membership</h2>
            <p className="text-gray-700 mb-4">
              Each participating country is entitled to one vote in the General Assembly, 
              represented by their designated national coordinator.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
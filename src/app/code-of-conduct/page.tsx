import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CodeOfConduct() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Code of Conduct</h1>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                All participants are expected to adhere to the following code of conduct:
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Participants must act with integrity and honesty at all times.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Any form of cheating or plagiarism will result in immediate disqualification.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Participants must treat others with respect and courtesy.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Any form of harassment or discrimination will not be tolerated.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Participants should not attempt to access unauthorized systems, files, or documentation during the competition.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Maintain focus during competition hours and avoid distracting other participants.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Adhere to all rules set by judges and organizers regarding submission procedures, tool usage, and competition format.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Accept results gracefully and congratulate fellow competitors regardless of outcomes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Respect all time limits and deadlines set for the competition.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>No disruptive behavior, substance abuse, or violations of venue policies.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>If you witness misconduct, report it to organizers rather than handling it independently.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

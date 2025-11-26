import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function JoinCommittees() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Join Our Committees</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">International Committee (IC)</h2>
                <p className="text-gray-700 mb-4">
                  A long-term standing committee that guarantees the continuity and quality for PAIO competitions and provides advice and recommendations to Host Organisations.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Composition:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 5 members total</li>
                    <li>• 2 members elected by African countries in the GA (3-year term each, one elected per year)</li>
                    <li>• 3 representatives from host countries (2-year term)</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Eligibility & Selection:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• GA-elected candidates must be proposed and seconded by two African countries</li>
                    <li>• Members act as individuals, not country representatives</li>
                    {/* <li>• Future Host representatives may attend IC meetings as observers</li> */}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Responsibilities:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Act on behalf of the GA between PAIOs</li>
                    <li>• Inform the GA about activities at each PAIO</li>
                    <li>• Ensure adherence to PAIO regulations</li>
                  </ul>
                </div>

                <a target='_blank' href="https://forms.gle/NgrapjsWuwXgqzab8" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                  Apply for IC
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">International Scientific Committee (ISC)</h2>
                <p className="text-gray-700 mb-4">
                  Ensures appropriate competition tasks and oversees academic quality and scientific direction of PAIO competitions.
                </p>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Composition:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 7 members</li>
                    <li>• 1 member selected by Host Country for PAIO'n-1</li>
                    <li>• 1 member selected by Host Country for PAIO'n</li>
                    <li>• 1 member selected by Host Country for PAIO'n+1</li>
                    <li>• 1 non-voting member selected by Host Country for PAIO'n+2</li>
                    <li>• 2 members elected by the GA (3-year staggered terms)</li>
                    <li>• Chair of ITC</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Qualifications & Eligibility:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Computer specialists with background in Informatics Olympiad</li>
                    <li>• May NOT be members of a National Delegation</li>
                    <li>• In early PAIO years, experienced members may be appointed globally</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Leadership:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Chair elected from and by committee members</li>
                    <li>• Must be one of the three GA-elected members</li>
                    <li>• Reports directly to IC</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Ensure appropriate Competition Tasks are created</li>
                    <li>• Oversee evaluation procedure and maintain PAIO syllabus</li>
                    <li>• Arbitrate evaluation disputes between Delegation Leaders and HSC</li>
                    <li>• Meet 2-6 months prior to and during each PAIO</li>
                    <li>• Distribute syllabus details to GA at PAIO'n-1</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Confidentiality Requirements:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Members who see tasks must not train prospective Contestants</li>
                    <li>• No task leakage permitted</li>
                    <li>• Keep task descriptions confidential until published at PAIO</li>
                  </ul>
                </div>

                <a target='_blank' href="https://forms.gle/kr8aeo9t2PJedPJKA" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                  Apply for ISC
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">International Technical Committee (ITC)</h2>
                <p className="text-gray-700 mb-4">
                  Proposes, develops, and supports technical matters including systems, tools, hardware, networks, and IT security for PAIO competitions.
                </p>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Composition:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 4 voting members</li>
                    <li>• 1 member selected by Host Country for PAIO'n-1</li>
                    <li>• 1 member selected by Host Country for PAIO'n</li>
                    <li>• 1 member selected by Host Country for PAIO'n+1</li>
                    <li>• 1 member proposed by ISC for GA approval or election (3-year staggered terms)</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Qualifications & Eligibility:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Computer specialists with background in Olympiad contest systems</li>
                    <li>• May NOT be members of a National Delegation</li>
                    <li>• Interested candidates should contact ISC</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Leadership:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Chair elected from and by committee members</li>
                    <li>• Must be one of the three ISC-proposed members</li>
                    <li>• Reports directly to ISC</li>
                    <li>• Serves as non-voting member of ISC</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Supervise creation and implementation of grading system and administrative software</li>
                    <li>• Manage operating systems, program development tools, hardware, and networks</li>
                    <li>• Ensure IT security for competition infrastructure</li>
                    <li>• Meet 2-6 months prior to and during each PAIO</li>
                    <li>• Screen competition material and inspect grading system before PAIO</li>
                  </ul>
                </div>

                 <a target='_blank' href="https://forms.gle/6uhywvJfZCjfjRCu9" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                  Apply for ITC
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Committee General Information</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold mb-2">Meeting Requirements</h4>
                  <p>All committees must meet during each PAIO and between 2-6 months prior to each PAIO.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Voting & Decision Making</h4>
                  <p>One vote per voting member; Committee Chair casts deciding vote in ties.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Adjunct Members</h4>
                  <p>All committees may select adjunct members (Host Country representatives and others) with no voting rights.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Communication</h4>
                  <p>Frequent communication is required between committees and with Host Country representatives.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">How to Apply</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold mb-2">For IC Members (GA-Elected Positions)</h4>
                  <p>Work with your African country delegation to propose and second candidates for consideration in the General Assembly election.</p>
                </div>
                {/* <div>
                  <h4 className="font-bold mb-2">For ISC & ITC Members</h4>
                  <p>Submit your CV and cover letter outlining your experience in informatics and competitive programming. Interested ITC candidates should contact the ISC directly.</p>
                </div> */}
                <div>
                  <h4 className="font-bold mb-2">Selection Process</h4>
                  <p>GA-elected positions go through General Assembly voting. Host Country positions are selected by respective Host Countries. ISC and ITC-proposed positions are subject to GA approval.</p>
                </div>
              </div>
              {/* <p className="text-gray-600 mt-4 text-sm">
                For inquiries about committee positions, contact us through our website contact info.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
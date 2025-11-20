export default function Updates() {
  const updates = [
    {
      year: 2025,
      title: 'PAIO 2025 Results Released',
      description: 'Competition results and statistics are now available',
      link: 'https://www.panafricanio.com/results',
      date: 'November 2025'
    },
    {
      title: 'Call for Participation',
      description: 'Open call for teams from across Africa. Register your school and participate in this prestigious competition.'
    },
    {
      title: 'Assembly & Meetings',
      description: 'Join our community assembly meetings to discuss strategies and network with other participants.'
    },
    {
      title: 'Awards & Recognition',
      description: 'Compete for prestigious awards, scholarships, and international recognition.'
    },
    {
      title: 'Competition Resources',
      description: 'Access comprehensive guides, problem sets, and technical documentation to prepare for the competition.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-black">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {updates.map((update, index) => (
            <div key={index} className="p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-black mb-2">{update.title}</h3>
              <p className="text-gray-700 mb-4">{update.description}</p>
              {update.link && (
                <div className="flex justify-between items-center">
                  <a 
                    href={update.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black font-semibold hover:text-gray-600"
                  >
                    View Results →
                  </a>
                  <span className="text-gray-600 text-sm">{update.date}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
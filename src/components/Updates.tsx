export default function Updates() {
  const updates = [
    {
      year: 2025,
      title: 'PAIO 2025 Results Released',
      description: 'Competition results and statistics are now available',
      link: 'https://2025.panafricanio.com/results',
      // date: 'September 15, 2025'
    },
    {
      title: 'Competition Resources',
      link: 'https://2025.panafricanio.com/resources',
      description: 'Access curated books, links, contests and problem sets to help prepare for PAIO and other olympiads.'
    },
    {
      title: 'Call for Host',
      link: '/calls/hosts',
      description: 'Countries interested in hosting either PAIO 2026 or PAIO 2027 can now express their interests.'
    },
    {
      title: 'Assembly & Meetings',
      description: 'During PAIO 2025, there were 3 GA meetings that shaped the orientation of the competition. The General Assembly consisted of 14 participating countries.'
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
                    Learn more →
                  </a>
                  {/* {update.date && <span className="text-gray-600 text-sm">{update.date}</span>} */}
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
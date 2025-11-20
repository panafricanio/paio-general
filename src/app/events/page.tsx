import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Events() {
  const events = [
    {
      title: 'Organized Call',
      date: 'January 2025',
      description: 'Official launch and call for participation from schools across Africa'
    },
    {
      title: 'HD Articles & Resources',
      date: 'February 2025',
      description: 'Release of high-definition study materials and technical documentation'
    },
    {
      title: 'Assembly & Meetings',
      date: 'March 2025',
      description: 'Community assembly meetings and team registration deadlines'
    },
    {
      title: 'Common Areas',
      date: 'April 2025',
      description: 'Shared learning spaces and collaborative problem-solving sessions'
    },
    {
      title: 'Competition Day',
      date: 'May 2025',
      description: 'Main PAIO competition event across multiple African cities'
    },
    {
      title: 'Awards Ceremony',
      date: 'June 2025',
      description: 'Recognition and awards for top-performing teams and individuals'
    }
  ];

  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-gray-900">Events & Timeline</h1>
          
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index < events.length - 1 && (
                    <div className="w-1 h-16 bg-blue-200 mt-2"></div>
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

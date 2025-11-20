import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-gray-900">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">School</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"></textarea>
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded-lg font-bold hover:bg-gray-800 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">info@paio.org</p>
                  <p className="text-gray-700">support@paio.org</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Follow Us</h3>
                  <div className="space-y-2">
                    <p><a href="#" className="text-gray-700 hover:text-gray-900">Twitter @PAIO_Official</a></p>
                    <p><a href="#" className="text-gray-700 hover:text-gray-900">Facebook /PAIO</a></p>
                    <p><a href="#" className="text-gray-700 hover:text-gray-900">LinkedIn Pan African Informatics Olympiad</a></p>
                    <p><a href="#" className="text-gray-700 hover:text-gray-900">Instagram @PAIO_Official</a></p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM (CAT)</p>
                  <p className="text-gray-700">Weekends: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

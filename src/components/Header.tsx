'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl font-bold text-black">PAIO</div>
            <div className="text-xs text-gray-800">
              <p className="font-semibold">Pan African</p>
              <p className="font-semibold">Informatics Olympiad</p>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <div className="relative group">
              {/* <Link href="/" className="text-black hover:text-gray-700 transition font-medium">HOME</Link> */}
            </div>
            <div className="relative group">
              <Link href="/statistics" className="text-black hover:text-gray-700 transition font-medium">STATISTICS</Link>
            </div>
            <div className="relative group">
              <span className="text-black hover:text-gray-700 transition font-medium cursor-pointer">ORGANIZATION</span>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/organization/history" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">History</Link>
                <Link href="/organization/assembly" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Assembly</Link>
                <Link href="/organization/committees" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Committees</Link>
                <Link href="/organization/members" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Members</Link>
                <Link href="/organization/awards" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Awards</Link>
                <Link href="/regulations" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Regulations</Link>
                <Link href="/code-of-conduct" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Code of Conduct</Link>
              </div>
            </div>
            <div className="relative group">
              <span className="text-black hover:text-gray-700 transition font-medium cursor-pointer">CALLS</span>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/calls/hosts" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Call for Hosts</Link>
                <Link href="/calls/committees" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Join Committees</Link>
              </div>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3 pt-4">
              {/* <Link href="/" className="text-black hover:text-gray-700 transition font-medium">HOME</Link> */}
              <Link href="/statistics" className="text-black hover:text-gray-700 transition font-medium">STATISTICS</Link>
              
              <div className="space-y-2">
                <span className="text-black font-medium">ORGANIZATION</span>
                <div className="pl-4 space-y-2">
                  <Link href="/organization/history" className="block text-sm text-gray-800 hover:text-black">History</Link>
                  <Link href="/organization/assembly" className="block text-sm text-gray-800 hover:text-black">Assembly</Link>
                  <Link href="/organization/committees" className="block text-sm text-gray-800 hover:text-black">Committees</Link>
                  <Link href="/organization/members" className="block text-sm text-gray-800 hover:text-black">Members</Link>
                  <Link href="/organization/awards" className="block text-sm text-gray-800 hover:text-black">Awards</Link>
                  <Link href="/regulations" className="block text-sm text-gray-800 hover:text-black">Regulations</Link>
                  <Link href="/code-of-conduct" className="block text-sm text-gray-800 hover:text-black">Code of Conduct</Link>
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-black font-medium">CALLS</span>
                <div className="pl-4 space-y-2">
                  <Link href="/calls/hosts" className="block text-sm text-gray-800 hover:text-black">Call for Hosts</Link>
                  <Link href="/calls/committees" className="block text-sm text-gray-800 hover:text-black">Join Committees</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

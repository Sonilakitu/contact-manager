import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactsList from './components/ContactsList';
import Maps from './components/Maps';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="bg-gray-200 text-black w-64 ">
            <ul className="p-4">
              <li>
                <Link to="/contacts" className="block hover:bg-gray-700 hover:text-white py-2 px-4 font-bold text-lg">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/maps" className="block hover:bg-gray-700 hover:text-white py-2 px-4 font-bold text-lg">
                  Charts and Maps
                </Link>
              </li>
            </ul>
          </div>


          {/* Content */}
          <div className="w-full p-8">
            <Routes>
              <Route path="/" element={<h2>Welcome To User Dashboard</h2>} />
              <Route path="/contacts" element={<ContactsList />} />
              <Route path="/maps" element={<Maps />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

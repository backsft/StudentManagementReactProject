import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Test from './Components/Test';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Test />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

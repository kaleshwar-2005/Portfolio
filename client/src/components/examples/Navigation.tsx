import { useState } from 'react';
import Navigation from '../Navigation';

export default function NavigationExample() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(`Dark mode ${!darkMode ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="pt-20 p-8">
        <p className="text-muted-foreground">
          Navigation component is now visible at the top. Scroll to see sticky behavior.
        </p>
      </div>
    </div>
  );
}
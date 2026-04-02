// src/App.tsx
import { ThemeProvider } from "@/components/ThemeProvider";
import { MobileNavbar } from "@/components/MobileNavbar";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Gallery } from "@/sections/Gallery";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { WhatsAppButton } from "./components/WhatsappButton";

function App() {
  return (
    <ThemeProvider>
      <MobileNavbar />
      {/* Add padding-top to account for fixed navbar */}
      <main >
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
    </ThemeProvider>
  );
}

export default App;
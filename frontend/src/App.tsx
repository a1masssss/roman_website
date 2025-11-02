import { Home as HomeIcon, Award, Newspaper, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Footer } from "@/components/ui/footer"
import { Home } from "@/pages/Home"
import { Achievements } from "@/pages/Achievements"
import { PressMedia } from "@/pages/PressMedia"
import { Contact } from "@/pages/Contact"

function App() {
  const navItems = [
    { name: 'Home', url: '#home', icon: HomeIcon },
    { name: 'Achievements', url: '#achievements', icon: Award },
    { name: 'Press & Media', url: '#press-media', icon: Newspaper },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />
      
      <main>
        <Home />
        <Achievements />
        <PressMedia />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App


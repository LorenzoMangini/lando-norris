import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import MessageFromLando from '@/components/sections/MessageFromLando'
import TrackCards from '@/components/sections/TrackCards'
import HelmetGallery from '@/components/sections/HelmetGallery'
import WorldChampion from '@/components/sections/WorldChampion'
import SocialStrip from '@/components/sections/SocialStrip'
import Partnerships from '@/components/sections/Partnerships'
import CustomCursor from '@/components/ui/CustomCursor'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden cursor-none">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <MessageFromLando />
        <TrackCards />
        <HelmetGallery />
        <WorldChampion />
        <Partnerships />
        <SocialStrip />
      </main>
      <Footer />
    </div>
  )
}

import Link from 'next/link'
import Button from '@/components/common/Button'
import OptimizedImage from '@/components/common/OptimizedImage'
import Hero from '@/components/home/Hero'
import FeaturedPrograms from '@/components/home/FeaturedPrograms'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPrograms />
      
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in making a lasting difference in the lives of those who need it most.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/programs" variant="accent" size="lg">
              Explore Programs
            </Button>
            <Button href="/events" variant="outline" size="lg" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              View Events
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

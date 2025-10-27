import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import OptimizedImage from '@/components/common/OptimizedImage';
import { programsData } from '@/data/programsData';
import { Heart, Users } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-700 to-green-900 text-white flex items-center">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-green-100">
              Discover our transformative initiatives that are creating lasting change in communities worldwide.
            </p>
          </div>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeader
            title="Making a Real Difference"
            subtitle="Each program is designed with community input and focused on sustainable, long-term impact."
            centered
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {programsData.map((program) => (
              <Card key={program.id} hover>
                <div className="relative h-64">
                  <OptimizedImage
                    src={program.imageUrl}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Impact */}
                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-800 mb-2">Impact:</h4>
                    <p className="text-sm text-green-700">{program.impact}</p>
                  </div>

                  {/* Current Needs */}
                  <div className="bg-amber-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-amber-800 mb-3">How You Can Help:</h4>
                    <ul className="space-y-2">
                      {program.needs.map((need, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-amber-700">
                          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button href="/donate" variant="primary" size="sm" className="flex-1 flex items-center justify-center gap-2">
                      <Heart size={16} />
                      Donate
                    </Button>
                    <Button href="/contact" variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-2">
                      <Users size={16} />
                      Volunteer
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* How Programs Work */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeader
            title="Our Approach"
            subtitle="How we design and implement sustainable programs"
            centered
            className="mb-16"
          />

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Listen</h3>
              <p className="text-gray-600 text-sm">
                We work with communities to understand their needs and priorities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Create culturally appropriate, sustainable solutions together.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Implement</h3>
              <p className="text-gray-600 text-sm">
                Execute programs with local partners and community leaders.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Empower</h3>
              <p className="text-gray-600 text-sm">
                Transfer ownership so communities can sustain programs independently.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Your contribution—whether financial support or volunteer time—directly impacts 
              the communities we serve. Every action makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/donate" variant="accent" size="lg">
                Make a Donation
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                Volunteer With Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}


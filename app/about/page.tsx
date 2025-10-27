import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import OptimizedImage from '@/components/common/OptimizedImage';
import Button from '@/components/common/Button';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: '2010', event: 'Hope Foundation established with a mission to serve underserved communities' },
    { year: '2012', event: 'Launched our first education program, serving 500 children' },
    { year: '2015', event: 'Expanded to 10 countries with healthcare and clean water initiatives' },
    { year: '2018', event: 'Reached 25,000 beneficiaries across all programs' },
    { year: '2020', event: 'Launched women empowerment and microfinance programs' },
    { year: '2023', event: 'Celebrated 50,000+ lives impacted across 25+ countries' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower underserved communities worldwide through sustainable programs in education, healthcare, and economic development, creating lasting positive change.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A world where every individual has access to quality education, healthcare, and opportunities to thrive, regardless of their circumstances.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Compassion, integrity, sustainability, and community-driven solutions guide everything we do. We believe in empowering people to transform their own lives.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A dedicated team of 50+ professionals and 200+ volunteers working tirelessly across continents to deliver impactful programs and build lasting relationships.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-700 to-primary-900 text-white flex items-center">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-primary-100">
              Learn about our journey, values, and the incredible team making a difference around the world.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Our Story"
                subtitle="From humble beginnings to global impact"
                className="mb-6"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                Hope Foundation was born out of a simple belief: that every person deserves the opportunity 
                to live a healthy, educated, and fulfilling life. What started as a small group of volunteers 
                in 2010 has grown into a global movement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Today, we work in 25+ countries, partnering with local communities to deliver sustainable 
                solutions in education, healthcare, clean water, and economic empowerment. Our approach is 
                collaborative—we listen, learn, and work alongside the communities we serve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every program, every initiative, and every success story is a testament to the power of 
                compassion and collective action. Together with our donors, volunteers, and partners, 
                we're building a brighter future for all.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
                alt="Our Story"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeader
            title="What Drives Us"
            subtitle="Our mission, vision, values, and the team behind the impact"
            centered
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones that shaped our organization"
            centered
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg z-10">
                    {index + 1}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-1 h-full bg-primary-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-primary-600 font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Your support helps us write the next chapter. Join us in creating 
              lasting change and empowering communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/donate" variant="accent" size="lg">
                Support Our Mission
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}


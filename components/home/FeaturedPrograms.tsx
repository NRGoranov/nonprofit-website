import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import OptimizedImage from '@/components/common/OptimizedImage';
import { programsData } from '@/data/programsData';

export default function FeaturedPrograms() {
  const featuredPrograms = programsData.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader
          title="Featured Programs"
          subtitle="Explore our key initiatives that are transforming lives and building stronger communities."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPrograms.map((program) => (
            <Card key={program.id} hover>
              <div className="relative h-48">
                <OptimizedImage
                  src={program.imageUrl}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {program.description}
                </p>
                <div className="bg-primary-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-primary-700">
                    {program.impact}
                  </p>
                </div>
                <Button href="/programs" variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/programs" variant="primary" size="lg">
            View All Programs
          </Button>
        </div>
      </Container>
    </section>
  );
}


import Button from '@/components/common/Button';
import OptimizedImage from '@/components/common/OptimizedImage';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
          alt="Hope Foundation Hero"
          fill
          priority
          sizes="100vw"
          className="brightness-50"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Building a Brighter Future Together
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
          Empowering communities through education, healthcare, and sustainable development. 
          Join us in making a lasting difference in the lives of those who need it most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/donate" variant="accent" size="lg">
            Donate Now
          </Button>
          <Button href="/programs" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700">
            Explore Our Programs
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-accent-300">50K+</div>
            <div className="text-sm mt-2 text-gray-200">Lives Impacted</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-accent-300">25+</div>
            <div className="text-sm mt-2 text-gray-200">Countries</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-accent-300">100+</div>
            <div className="text-sm mt-2 text-gray-200">Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-accent-300">15</div>
            <div className="text-sm mt-2 text-gray-200">Years Active</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}


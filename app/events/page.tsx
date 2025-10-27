'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import OptimizedImage from '@/components/common/OptimizedImage';
import { eventsData } from '@/data/eventsData';
import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('upcoming');

  const now = new Date();
  const filteredEvents = eventsData.filter((event) => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return event.date >= now;
    if (filter === 'past') return event.date < now;
    return true;
  }).sort((a, b) => a.date.getTime() - b.date.getTime());

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-700 to-purple-900 text-white flex items-center">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl text-purple-100">
              Join us at our upcoming events and be part of the change. From fundraisers 
              to community gatherings, there's always something happening!
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b sticky top-0 z-30">
        <Container>
          <div className="flex gap-4 py-4 overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                filter === 'upcoming'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                filter === 'past'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Past Events
            </button>
          </div>
        </Container>
      </section>

      {/* Events List */}
      <section className="py-20 bg-gray-50">
        <Container>
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-xl">No events found in this category.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} hover>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-64 md:h-full">
                      <OptimizedImage
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-primary-600 mb-3">
                          <CalendarIcon size={20} />
                          <span className="font-semibold">{formatDate(event.date)}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      {event.registrationUrl && event.date >= now && (
                        <div className="mt-6">
                          <Button
                            href={event.registrationUrl}
                            variant="primary"
                            size="md"
                            className="flex items-center gap-2"
                          >
                            Register Now
                            <ArrowRight size={16} />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Don't miss out on our upcoming events! Subscribe to our newsletter 
              to get the latest updates delivered straight to your inbox.
            </p>
            <Button 
              href="/contact" 
              variant="accent" 
              size="lg"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}


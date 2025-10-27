'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Heart, Users, Clock, MapPin, CheckCircle, Briefcase } from 'lucide-react';

export default function VolunteerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-xl p-12">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-primary-600" size={48} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your volunteer application and will contact you within 2-3 business days.
            </p>
            <p className="text-gray-500 mb-8">
              This is a demonstration site. No actual application has been submitted.
            </p>
            <div className="flex gap-4 justify-center">
              <Button href="/" variant="primary" size="lg">
                Return Home
              </Button>
              <Button href="/programs" variant="outline" size="lg">
                View Programs
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-800 text-white flex items-center">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Volunteer With Us</h1>
            <p className="text-xl text-green-100">
              Join our team of passionate volunteers and make a real difference in communities worldwide.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-white border-b">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Make an Impact</h3>
              <p className="text-gray-600 text-sm">
                Your time and skills directly help those in need around the world
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Join a Community</h3>
              <p className="text-gray-600 text-sm">
                Connect with like-minded people passionate about creating positive change
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Gain Experience</h3>
              <p className="text-gray-600 text-sm">
                Develop new skills and build your resume while helping others
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Volunteer Application */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Volunteer Application</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b">Personal Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Volunteer Interests */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b">Volunteer Interests</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Areas of Interest *
                    </label>
                    <div className="space-y-2">
                      {[
                        'Education Programs',
                        'Healthcare Initiatives',
                        'Community Outreach',
                        'Event Planning',
                        'Administrative Support',
                        'Fundraising',
                        'Digital Communications',
                        'Translation Services'
                      ].map((interest) => (
                        <label key={interest} className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-300 transition-all">
                          <input
                            type="checkbox"
                            name="interests"
                            value={interest}
                            className="mr-3 text-primary-600"
                          />
                          <span className="text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-3">
                      Availability *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Weekdays', 'Weekends', 'Evenings', 'Flexible'].map((time) => (
                        <label key={time} className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-300 transition-all">
                          <input
                            type="checkbox"
                            name="availability"
                            value={time}
                            className="mr-3 text-primary-600"
                          />
                          <span className="text-gray-700">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b">Experience & Skills</h3>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Relevant Experience or Skills
                    </label>
                    <textarea
                      id="experience"
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none resize-none"
                      placeholder="Tell us about your previous volunteer work, relevant skills, or any special qualifications..."
                    />
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Why do you want to volunteer with us? *
                  </label>
                  <textarea
                    id="motivation"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none resize-none"
                    placeholder="Share your motivation for volunteering and what you hope to achieve..."
                  />
                </div>

                {/* Disclaimer */}
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 text-center">
                    <strong>Note:</strong> This is a demonstration website. No actual application will be submitted.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Heart size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Volunteer Opportunities */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Opportunities</h3>
              <div className="space-y-4">
                {[
                  { 
                    title: 'Community Outreach Coordinator', 
                    time: '10-15 hrs/week',
                    type: 'Remote'
                  },
                  { 
                    title: 'Education Program Assistant', 
                    time: '15-20 hrs/week',
                    type: 'On-site'
                  },
                  { 
                    title: 'Event Planning Volunteer', 
                    time: 'Flexible',
                    type: 'Hybrid'
                  },
                  { 
                    title: 'Social Media Content Creator', 
                    time: '5-10 hrs/week',
                    type: 'Remote'
                  }
                ].map((opportunity, index) => (
                  <div key={index} className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-300 transition-all">
                    <h4 className="font-semibold text-gray-900 mb-2">{opportunity.title}</h4>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {opportunity.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {opportunity.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
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
              We've received your message and will get back to you as soon as possible.
            </p>
            <p className="text-gray-500 mb-8">
              This is a demonstration site. No actual message has been sent.
            </p>
            <div className="flex gap-4 justify-center">
              <Button href="/" variant="primary" size="lg">
                Return Home
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
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800 text-white flex items-center">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-primary-100">
              Have questions? Want to learn more about our work? We'd love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white border-b">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-600 text-sm">info@hopefoundation.org</p>
                <p className="text-gray-600 text-sm">support@hopefoundation.org</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                <p className="text-gray-600 text-sm">Mon-Fri 9am-5pm EST</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                <p className="text-gray-600 text-sm">123 Hope Street</p>
                <p className="text-gray-600 text-sm">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
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
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Disclaimer */}
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 text-center">
                    <strong>Note:</strong> This is a demonstration website. No actual message will be sent.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Office Hours */}
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="text-primary-600" size={28} />
                Office Hours
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Main Office</h4>
                  <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-600 text-sm">Sunday: Closed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Contact</h4>
                  <p className="text-gray-600 text-sm">Available 24/7 for urgent matters</p>
                  <p className="text-gray-600 text-sm">Emergency: +1 (555) 999-8888</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

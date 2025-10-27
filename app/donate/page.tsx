'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/common/Button';
import { Heart, DollarSign, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your generous contribution helps us continue making a positive impact in communities worldwide.
            </p>
            <p className="text-gray-500 mb-8">
              This is a demonstration site. No actual payment has been processed.
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
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800 text-white flex items-center">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl text-primary-100">
              Your contribution directly supports programs that transform lives and strengthen communities around the world.
            </p>
          </div>
        </Container>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white border-b">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <DollarSign className="text-primary-600 mx-auto mb-4" size={40} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">$2.5M+</h3>
              <p className="text-gray-600">Raised This Year</p>
            </div>
            <div className="text-center">
              <Users className="text-primary-600 mx-auto mb-4" size={40} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="text-center">
              <Heart className="text-primary-600 mx-auto mb-4" size={40} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Amount</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Preset Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setDonationAmount(amount.toString());
                        setCustomAmount('');
                      }}
                      className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                        donationAmount === amount.toString()
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-primary-300 text-gray-700'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Or enter a custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg font-semibold">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonationAmount('');
                      }}
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Donation Frequency
                  </label>
                  <div className="space-y-2">
                    {['One-time', 'Monthly', 'Quarterly', 'Yearly'].map((freq) => (
                      <label key={freq} className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-300 transition-all">
                        <input
                          type="radio"
                          name="frequency"
                          value={freq}
                          defaultChecked={freq === 'One-time'}
                          className="mr-3 text-primary-600"
                        />
                        <span className="text-gray-700">{freq}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Impact Message */}
                <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Your Impact:</strong> Your donation will help provide essential resources, 
                    education, and support to communities in need. Every dollar makes a difference.
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 text-center">
                    <strong>Note:</strong> This is a demonstration website. No actual payment will be processed. 
                    Your information is not being collected or stored.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isProcessing || (!donationAmount && !customAmount)}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Donation
                      <ArrowRight size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Your Donation Makes a Difference</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Education Programs</h4>
                  <p className="text-sm text-gray-600">Support learning and development opportunities</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Healthcare Initiatives</h4>
                  <p className="text-sm text-gray-600">Provide medical care and wellness services</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Community Development</h4>
                  <p className="text-sm text-gray-600">Build stronger, sustainable communities</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

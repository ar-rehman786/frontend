'use client'
import React, { useState } from 'react';
import { Globe, Database, Shield, Zap, CheckCircle, Download, Lock } from 'lucide-react';
export default function AccessPage() {
  const [showAccessForm, setShowAccessForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    institutionType: '',
    message: ''
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Access request submitted:', formData);
    // Handle form submission
    alert('Access request submitted! Our team will contact you within 24 hours.');
    setShowAccessForm(false);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      title: '',
      phone: '',
      institutionType: '',
      message: ''
    });
  };

  const handleDownloadCompliance = () => {
    console.log('Downloading Compliance 3.0 Snapshot');
    // Handle download
    alert('Compliance 3.0 Snapshot download started');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D4D4]/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-24">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00D4D4]/20 blur-3xl rounded-full"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-[#00D4D4]/20 to-[#00D4D4]/5 rounded-full flex items-center justify-center border border-[#00D4D4]/30">
                <Globe className="w-12 h-12 text-[#00D4D4]" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The AI-Native Global Ledger for
              <span className="block mt-2 bg-gradient-to-r from-[#00D4D4] to-[#00A8A8] bg-clip-text text-transparent">
                Verified Market Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Enterprise-grade platform combining real-time data verification, blockchain-secured ledgers, 
              and AI-powered analytics to deliver actionable intelligence across global markets.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Built for institutional investors, financial services, and enterprise organizations 
              requiring the highest standards of data integrity and compliance.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <button
              onClick={() => setShowAccessForm(true)}
              className="px-8 py-4 bg-[#00D4D4] text-black font-bold rounded-lg hover:bg-[#00BCC9] transition-all text-lg flex items-center gap-3 shadow-lg shadow-[#00D4D4]/20"
            >
              <Lock className="w-5 h-5" />
              Request Institutional Access
            </button>
            <p className="text-sm text-gray-500">
              Already have access? <a href="/login" className="text-[#00D4D4] hover:underline">Login here</a>
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#00D4D4]" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00D4D4]" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#00D4D4]" />
              <span>Blockchain Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-400">
            Four-step process from raw data to verified intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl hover:border-[#00D4D4]/30 transition-all">
            <div className="absolute -top-4 left-8 w-12 h-12 bg-[#00D4D4] rounded-xl flex items-center justify-center text-black font-bold text-xl">
              1
            </div>
            <div className="w-16 h-16 bg-[#00D4D4]/10 rounded-xl flex items-center justify-center mb-6 mt-4">
              <Database className="w-8 h-8 text-[#00D4D4]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Connect or Upload Data</h3>
            <p className="text-gray-400 leading-relaxed">
              Integrate via API, SFTP, or manual upload. We support structured and unstructured data from 
              any source—CRM, financial systems, third-party feeds, or proprietary databases.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl hover:border-[#00D4D4]/30 transition-all">
            <div className="absolute -top-4 left-8 w-12 h-12 bg-[#00D4D4] rounded-xl flex items-center justify-center text-black font-bold text-xl">
              2
            </div>
            <div className="w-16 h-16 bg-[#00D4D4]/10 rounded-xl flex items-center justify-center mb-6 mt-4">
              <Shield className="w-8 h-8 text-[#00D4D4]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Refinery, Verification & Ledger Scoring</h3>
            <p className="text-gray-400 leading-relaxed">
              Our AI refinery cleanses, normalizes, and validates every data point. Blockchain-backed 
              ledger scoring ensures provenance and integrity at every step.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl hover:border-[#00D4D4]/30 transition-all">
            <div className="absolute -top-4 left-8 w-12 h-12 bg-[#00D4D4] rounded-xl flex items-center justify-center text-black font-bold text-xl">
              3
            </div>
            <div className="w-16 h-16 bg-[#00D4D4]/10 rounded-xl flex items-center justify-center mb-6 mt-4">
              <Zap className="w-8 h-8 text-[#00D4D4]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Enrich & Correlate</h3>
            <p className="text-gray-400 leading-relaxed">
              Cross-reference with global datasets, behavioral signals, and market indicators. 
              AI models detect patterns, anomalies, and opportunities in real-time.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl hover:border-[#00D4D4]/30 transition-all">
            <div className="absolute -top-4 left-8 w-12 h-12 bg-[#00D4D4] rounded-xl flex items-center justify-center text-black font-bold text-xl">
              4
            </div>
            <div className="w-16 h-16 bg-[#00D4D4]/10 rounded-xl flex items-center justify-center mb-6 mt-4">
              <CheckCircle className="w-8 h-8 text-[#00D4D4]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Deliver Intelligence</h3>
            <p className="text-gray-400 leading-relaxed">
              Access verified insights through dashboards, APIs, or automated reports. 
              Every data point is traceable, auditable, and ready for action.
            </p>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="border-y border-gray-900 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#00D4D4]/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-[#00D4D4]" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Compliance 3.0</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Next-generation compliance framework combining regulatory standards, blockchain verification, 
              and AI-powered monitoring to ensure data integrity and regulatory adherence across jurisdictions.
            </p>
            <p className="text-lg text-gray-500 mb-12">
              Learn how our platform meets SOC 2, GDPR, CCPA, and industry-specific compliance requirements 
              while maintaining the highest standards of data security and privacy.
            </p>
            <button
              onClick={handleDownloadCompliance}
              className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all border border-gray-700 flex items-center gap-3 mx-auto text-lg"
            >
              <Download className="w-5 h-5" />
              Download Compliance 3.0 Snapshot
            </button>
          </div>
        </div>
      </div>

      {/* Who It's For Section */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Built for Institutions</h2>
          <p className="text-xl text-gray-400">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Financial Services</h3>
            <p className="text-gray-400 leading-relaxed">
              Banks, asset managers, and investment firms requiring verified market data, 
              risk analytics, and compliance-ready intelligence.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Enterprise Organizations</h3>
            <p className="text-gray-400 leading-relaxed">
              Corporations needing real-time market intelligence, competitive analysis, 
              and strategic insights backed by verified data.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Institutional Investors</h3>
            <p className="text-gray-400 leading-relaxed">
              Hedge funds, private equity, and institutional traders requiring 
              high-frequency data with blockchain-verified provenance.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="border-t border-gray-900 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Request institutional access and our team will guide you through the onboarding process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowAccessForm(true)}
              className="px-8 py-4 bg-[#00D4D4] text-black font-bold rounded-lg hover:bg-[#00BCC9] transition-all text-lg flex items-center gap-3 shadow-lg shadow-[#00D4D4]/20"
            >
              <Lock className="w-5 h-5" />
              Request Institutional Access
            </button>
            <a
              href="/login"
              className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all border border-gray-700 text-lg"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Access Request Form Modal */}
      {showAccessForm && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full p-8 my-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Request Institutional Access</h2>
              <button
                onClick={() => setShowAccessForm(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00D4D4] focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00D4D4] focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00D4D4] focus:outline-none"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00D4D4] focus:outline-none"
                    placeholder="Chief Investment Officer"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00D4D4] focus:outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Institution Type *
                  </label>
                  <select
                    required
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00D4D4] focus:outline-none"
                  >
                    <option value="">Select type</option>
                    <option value="bank">Bank</option>
                    <option value="asset-manager">Asset Manager</option>
                    <option value="hedge-fund">Hedge Fund</option>
                    <option value="private-equity">Private Equity</option>
                    <option value="insurance">Insurance</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00D4D4] focus:outline-none resize-none"
                  placeholder="Tell us about your use case and requirements..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowAccessForm(false)}
                  className="flex-1 px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all border border-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#00D4D4] text-black font-bold rounded-lg hover:bg-[#00BCC9] transition-all"
                >
                  Submit Request
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                Our team will review your request and contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
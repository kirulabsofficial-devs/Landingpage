"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Calendar, Building2, Mail, User, Phone, MessageSquare, Check } from "lucide-react";

const serviceTypes = [
  { id: "hardware", label: "Hardware Solutions", description: "Servers, networking, infrastructure" },
  { id: "software", label: "Software Development", description: "Custom applications, integrations" },
  { id: "cloud", label: "Cloud Services", description: "Migration, hosting, management" },
  { id: "security", label: "Cybersecurity", description: "Audits, protection, compliance" },
  { id: "support", label: "IT Support", description: "24/7 monitoring, maintenance" },
  { id: "consulting", label: "IT Consulting", description: "Strategy, planning, optimization" },
];

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    preferredDate: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-muted-foreground mb-8">
            Your consultation request has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl bg-card/90 backdrop-blur-md rounded-full border border-border">
        <div className="flex items-center justify-between px-2 pl-5 py-2">
          <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
            Kiru<span className="text-primary">Labs</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-primary border border-primary/30 rounded-full bg-primary/10">
            GET STARTED
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Request a <span className="text-primary">Consultation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project requirements and our experts will create a tailored solution for your business needs.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Contact Information */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <User className="text-primary" size={24} />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Acme Corporation"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <MessageSquare className="text-primary" size={24} />
                Services Required *
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Select all the services you are interested in. Our team will provide a comprehensive proposal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceTypes.map((service) => (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => handleServiceToggle(service.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      formData.services.includes(service.id)
                        ? "bg-primary/10 border-primary text-foreground"
                        : "bg-secondary border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-foreground">{service.label}</p>
                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                      </div>
                      {formData.services.includes(service.id) && (
                        <Check className="text-primary flex-shrink-0" size={20} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule - Only for Hardware Solutions */}
            {formData.services.includes("hardware") && (
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Calendar className="text-primary" size={24} />
                  Schedule a Site Visit
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  For hardware solutions, we recommend scheduling an on-site assessment. Select your preferred date.
                </p>
                <div className="max-w-sm">
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>
            )}

            {/* Additional Message */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Additional Details
              </h2>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell us more about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Describe your project requirements, timeline, budget considerations, or any specific challenges you're facing..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || formData.services.length === 0}
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Request
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border mt-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2024 KiruLabs. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Need help? Contact us
          </Link>
        </div>
      </footer>
    </main>
  );
}

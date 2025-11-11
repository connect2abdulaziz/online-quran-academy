'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  BookOpen,
  Globe,
  Award,
  MessageCircle,
  CheckCircle,
  Star,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Languages,
  Video,
} from 'lucide-react';

const QuranAcademy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    language: '',
    message: '',
  });

  const features = [
    {
      icon: BookOpen,
      title: 'Hifz Program',
      description: 'Complete Quran memorization with proven techniques',
      image: '/images/hifz-program.jpg'
    },
    {
      icon: Award,
      title: 'Tajweed Excellence',
      description: 'Master proper recitation rules and pronunciation',
      image: '/images/tajweed.jpg'
    },
    {
      icon: Languages,
      title: 'Multi-Language',
      description: 'Lessons in English, Urdu, Punjabi, Chinese & Siraiki',
      image: '/images/languages.jpg'
    },
    {
      icon: Video,
      title: 'Online Classes',
      image: '/images/online-classes.jpg',
      description: 'Flexible scheduling with one-on-one attention',
    },
  ];

  const programs = [
    {
      title: 'Qaida & Basic Reading',
      description: 'Perfect for beginners learning to read Arabic and Quran',
      levels: 'All ages welcome',
    },
    {
      title: 'Hifz ul Quran',
      description: 'Complete memorization program with revision techniques',
      levels: 'Beginner to Advanced',
    },
    {
      title: 'Tajweed Mastery',
      description: 'Professional Tajweed instruction for perfect recitation',
      levels: 'Intermediate to Advanced',
    },
    {
      title: 'Quran Translation',
      description: 'Understand the meaning with word-by-word translation',
      levels: 'All levels',
    },
  ];

  const languages = [
    'English',
    'Urdu',
    'Punjabi',
    'Chinese (Mandarin)',
    'Siraiki',
  ];

  const stats = [
    { number: '13+', label: 'Years Experience' },
    { number: '500+', label: 'Students Taught' },
    { number: '5', label: 'Languages' },
    { number: '100%', label: 'Qualified Teacher' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:kaleemullghallo@gmail.com?subject=Free Trial Class Request&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AProgram: ${formData.program}%0D%0ALanguage: ${formData.language}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Al-Quran Academy</h1>
                <p className="text-xs text-yellow-400">Learn • Memorize • Excel</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors">About</a>
              <a href="#programs" className="text-white hover:text-yellow-400 transition-colors">Programs</a>
              <a href="#teacher" className="text-white hover:text-yellow-400 transition-colors">Teacher</a>
              <a href="#contact" className="px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors font-bold">
                Enroll Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-yellow-400 text-white hover:text-black">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-yellow-500 py-4 px-4 space-y-3">
            <a href="#about" className="block py-2 text-white hover:text-yellow-400">About</a>
            <a href="#programs" className="block py-2 text-white hover:text-yellow-400">Programs</a>
            <a href="#teacher" className="block py-2 text-white hover:text-yellow-400">Teacher</a>
            <a href="#contact" className="block py-2 px-4 bg-yellow-400 text-black rounded-full text-center font-bold hover:bg-yellow-500">
              Enroll Now
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 bg-black" style={{ backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>


        <div className="relative max-w-7xl mx-auto text-center z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Hafiz-e-Quran • IELTS Certified • 13+ Years Experience</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Learn Quran Online with
            <span className="block mt-2 text-yellow-400">
              Expert Hifz & Tajweed Teacher
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Master Quranic recitation, memorization, and Tajweed with personalized one-on-one lessons in your preferred language. From beginners to advanced students worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl">
              Start Free Trial Class
            </a>
            <a href="#programs" className="px-8 py-4 bg-transparent text-yellow-400 rounded-full font-bold border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
              View Programs
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Academy?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional Quran education with personalized attention and flexible learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white/5 rounded-2xl overflow-hidden border border-yellow-400/30 hover:border-yellow-400 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="relative w-full h-48">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              <span className="text-yellow-500">Our Quran Programs</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive courses designed for all levels and age groups
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-yellow-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{program.title}</h3>
                    <p className="text-slate-600 mb-3">{program.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>{program.levels}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-12 bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-8 border border-yellow-200">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-slate-900">Teaching Languages</h3>
            </div>
            <p className="text-slate-600 mb-6">
              Learn in your preferred language for better understanding and comfort
            </p>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-white rounded-full border border-yellow-200 text-slate-700 font-medium hover:bg-yellow-50 transition-colors">
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section id="teacher" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>Meet Your Teacher</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                <span className="text-yellow-500">Dr. Kaleem Ullah</span>
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Hafiz-e-Quran with over 13 years of dedicated teaching experience, currently pursuing final-year MBBS at Shaanxi Medical University, China. IELTS certified with expertise in teaching students worldwide.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 hover:text-yellow-600 transition-colors">Qualified Hafiz-e-Quran</h4>
                    <p className="text-slate-600">Completed Hifz at Madrasa Anwar ul Uloom, Sargodha</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 hover:text-yellow-600 transition-colors">Professional Tajweed Expert</h4>
                    <p className="text-slate-600">Specialized training in proper recitation rules</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 hover:text-yellow-600 transition-colors">International Experience</h4>
                    <p className="text-slate-600">Teaching students from diverse backgrounds worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 hover:text-yellow-600 transition-colors">IELTS Certified</h4>
                    <p className="text-slate-600">Demonstrated English proficiency for effective communication</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all">
                Schedule a Meeting
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-3xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Teaching Experience</h3>

              <div className="bg-white rounded-2xl p-6 mb-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Qur&apos;an Teacher</h4>
                    <p className="text-sm text-slate-600 mb-2">Big Academy, Islamabad, Pakistan</p>
                    <p className="text-xs text-yellow-600 font-medium">September 2011 — Present</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>Teaching Quran recitation and Hifz up to advanced levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>Professional Tajweed instruction for all age groups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>Multi-language instruction for international students</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Current Education</h4>
                    <p className="text-sm text-slate-600 mb-2">MBBS (Final Year)</p>
                    <p className="text-xs text-yellow-600 font-medium">Shaanxi Medical University, China</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black border-t border-yellow-400/30 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-400">
            Start Your Quran Learning Journey Today
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Book your free trial class and experience personalized Quran education
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="tel:+923322220000" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all border border-white/20">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-emerald-50">+92 332 222 0000</p>
            </a>

            <a href="mailto:kaleemullghallo@gmail.com" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all border border-white/20">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-emerald-50">kaleemullghallo@gmail.com</p>
            </a>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-emerald-50">Dera Ghazi Khan, Pakistan</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Book Your Free Trial Class</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:ring-2 focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:ring-2 focus:border-transparent outline-none"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:ring-2  focus:border-transparent outline-none"
              />
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:ring-2 focus:border-transparent outline-none">
                <option value="">Select Program</option>
                <option value="qaida">Qaida & Basic Reading</option>
                <option value="hifz">Hifz ul Quran</option>
                <option value="tajweed">Tajweed Mastery</option>
                <option value="translation">Quran Translation</option>
              </select>
              <select
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:ring-2 focus:border-transparent outline-none">
                <option value="">Preferred Language</option>
                <option value="english">English</option>
                <option value="urdu">Urdu</option>
                <option value="punjabi">Punjabi</option>
                <option value="chinese">Chinese</option>
                <option value="siraiki">Siraiki</option>
              </select>
              <textarea
                placeholder="Message (Optional)"
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:ring-2 focus:border-transparent outline-none resize-none"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="w-full px-6 py-4 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-500 transition-all shadow-lg">
                Request Free Trial Class
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-yellow-400/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-black" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-yellow-400">Al-Quran Academy</h3>
              <p className="text-sm text-gray-300">Learn • Memorize • Excel</p>
            </div>
          </div>

          <p className="text-gray-300 mb-6">
            Professional Quran education with Hafiz-e-Quran teacher • 13+ Years Experience
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <a href="mailto:kaleemullghallo@gmail.com" className="hover:text-yellow-400 transition-colors">
              kaleemullghallo@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+923477878172" className="hover:text-yellow-400 transition-colors">
              +92 347 787 8172
            </a>
            <span>•</span>
            <span>Dera Ghazi Khan, Pakistan</span>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-slate-500">
            © 2025 Al-Quran Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuranAcademy;
"use client"

import type React from "react"

import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, User } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Campus Address",
      details: [
        "BIMSR - Bangalore Institute of",
        "Management Science & Research",
        "Anekal, Bengaluru, Karnataka 562106",
        "India",
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone Numbers",
      details: ["Admissions: +91 8970002004", "General Inquiry: +91 962 060 2288", "WhatsApp: +91 8970002004"],
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Addresses",
      details: [
        "admissions@Bangaloreinstitutions.com",
        "info@bimsr.edu.in",
        "placement@bimsr.edu.in",
        "support@bimsr.edu.in",
      ],
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
        "Emergency: 24/7 Available",
      ],
    },
  ]

  const quickActions = [
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "WhatsApp Chat",
      description: "Get instant responses to your queries",
      action: "Chat Now",
      bgColor: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Schedule Campus Visit",
      description: "Book a personalized campus tour",
      action: "Book Visit",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <User className="h-8 w-8 text-white" />,
      title: "Talk to Counselor",
      description: "Speak with our admission experts",
      action: "Call Now",
      bgColor: "bg-orange-600 hover:bg-orange-700",
    },
  ]

  const programs = [
    "BCA + Full Stack + PGCCA",
    "BCA + Data Analytics + PGCCA",
    "BCA + Digital Marketing + PGCCA",
    "BBA + Digital Marketing + PGCBA",
    "BCOM + ACCA + PGCFM",
  ]

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Get In Touch</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Contact BIMSR</h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Ready to transform your future? Get in touch with our admission counselors for personalized guidance and
              support throughout your application process.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className={`${action.bgColor} rounded-xl p-6 text-white text-center cursor-pointer transition-all duration-300 transform hover:scale-105`}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {action.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{action.title}</h3>
              <p className="text-white/90 text-sm mb-4">{action.description}</p>
              <button className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                {action.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Send us a Message</h3>
              <p className="text-gray-600">
                Fill out the form below and our admission team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your questions or requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">Our team will contact you within 24 hours.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                  <p className="font-semibold">Failed to send message.</p>
                  <p className="text-sm">Please try again or contact us directly.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card p-6">
              <h4 className="font-semibold text-blue-800 mb-4">Find Us on Map</h4>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">BIMSR Campus, Anekal, Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Contact</h3>
          <p className="text-red-700 mb-4">
            For urgent matters outside office hours, please contact our emergency helpline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918970002004"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Emergency: +91 8970002004
            </a>
            <a
              href="mailto:emergency@bimsr.edu.in"
              className="bg-red-100 text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-red-200 transition-colors"
            >
              emergency@bimsr.edu.in
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <section id="contact" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-pink-900/10"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Our Store</h2>
            <p className="text-lg text-white/80 max-w-2xl">
              Come check out our latest collection in person or get in touch with us
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-white/80 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Store Location</h3>
                    <p className="text-white/70">
                      Ramgram-2, Parasi
                      <br />
                      Nawalparasi District
                      <br />
                      Lumbini, Nepal
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-white/80 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <a href="tel:+15551234567" className="text-white/70 hover:text-white transition-colors">
                      +977-9817470178
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-white/80 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <a href="mailto:info@brovibes.com" className="text-white/70 hover:text-white transition-colors">
                      brovibes48@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-white/80 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Store Hours</h3>
                    <div className="text-white/70 space-y-1">
                      <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 9:00 PM</p>
                      <p>Sunday: 12:00 PM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <div className="lg:sticky lg:top-8">
            <Card className="backdrop-blur-md bg-white/10 border-white/20 h-full min-h-[500px]">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  {!mapLoaded ? (
                    <div
                      className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                      onClick={() => setMapLoaded(true)}
                    >
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-white/60 mx-auto mb-4" />
                        <p className="text-white/80 font-medium">Click to Load Interactive Map</p>
                        <p className="text-sm text-white/60 mt-2">123 Fashion Street, Downtown District</p>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d866.0357478096948!2d83.66757326956923!3d27.53617599851757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDMyJzEwLjIiTiA4M8KwNDAnMDUuNiJF!5e1!3m2!1sen!2snp!4v1751119246759!5m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "500px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Store Location"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

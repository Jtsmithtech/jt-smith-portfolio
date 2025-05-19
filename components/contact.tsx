"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission is handled by Formspree
  }

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:bg-white">
          Get in Touch
        </h2>

        <div className="max-w-md mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl">
                <MessageSquare className="mr-2 h-6 w-6" />
                Send a Message
              </CardTitle>
              <CardDescription className="text-white/70 text-center">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                method="POST"
                action="https://formspree.io/f/meqnbzdb"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Contact request from JTSmithinfo.com" />

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-white/70" />
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                  </div>
                  <Input
                    id="email"
                    name="_replyto"
                    type="email"
                    placeholder="email@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/20 border-white/20 placeholder:text-white/50 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4 text-white/70" />
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/20 border-white/20 placeholder:text-white/50 text-white min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

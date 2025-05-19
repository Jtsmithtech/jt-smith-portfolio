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
    _replyto: "",
    message: "",
  })
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionStatus('submitting')

    try {
      const response = await fetch("https://formspree.io/f/meqnbzdb", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmissionStatus('success')
        setFormData({ _replyto: "", message: "" }) // Reset form
      } else {
        // Formspree might return errors in JSON format for AJAX requests
        // For simplicity, we'll just mark it as a generic error here.
        // You could parse response.json() for more details if needed.
        setSubmissionStatus('error')
      }
    } catch (error) {
      setSubmissionStatus('error')
    }
  }

  if (submissionStatus === 'success') {
    return (
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white p-8">
              <Mail className="mx-auto h-16 w-16 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-white/80 mb-6">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <Button 
                onClick={() => setSubmissionStatus('idle')} 
                className="bg-white text-primary hover:bg-white/90"
              >
                Send Another Message
              </Button>
            </Card>
          </div>
        </div>
      </section>
    )
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
                    value={formData._replyto}
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

                <Button 
                  type="submit" 
                  className="w-full bg-white text-primary hover:bg-white/90 disabled:opacity-70"
                  disabled={submissionStatus === 'submitting'}
                >
                  {submissionStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
                {submissionStatus === 'error' && (
                  <p className="text-center text-red-400 mt-2">
                    Oops! Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

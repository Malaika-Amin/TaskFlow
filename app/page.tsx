
import ContactForm from "@/components/sections/ContactForm";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";


import React from 'react'

export default function page() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ContactForm />
      </main>
    </>
  )
}

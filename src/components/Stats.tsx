"use client"

import { useState, useEffect } from "react"

interface StatCounterProps {
  number: number
  label: string
}

function StatCounter({ number, label }: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 50
    const stepValue = number / steps
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current > number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [number])

  return (
    <div className="card p-6 text-center">
      <span className="text-3xl md:text-4xl font-bold text-blue-600">{count.toLocaleString()}</span>
      <p className="text-sm text-gray-600 mt-2">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatCounter number={5000} label="Students" />
          <StatCounter number={200} label="Faculty" />
          <StatCounter number={50} label="Programs" />
          <StatCounter number={98} label="Placement Rate %" />
        </div>
      </div>
    </section>
  )
}

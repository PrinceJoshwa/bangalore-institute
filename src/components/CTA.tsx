export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                Your Future Starts Here
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
                Join Us at Starlight Institute
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Take the first step towards a successful career. Apply now for the upcoming academic session and become
                part of our vibrant community.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary px-8 py-3 text-lg">Apply Now</button>
              <button className="btn btn-secondary px-8 py-3 text-lg">Download Brochure</button>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Happy students at university"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

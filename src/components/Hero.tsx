export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-600 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="University campus background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center px-4">
        <div className="space-y-6">
          <div className="inline-block rounded-lg bg-blue-500/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
            Welcome to Excellence
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            Bangalore Institute Of Management Science and Research
          </h1>
          <p className="max-w-[600px] text-white/90 md:text-xl">
            Empowering Future Innovators with cutting-edge education, world-class facilities, and industry connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
              Apply Now
            </button>
            <button className="btn btn-secondary text-white border-white hover:bg-blue-700 px-8 py-3 text-lg">
              Explore Programs
            </button>
          </div>
        </div>
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80"
            alt="Modern university campus building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

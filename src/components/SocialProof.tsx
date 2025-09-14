import clientLogos from "@/assets/client-logos.jpg";

const SocialProof = () => {
  const stats = [
    {
      number: "10×",
      label: "Faster workflows",
      description: "Average time saved"
    },
    {
      number: "99.9%",
      label: "Uptime guarantee",
      description: "Enterprise-grade reliability"
    },
    {
      number: "5k+",
      label: "Emails sent daily",
      description: "Automated notifications"
    }
  ];

  return (
    <section className="section-light section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Trusted by <span className="text-primary">Innovators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of content creators and marketers who've streamlined their workflow with RenderWeb.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <div className="flex justify-center">
            <img
              src={clientLogos}
              alt="Trusted by leading companies"
              className="w-full max-w-2xl h-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <div className="stat-number mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <div className="card-elevated max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "RenderWeb transformed our content strategy. We're publishing 3x more content 
              with half the effort, and never miss a lead thanks to instant alerts."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                SM
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Mitchell</div>
                <div className="text-sm text-muted-foreground">Marketing Director, TechFlow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
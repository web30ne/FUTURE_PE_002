import { Button } from "@/components/ui/button";
import aiContentIcon from "@/assets/ai-content-icon.jpg";
import alertsIcon from "@/assets/alerts-icon.jpg";
import templatesIcon from "@/assets/templates-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: aiContentIcon,
      title: "AI Content Writer",
      description: "Automatically generate high-quality articles, blog posts, and marketing copy with advanced AI that understands your brand voice.",
      benefits: ["SEO-optimized content", "Multiple formats", "Brand voice training"]
    },
    {
      icon: alertsIcon,
      title: "Automated Alerts",
      description: "Get instant Slack, email, or webhook alerts when prospects submit forms or take important actions on your site.",
      benefits: ["Real-time notifications", "Multi-channel alerts", "Custom triggers"]
    },
    {
      icon: templatesIcon,
      title: "Smart Templates",
      description: "Use AI-powered templates to streamline your content publishing workflow and maintain consistency across all channels.",
      benefits: ["Pre-built templates", "AI suggestions", "Version control"]
    }
  ];

  return (
    <section className="section-medium section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features to{" "}
            <span className="text-primary">Accelerate Your Workflow</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to create, publish, and monitor your content in one intelligent platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="card-feature group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2 mb-6">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Button variant="ghost" className="text-primary hover:bg-primary/5">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="btn-secondary" size="lg">
            Try All Features Free
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            14-day free trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
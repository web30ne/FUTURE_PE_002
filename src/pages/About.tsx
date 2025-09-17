import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-primary">RenderWeb</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're building the future of AI-powered content automation, helping teams save time and never miss important opportunities.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At RenderWeb, we believe that every team should have access to powerful AI tools that enhance productivity without overwhelming complexity. Our mission is to democratize AI-powered content creation and automation for businesses of all sizes.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded in 2024, we've helped over 1,000 companies streamline their content workflows and never miss a lead with our intelligent alert systems.
              </p>
              <Button className="btn-hero">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Vision</h3>
                    <p className="text-sm text-muted-foreground">AI-first content automation for everyone</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Values</h3>
                    <p className="text-sm text-muted-foreground">Innovation, simplicity, and customer success</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Impact</h3>
                    <p className="text-sm text-muted-foreground">10+ hours saved per week for every user</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-accent-light">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-muted-foreground mb-4">CEO & Co-Founder</p>
              <p className="text-sm text-muted-foreground">
                Former AI researcher with 10+ years in ML and automation systems.
              </p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">JS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-muted-foreground mb-4">CTO & Co-Founder</p>
              <p className="text-sm text-muted-foreground">
                Full-stack engineer passionate about building scalable AI solutions.
              </p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">MW</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mike Wilson</h3>
              <p className="text-muted-foreground mb-4">Head of Product</p>
              <p className="text-sm text-muted-foreground">
                Product strategist focused on user experience and product-market fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <div className="card-elevated max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform your content workflow? Let's build the future of AI automation together.
            </p>
            <Button className="btn-hero" onClick={() => window.location.href = '/#contact'}>
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
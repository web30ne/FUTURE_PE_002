import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Heart, Zap, Trophy } from 'lucide-react';

const Careers = () => {
  const openRoles = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering", 
      location: "Remote",
      type: "Full-time",
      description: "Build scalable AI-powered web applications using React, Node.js, and modern cloud technologies."
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "San Francisco, CA", 
      type: "Full-time",
      description: "Develop and deploy machine learning models for content generation and automation systems."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time", 
      description: "Create intuitive user experiences for complex AI tools and automation workflows."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "New York, NY",
      type: "Full-time",
      description: "Help enterprise customers maximize value from RenderWeb's automation platform."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness stipend"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Remote-First Culture", 
      description: "Work from anywhere with flexible hours and quarterly team retreats"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, and mentorship programs"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Equity & Bonuses",
      description: "Competitive equity package and performance-based bonuses"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Help us build the future of AI-powered content automation. Work with cutting-edge technology and passionate people.
          </p>
          <Badge variant="secondary" className="mb-4">
            We're hiring! 4 open positions
          </Badge>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why RenderWeb?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a fast-growing startup where your work directly impacts thousands of users and shapes the future of AI automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-elevated text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-accent-light">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground">
              Can't find the right role? Send us your resume anyway - we're always looking for exceptional talent.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <div key={index} className="card-elevated">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{role.title}</h3>
                      <Badge variant="outline">{role.department}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{role.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {role.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {role.type}
                      </div>
                    </div>
                  </div>
                  <Button className="btn-outline">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in a fair, transparent process that respects your time while ensuring the right fit for both sides.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Application</h3>
              <p className="text-sm text-muted-foreground">Submit your resume and cover letter through our portal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Phone Screen</h3>
              <p className="text-sm text-muted-foreground">30-minute chat with our talent team about your background</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Technical Round</h3>
              <p className="text-sm text-muted-foreground">Role-specific interview with the hiring manager and team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Final Interview</h3>
              <p className="text-sm text-muted-foreground">Culture fit and leadership discussion with founders</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-narrow text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-muted-foreground mb-8">
              Don't see a perfect match? We're always interested in hearing from talented people. Send us your resume!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                View All Positions
              </Button>
              <Button variant="outline" onClick={() => window.location.href = 'mailto:careers@renderweb.ai'}>
                Send Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
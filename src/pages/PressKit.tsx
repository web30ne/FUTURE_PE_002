import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Image, FileText, Video, Link2 } from 'lucide-react';

const PressKit = () => {
  const assets = [
    {
      category: "Logos",
      items: [
        { name: "RenderWeb Logo (PNG)", size: "2.3 MB", format: "PNG" },
        { name: "RenderWeb Logo (SVG)", size: "45 KB", format: "SVG" },
        { name: "Logo Dark Version", size: "1.8 MB", format: "PNG" },
        { name: "Logo Icon Only", size: "892 KB", format: "PNG" },
        { name: "Logo Horizontal", size: "1.2 MB", format: "PNG" }
      ]
    },
    {
      category: "Screenshots", 
      items: [
        { name: "Dashboard Overview", size: "4.1 MB", format: "PNG" },
        { name: "AI Content Generator", size: "3.7 MB", format: "PNG" },
        { name: "Alert System Interface", size: "2.9 MB", format: "PNG" },
        { name: "Analytics Dashboard", size: "3.2 MB", format: "PNG" },
        { name: "Mobile App Interface", size: "2.1 MB", format: "PNG" }
      ]
    },
    {
      category: "Brand Guidelines",
      items: [
        { name: "Brand Style Guide", size: "8.4 MB", format: "PDF" },
        { name: "Logo Usage Guidelines", size: "2.1 MB", format: "PDF" },
        { name: "Color Palette", size: "1.3 MB", format: "PDF" },
        { name: "Typography Guide", size: "1.8 MB", format: "PDF" }
      ]
    }
  ];

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      bio: "Former AI researcher with 10+ years in machine learning and automation systems. Previously at Google AI and OpenAI.",
      image: "/assets/team-john.jpg"
    },
    {
      name: "Jane Smith", 
      role: "CTO & Co-Founder",
      bio: "Full-stack engineer passionate about building scalable AI solutions. Former engineering lead at Stripe and Airbnb.",
      image: "/assets/team-jane.jpg"
    },
    {
      name: "Mike Wilson",
      role: "Head of Product",
      bio: "Product strategist focused on user experience and product-market fit. Previously at Figma and Notion.",
      image: "/assets/team-mike.jpg"
    }
  ];

  const factSheet = {
    founded: "2024",
    headquarters: "San Francisco, CA",
    employees: "25-50",
    funding: "Series A",
    customers: "1,000+",
    integrations: "50+",
    uptime: "99.9%"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Press <span className="text-primary">Kit</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Download high-quality assets, company information, and resources for media coverage and partnerships.
          </p>
          <Button className="btn-hero">
            <Download className="w-4 h-4 mr-2" />
            Download Complete Press Kit
          </Button>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About RenderWeb</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  RenderWeb is a leading AI-powered content automation platform that helps businesses streamline their content creation and lead management processes. Founded in 2024, we're democratizing access to advanced AI tools for companies of all sizes.
                </p>
                <p>
                  Our platform combines cutting-edge artificial intelligence with intuitive design to help teams save 10+ hours per week on content creation while never missing important leads through our intelligent alert system.
                </p>
                <p>
                  Trusted by over 1,000 companies worldwide, RenderWeb integrates with 50+ popular tools and platforms to create seamless automation workflows that boost productivity and drive growth.
                </p>
              </div>
            </div>
            
            <div className="card-elevated">
              <h3 className="text-xl font-bold mb-6">Company Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">{factSheet.founded}</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{factSheet.employees}</div>
                  <div className="text-sm text-muted-foreground">Employees</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{factSheet.customers}</div>
                  <div className="text-sm text-muted-foreground">Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{factSheet.integrations}</div>
                  <div className="text-sm text-muted-foreground">Integrations</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="text-sm text-muted-foreground">
                  <strong>Headquarters:</strong> {factSheet.headquarters}<br />
                  <strong>Funding Stage:</strong> {factSheet.funding}<br />
                  <strong>Service Uptime:</strong> {factSheet.uptime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-accent-light">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">
              Meet the team building the future of AI-powered content automation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-elevated text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Assets */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Press Assets</h2>
            <p className="text-muted-foreground">
              High-resolution logos, screenshots, and brand materials for media use.
            </p>
          </div>

          <div className="space-y-12">
            {assets.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="card-elevated">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {item.format === 'PDF' ? <FileText className="w-6 h-6 text-primary" /> :
                           item.format === 'SVG' || item.format === 'PNG' ? <Image className="w-6 h-6 text-primary" /> :
                           <Video className="w-6 h-6 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{item.format}</span>
                            <span>•</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="section-padding bg-accent-light">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Coverage</h2>
            <p className="text-muted-foreground">
              Recent media mentions and press coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated">
              <h4 className="font-semibold mb-2">"RenderWeb Raises $5M Series A"</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                TechCrunch covers RenderWeb's Series A funding round and expansion plans for AI automation tools.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">TechCrunch • Jan 10, 2025</span>
                <Button variant="outline" size="sm">
                  <Link2 className="w-4 h-4 mr-2" />
                  Read
                </Button>
              </div>
            </div>
            
            <div className="card-elevated">
              <h4 className="font-semibold mb-2">"The Future of Content Automation"</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Forbes features RenderWeb in their analysis of emerging AI tools transforming content creation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Forbes • Dec 28, 2024</span>
                <Button variant="outline" size="sm">
                  <Link2 className="w-4 h-4 mr-2" />
                  Read
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="card-elevated max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
            <p className="text-muted-foreground mb-8">
              For press inquiries, interviews, or additional information, please contact our media team.
            </p>
            
            <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <div>
                <strong>Press Contact:</strong><br />
                <span className="text-muted-foreground">Sarah Johnson, Head of Communications</span>
              </div>
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:press@renderweb.ai" className="text-primary hover:underline">press@renderweb.ai</a>
              </div>
              <div>
                <strong>Phone:</strong><br />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Contact Press Team
              </Button>
              <Button variant="outline">
                Schedule Interview
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressKit;
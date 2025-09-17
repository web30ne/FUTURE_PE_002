import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ExternalLink, Zap, ArrowRight } from 'lucide-react';

const Integrations = () => {
  const featured = [
    {
      name: "Zapier",
      description: "Connect RenderWeb to 5,000+ apps with no-code automation workflows",
      category: "Automation",
      status: "Available",
      logo: "⚡",
      features: ["Trigger workflows", "Multi-step automation", "Custom logic"],
      popular: true
    },
    {
      name: "Slack",
      description: "Get instant notifications and generate content directly in Slack",
      category: "Communication", 
      status: "Available",
      logo: "💬",
      features: ["Real-time alerts", "Slash commands", "Team collaboration"],
      popular: true
    },
    {
      name: "WordPress",
      description: "Auto-publish AI-generated content directly to your WordPress site",
      category: "CMS",
      status: "Available", 
      logo: "📝",
      features: ["Auto-publishing", "SEO optimization", "Custom templates"],
      popular: true
    }
  ];

  const integrations = [
    {
      name: "HubSpot",
      description: "Sync leads and automate marketing workflows",
      category: "CRM",
      status: "Available",
      logo: "🎯"
    },
    {
      name: "Salesforce",
      description: "Enterprise CRM integration for lead management",
      category: "CRM", 
      status: "Available",
      logo: "☁️"
    },
    {
      name: "Mailchimp",
      description: "Automated email campaigns with AI-generated content",
      category: "Email Marketing",
      status: "Available",
      logo: "📧"
    },
    {
      name: "Google Sheets",
      description: "Export data and trigger automations from spreadsheets",
      category: "Productivity",
      status: "Available",
      logo: "📊"
    },
    {
      name: "Notion",
      description: "Create and update Notion pages with AI content",
      category: "Productivity",
      status: "Available", 
      logo: "📋"
    },
    {
      name: "Airtable",
      description: "Sync records and automate database workflows",
      category: "Database",
      status: "Available",
      logo: "🗃️"
    },
    {
      name: "Discord",
      description: "Bot integration for community management and alerts",
      category: "Communication",
      status: "Beta",
      logo: "🎮"
    },
    {
      name: "Shopify", 
      description: "E-commerce automation for product descriptions and marketing",
      category: "E-commerce",
      status: "Coming Soon",
      logo: "🛍️"
    },
    {
      name: "Linear",
      description: "Project management integration for development teams", 
      category: "Project Management",
      status: "Coming Soon",
      logo: "📐"
    }
  ];

  const categories = ["All", "Automation", "CRM", "Communication", "Productivity", "E-commerce", "Project Management"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-primary">Integrations</span> That Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect RenderWeb with your favorite tools and platforms. Build powerful automation workflows in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Browse All Integrations
            </Button>
            <Button variant="outline">
              Request Integration
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-accent-light">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="stat-number">50+</div>
              <p className="text-muted-foreground">Available Integrations</p>
            </div>
            <div>
              <div className="stat-number">5,000+</div>
              <p className="text-muted-foreground">Apps via Zapier</p>
            </div>
            <div>
              <div className="stat-number">99.9%</div>
              <p className="text-muted-foreground">Uptime SLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most Popular</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These integrations are used by thousands of teams to automate their workflows and save time.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featured.map((integration, index) => (
              <div key={index} className="card-feature relative">
                {integration.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <div className="text-6xl mb-4">{integration.logo}</div>
                <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                <p className="text-muted-foreground mb-6">{integration.description}</p>
                
                <div className="space-y-3 mb-8">
                  {integration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline">{integration.category}</Badge>
                  <Button className="btn-outline">
                    Connect
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Integrations */}
      <section className="section-padding bg-accent-light">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Integrations</h2>
            <p className="text-muted-foreground">
              Browse our complete catalog of integrations and automations.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Integration Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl flex-shrink-0">{integration.logo}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{integration.name}</h3>
                      <Badge 
                        variant={integration.status === 'Available' ? 'secondary' : 
                                integration.status === 'Beta' ? 'default' : 'outline'}
                        className="text-xs"
                      >
                        {integration.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {integration.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {integration.category}
                      </span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        disabled={integration.status === 'Coming Soon'}
                      >
                        {integration.status === 'Coming Soon' ? 'Soon' : 'Connect'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="card-elevated max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Custom Integration</h2>
                <p className="text-muted-foreground mb-6">
                  Don't see your tool listed? Our team can build custom integrations for enterprise customers or work with you to add it to our public catalog.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Custom API development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>White-label solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Enterprise support & SLA</span>
                  </li>
                </ul>
                <Button className="btn-hero">
                  Request Custom Integration
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">🔧</div>
                <h4 className="text-xl font-semibold mb-2">Build Your Own</h4>
                <p className="text-muted-foreground mb-4">
                  Use our powerful API to create custom integrations and automations.
                </p>
                <Button variant="outline">
                  View API Docs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen, MessageCircle, Video, FileText, HelpCircle, ArrowRight } from 'lucide-react';

const HelpCenter = () => {
  const categories = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Getting Started",
      description: "Learn the basics and set up your account",
      articleCount: 12,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "AI Content Generation", 
      description: "Master AI-powered content creation tools",
      articleCount: 18,
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Alerts & Automation",
      description: "Set up notifications and automated workflows", 
      articleCount: 15,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "API Documentation",
      description: "Technical guides for developers and integrations",
      articleCount: 24,
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const popularArticles = [
    "How to create your first AI content template",
    "Setting up Zapier integrations",
    "Understanding credit usage and billing",
    "Troubleshooting common API errors",
    "Best practices for content automation",
    "Managing team permissions and access"
  ];

  const recentUpdates = [
    {
      title: "New AI Models Available",
      date: "Jan 15, 2025",
      category: "Product Updates"
    },
    {
      title: "Enhanced Slack Integration",
      date: "Jan 12, 2025", 
      category: "Integrations"
    },
    {
      title: "API Rate Limit Changes",
      date: "Jan 10, 2025",
      category: "API"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Help <span className="text-primary">Center</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers, learn best practices, and get the most out of RenderWeb's AI automation platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for articles, guides, or FAQs..."
                className="pl-12 py-4 text-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {['Getting Started', 'Billing', 'API', 'Integrations', 'Troubleshooting'].map((tag) => (
              <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-accent-light">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
              <p className="text-muted-foreground mb-4">
                Get help from our support team within 2 hours
              </p>
              <Button className="btn-outline">
                Start Chat
              </Button>
            </div>
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
              <p className="text-muted-foreground mb-4">
                Step-by-step guides to get you up and running
              </p>
              <Button className="btn-outline">
                Watch Videos
              </Button>
            </div>
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">FAQ</h3>
              <p className="text-muted-foreground mb-4">
                Quick answers to the most common questions
              </p>
              <Button className="btn-outline">
                View FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground">
              Find detailed guides and documentation for every aspect of RenderWeb.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="card-elevated group cursor-pointer hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {category.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {category.articleCount} articles
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="section-padding bg-accent-light">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="card-elevated group cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {article}
                        </h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Recent Updates</h3>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="card-elevated">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {update.category}
                    </Badge>
                    <h4 className="font-semibold mb-1">{update.title}</h4>
                    <p className="text-sm text-muted-foreground">{update.date}</p>
                  </div>
                ))}
              </div>

              <div className="card-elevated mt-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h4 className="font-semibold mb-2">Still need help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <Button className="w-full btn-hero">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status and Community */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Status</h3>
              <p className="text-muted-foreground mb-4">
                All systems operational. Check our status page for real-time updates.
              </p>
              <Button variant="outline">
                View Status Page
              </Button>
            </div>
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
              <p className="text-muted-foreground mb-4">
                Connect with other users, share tips, and get answers from the community.
              </p>
              <Button variant="outline">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
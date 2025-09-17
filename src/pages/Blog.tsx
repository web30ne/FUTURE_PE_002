import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI-Powered Content Automation",
    excerpt: "How artificial intelligence is revolutionizing content creation and what it means for businesses in 2025.",
    author: "John Doe",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "AI & Technology",
    image: "/assets/blog-featured.jpg"
  };

  const blogPosts = [
    {
      title: "10 Ways RenderWeb Saves You 10+ Hours Per Week",
      excerpt: "Discover the top automation workflows that are helping teams reclaim their most valuable resource: time.",
      author: "Jane Smith",
      date: "January 12, 2025", 
      readTime: "7 min read",
      category: "Productivity",
      image: "/assets/blog-1.jpg"
    },
    {
      title: "Building Scalable Alert Systems: Lessons Learned",
      excerpt: "Technical deep-dive into how we built our real-time notification system to handle millions of events.",
      author: "Mike Wilson", 
      date: "January 10, 2025",
      readTime: "12 min read",
      category: "Engineering",
      image: "/assets/blog-2.jpg"
    },
    {
      title: "Customer Spotlight: How Acme Corp Automated Their Content",
      excerpt: "A case study on how one company reduced content creation time by 80% using RenderWeb's AI tools.",
      author: "Sarah Chen",
      date: "January 8, 2025",
      readTime: "6 min read", 
      category: "Case Study",
      image: "/assets/blog-3.jpg"
    },
    {
      title: "The ROI of AI: Calculating Content Automation Benefits",
      excerpt: "A practical guide to measuring the business impact of AI-powered content automation tools.",
      author: "David Park",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Business",
      image: "/assets/blog-4.jpg"
    },
    {
      title: "API First: How We Built RenderWeb for Developers",
      excerpt: "Behind the scenes look at our API-first architecture and why developer experience matters.",
      author: "Lisa Rodriguez", 
      date: "January 3, 2025",
      readTime: "11 min read",
      category: "Engineering", 
      image: "/assets/blog-5.jpg"
    },
    {
      title: "2025 Content Marketing Trends: What to Expect",
      excerpt: "Our predictions for content marketing trends and how AI will shape the industry this year.",
      author: "John Doe",
      date: "January 1, 2025",
      readTime: "8 min read",
      category: "Marketing",
      image: "/assets/blog-6.jpg"
    }
  ];

  const categories = ["All", "AI & Technology", "Productivity", "Engineering", "Business", "Case Study", "Marketing"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            RenderWeb <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights on AI, automation, productivity, and the future of content creation.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="card-elevated overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6 p-8 lg:p-12">
                <div className="flex items-center gap-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <span className="text-sm text-muted-foreground">Featured Post</span>
                </div>
                <h2 className="text-3xl font-bold">{featuredPost.title}</h2>
                <p className="text-muted-foreground text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="btn-hero">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 lg:rounded-r-xl flex items-center justify-center min-h-[300px]">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📝</span>
                  </div>
                  <p>Featured Article Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50">
        <div className="container-narrow">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card-elevated group cursor-pointer">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video rounded-t-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xl">📄</span>
                    </div>
                    <p className="text-sm">Article Image</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-narrow text-center">
          <div className="card-elevated max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on AI, automation, and productivity delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1"
              />
              <Button className="btn-hero">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. Read our <a href="/privacy" className="text-primary hover:underline">privacy policy</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
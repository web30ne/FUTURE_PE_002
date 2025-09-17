import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Users, BookOpen, Star, ExternalLink, Calendar, TrendingUp } from 'lucide-react';

const Community = () => {
  const stats = [
    { label: "Active Members", value: "2,847", icon: <Users className="w-5 h-5" /> },
    { label: "Discussions", value: "1,293", icon: <MessageCircle className="w-5 h-5" /> },
    { label: "Solutions Shared", value: "4,156", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Success Stories", value: "178", icon: <Star className="w-5 h-5" /> }
  ];

  const categories = [
    {
      name: "General Discussion",
      description: "Share ideas, ask questions, and connect with the community",
      posts: 234,
      members: 1847,
      color: "bg-blue-500"
    },
    {
      name: "AI & Automation",
      description: "Discuss AI content strategies and automation workflows",
      posts: 189,
      members: 1203,
      color: "bg-green-500"
    },
    {
      name: "Feature Requests",
      description: "Suggest new features and vote on community proposals",
      posts: 97,
      members: 892,
      color: "bg-purple-500"
    },
    {
      name: "Integrations",
      description: "Help with third-party integrations and API questions",
      posts: 156,
      members: 675,
      color: "bg-orange-500"
    },
    {
      name: "Success Stories",
      description: "Share your wins and learn from other users' experiences",
      posts: 78,
      members: 543,
      color: "bg-pink-500"
    },
    {
      name: "Troubleshooting",
      description: "Get help with technical issues and errors", 
      posts: 312,
      members: 1456,
      color: "bg-red-500"
    }
  ];

  const featuredPosts = [
    {
      title: "How we automated 90% of our content workflow",
      author: "Sarah Chen",
      category: "Success Stories",
      replies: 23,
      likes: 87,
      time: "2 hours ago",
      featured: true
    },
    {
      title: "Best practices for Zapier + RenderWeb integration",
      author: "Mike Rodriguez",
      category: "Integrations", 
      replies: 15,
      likes: 42,
      time: "4 hours ago",
      featured: false
    },
    {
      title: "New AI model comparison - GPT-4 vs Claude",
      author: "Alex Park",
      category: "AI & Automation",
      replies: 31,
      likes: 68,
      time: "6 hours ago",
      featured: true
    }
  ];

  const upcomingEvents = [
    {
      title: "Community Office Hours",
      date: "Jan 18, 2025",
      time: "2:00 PM PST",
      type: "Virtual Meetup"
    },
    {
      title: "AI Content Strategy Workshop", 
      date: "Jan 22, 2025",
      time: "10:00 AM PST",
      type: "Workshop"
    },
    {
      title: "Monthly Community Showcase",
      date: "Jan 30, 2025", 
      time: "1:00 PM PST",
      type: "Showcase"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            RenderWeb <span className="text-primary">Community</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with fellow users, share knowledge, and learn best practices for AI automation and content creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Join Community <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline">
              Browse Discussions
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-accent-light">
        <div className="container-narrow">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card-elevated text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Featured Discussions</h2>
                <Button variant="outline">View All</Button>
              </div>

              <div className="space-y-4">
                {featuredPosts.map((post, index) => (
                  <div key={index} className="card-elevated group cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {post.featured && <Badge className="bg-primary">Featured</Badge>}
                          <Badge variant="outline">{post.category}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>by {post.author}</span>
                          <span>{post.time}</span>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {post.replies}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {post.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div className="card-elevated">
                <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-primary" />
                        <Badge variant="outline" className="text-xs">{event.type}</Badge>
                      </div>
                      <h4 className="font-semibold text-sm">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">{event.date} at {event.time}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Events
                </Button>
              </div>

              {/* Quick Links */}
              <div className="card-elevated">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm hover:text-primary transition-colors">Community Guidelines</a>
                  <a href="#" className="block text-sm hover:text-primary transition-colors">How to Get Help</a>
                  <a href="#" className="block text-sm hover:text-primary transition-colors">Feature Request Process</a>
                  <a href="#" className="block text-sm hover:text-primary transition-colors">Success Story Template</a>
                  <a href="#" className="block text-sm hover:text-primary transition-colors">Community Moderators</a>
                </div>
              </div>

              {/* Top Contributors */}
              <div className="card-elevated">
                <h3 className="text-xl font-bold mb-4">Top Contributors</h3>
                <div className="space-y-3">
                  {['Sarah Chen', 'Mike Rodriguez', 'Alex Park'].map((name, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">{name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{name}</div>
                        <div className="text-xs text-muted-foreground">{50 - index * 10} helpful answers</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-accent-light">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discussion Categories</h2>
            <p className="text-muted-foreground">
              Explore different topics and find the conversations that interest you most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="card-elevated group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`w-4 h-4 rounded-full ${category.color} mt-1 flex-shrink-0`}></div>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{category.posts} posts</span>
                      <span>{category.members} members</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <div className="card-elevated max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-muted-foreground mb-8">
              Become part of a growing community of creators, developers, and automation enthusiasts. Share your knowledge, learn from others, and help shape the future of AI-powered content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Join Community Forum
              </Button>
              <Button variant="outline">
                Join Discord Server
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Free to join • Community guidelines apply
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
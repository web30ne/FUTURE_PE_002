import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Copy, Play, Book, Zap, Shield } from 'lucide-react';

const ApiDocs = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/content/generate',
      description: 'Generate AI content based on prompts and templates',
      auth: true
    },
    {
      method: 'GET', 
      path: '/api/v1/content/{id}',
      description: 'Retrieve generated content by ID',
      auth: true
    },
    {
      method: 'POST',
      path: '/api/v1/alerts/create', 
      description: 'Create a new alert webhook',
      auth: true
    },
    {
      method: 'GET',
      path: '/api/v1/alerts',
      description: 'List all active alerts for your account',
      auth: true
    },
    {
      method: 'DELETE',
      path: '/api/v1/alerts/{id}',
      description: 'Delete an existing alert',
      auth: true
    }
  ];

  const quickStart = `curl -X POST "https://api.renderweb.ai/v1/content/generate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "template": "blog-post",
    "prompt": "Write about AI automation benefits",
    "parameters": {
      "tone": "professional",
      "length": "medium"
    }
  }'`;

  const response = `{
  "id": "content_abc123",
  "status": "completed",
  "content": "AI automation is revolutionizing...",
  "created_at": "2025-01-15T10:30:00Z",
  "usage": {
    "tokens": 1250,
    "cost": 0.025
  }
}`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            RenderWeb <span className="text-primary">API</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Powerful REST API for AI content generation and automation. Build custom integrations and workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              <Play className="w-4 h-4 mr-2" />
              Try API Now
            </Button>
            <Button variant="outline">
              <Book className="w-4 h-4 mr-2" />
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">API Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to integrate AI-powered content automation into your applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Average response time under 2 seconds for content generation requests.
              </p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                SOC 2 compliant with API key authentication and rate limiting.
              </p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Developer Friendly</h3>
              <p className="text-sm text-muted-foreground">
                RESTful design with comprehensive SDKs and interactive docs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="section-padding bg-accent-light">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Get Your API Key</h4>
                    <p className="text-sm text-muted-foreground">Sign up and generate your API key from the dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Make Your First Request</h4>
                    <p className="text-sm text-muted-foreground">Try the content generation endpoint with a simple prompt</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Integrate & Scale</h4>
                    <p className="text-sm text-muted-foreground">Build your application with our comprehensive API</p>
                  </div>
                </div>
              </div>
              <Button className="btn-hero">
                Get API Key
              </Button>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Request Example</h4>
                  <Button variant="outline" size="sm">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
                <div className="bg-card border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{quickStart}</pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Response Example</h4>
                <div className="bg-card border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{response}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 text-center">API Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="card-elevated">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Badge 
                      variant={endpoint.method === 'GET' ? 'secondary' : 
                              endpoint.method === 'POST' ? 'default' : 'destructive'}
                      className="font-mono"
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="font-mono text-sm bg-muted px-2 py-1 rounded">
                      {endpoint.path}
                    </code>
                    {endpoint.auth && <Badge variant="outline" className="text-xs">Auth Required</Badge>}
                  </div>
                  <div className="lg:flex-1 lg:text-right">
                    <p className="text-muted-foreground">{endpoint.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs & Tools */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold mb-8">SDKs & Tools</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {['JavaScript', 'Python', 'PHP', 'Ruby'].map((lang) => (
              <div key={lang} className="card-elevated">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{lang} SDK</h3>
                <Button variant="outline" size="sm">
                  Install
                </Button>
              </div>
            ))}
          </div>
          
          <div className="card-elevated max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Our developer support team is here to help you integrate RenderWeb API into your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Contact Support
              </Button>
              <Button variant="outline">
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocs;
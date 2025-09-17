import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWebhookConfig, setShowWebhookConfig] = useState(false);
  const { toast } = useToast();

  // Helper function to get UTM parameters
  const getUtmParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || ''
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const utmParams = getUtmParams();
      
      // Create enhanced email content
      const emailSubject = formData.subject || `Contact Form: ${formData.name}`;
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject || 'Contact Form Submission'}

Message:
${formData.message}

UTM Parameters:
- Source: ${utmParams.utm_source || 'Direct'}
- Medium: ${utmParams.utm_medium || 'Direct'}
- Campaign: ${utmParams.utm_campaign || 'None'}
- Term: ${utmParams.utm_term || 'None'}
- Content: ${utmParams.utm_content || 'None'}

---
Submitted from: ${window.location.href}
Page URL: ${window.location.pathname}
Referrer: ${document.referrer || 'Direct'}
Timestamp: ${new Date().toLocaleString()}
User Agent: ${navigator.userAgent}
      `.trim();

      // Open mailto link
      const mailtoUrl = `mailto:directmail.eno@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoUrl, '_blank');

      // Send enhanced data to Zapier webhook if configured
      if (webhookUrl) {
        try {
          const payload = {
            ...formData,
            ...utmParams,
            timestamp: new Date().toISOString(),
            source: "website_contact_form",
            page_url: window.location.href,
            page_path: window.location.pathname,
            referrer: document.referrer || 'direct',
            user_agent: navigator.userAgent,
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            viewport_size: `${window.innerWidth}x${window.innerHeight}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: navigator.language,
            lead_score: calculateLeadScore(formData),
            form_version: "2.0"
          };

          await fetch(webhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify(payload),
          });
          console.log("Enhanced Zapier webhook triggered successfully", payload);
        } catch (webhookError) {
          console.error("Zapier webhook error:", webhookError);
        }
      }

      toast({
        title: "Message sent!",
        description: webhookUrl 
          ? "Email opened and Zapier automation triggered. We'll get back to you within 24 hours."
          : "Email client opened. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({ 
        name: "", 
        email: "", 
        company: "", 
        phone: "", 
        subject: "", 
        message: "" 
      });

    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lead scoring function
  const calculateLeadScore = (data: typeof formData) => {
    let score = 0;
    if (data.company) score += 20;
    if (data.phone) score += 15;
    if (data.message.length > 50) score += 10;
    if (data.email.includes('@')) score += 5;
    if (data.subject.toLowerCase().includes('trial') || data.subject.toLowerCase().includes('demo')) score += 25;
    return Math.min(score, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="section-medium section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your content workflow? Let's talk about how RenderWeb can help your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="card-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="form-label">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="form-label">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="form-label">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="form-label">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="form-label">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="What can we help you with?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="form-label">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input min-h-[120px] resize-y"
                  placeholder="Tell us about your project, requirements, or questions..."
                />
              </div>

              {/* Zapier Configuration */}
              <div className="border-t pt-4">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowWebhookConfig(!showWebhookConfig)}
                  className="text-sm text-muted-foreground mb-3"
                >
                  {showWebhookConfig ? "Hide" : "Show"} Zapier Integration
                </Button>
                
                {showWebhookConfig && (
                  <div>
                    <Label htmlFor="webhook" className="form-label text-sm">
                      Zapier Webhook URL (Optional)
                    </Label>
                    <Input
                      id="webhook"
                      type="url"
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      className="form-input"
                      placeholder="https://hooks.zapier.com/hooks/catch/..."
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Connect your Zapier automation to receive form submissions
                    </p>
                  </div>
                )}
              </div>

              <Button 
                type="submit"
                className="btn-hero w-full"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Why choose RenderWeb?</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Save 10+ hours per week on content creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Never miss a lead with instant notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Scale your content strategy without hiring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enterprise-grade security and reliability</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Get started in minutes</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">1</span>
                  </div>
                  <span className="text-sm">Sign up for free account</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">2</span>
                  </div>
                  <span className="text-sm">Connect your tools and channels</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">3</span>
                  </div>
                  <span className="text-sm">Start creating with AI assistance</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
              <h4 className="font-semibold mb-2">Need immediate help?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our support team responds within 2 hours during business hours.
              </p>
              <Button variant="outline" size="sm">
                Chat with Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
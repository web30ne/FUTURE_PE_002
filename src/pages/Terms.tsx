import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These terms govern your use of RenderWeb's AI-powered content automation platform.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 15, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using RenderWeb's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-4">
                  RenderWeb provides AI-powered content automation and alert services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>AI content generation and templates</li>
                  <li>Automated alert and notification systems</li>
                  <li>Integration with third-party platforms</li>
                  <li>Analytics and reporting tools</li>
                  <li>API access and developer tools</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">3. Account Registration and Security</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Registration</h3>
                <p className="text-muted-foreground mb-4">
                  To access certain features, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your login credentials secure</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Account Security</h3>
                <p className="text-muted-foreground">
                  You are responsible for all activities that occur under your account. We recommend using strong passwords and enabling two-factor authentication when available.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">4. Acceptable Use Policy</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to use RenderWeb to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Generate illegal, harmful, or malicious content</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Distribute spam, malware, or viruses</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Reverse engineer or attempt to extract our algorithms</li>
                  <li>Use automated scripts to abuse our service</li>
                  <li>Create content that promotes hate speech or discrimination</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">5. Content and Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Your Content</h3>
                <p className="text-muted-foreground mb-4">
                  You retain ownership of content you create or upload. By using our service, you grant us a limited license to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Store and process your content to provide our services</li>
                  <li>Use anonymized content for service improvement</li>
                  <li>Create backups for data protection purposes</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">AI-Generated Content</h3>
                <p className="text-muted-foreground mb-4">
                  Content generated by our AI tools belongs to you, subject to these terms:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You are responsible for reviewing and validating AI-generated content</li>
                  <li>We do not guarantee the accuracy or originality of AI output</li>
                  <li>You must ensure compliance with applicable laws and regulations</li>
                  <li>Similar content may be generated for other users</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Our Intellectual Property</h3>
                <p className="text-muted-foreground">
                  RenderWeb's software, algorithms, trademarks, and other intellectual property remain our exclusive property. You may not copy, modify, or distribute our proprietary technology.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Subscription Plans</h3>
                <p className="text-muted-foreground mb-4">
                  We offer various subscription plans with different features and usage limits. By subscribing, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Pay all fees as specified in your plan</li>
                  <li>Automatic renewal unless cancelled</li>
                  <li>Price changes with 30 days notice</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Cancellation and Refunds</h3>
                <p className="text-muted-foreground">
                  You may cancel your subscription at any time. Refunds are provided according to our refund policy, typically pro-rated for annual plans cancelled within 30 days.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">7. Service Availability and Support</h2>
                <p className="text-muted-foreground mb-4">
                  We strive to maintain high service availability, but we cannot guarantee uninterrupted access. We provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>99.9% uptime SLA for paid plans</li>
                  <li>Scheduled maintenance with advance notice</li>
                  <li>Customer support via email and chat</li>
                  <li>Documentation and resources</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">8. Privacy and Data Protection</h2>
                <p className="text-muted-foreground">
                  Our collection and use of your information is governed by our Privacy Policy, which is incorporated into these terms by reference. We implement appropriate security measures to protect your data, but cannot guarantee absolute security.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">9. Disclaimers and Limitations</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Service Disclaimers</h3>
                <p className="text-muted-foreground mb-4">
                  RenderWeb is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Accuracy or completeness of AI-generated content</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security of data transmission</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, RenderWeb's total liability shall not exceed the amount you paid for the service in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We may suspend or terminate your account if you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violate these terms of service</li>
                  <li>Fail to pay applicable fees</li>
                  <li>Use the service for illegal purposes</li>
                  <li>Pose a security risk to our systems</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Upon termination, your access will cease and we may delete your data after a reasonable period.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of the State of California, United States. Any disputes will be resolved in the courts of San Francisco County, California.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these terms from time to time. We will notify you of material changes via email or through our service. Continued use after changes constitutes acceptance of the updated terms.
                </p>
              </div>

              <div className="card-elevated bg-gradient-to-br from-primary/5 to-secondary/5">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these terms, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> <a href="mailto:legal@renderweb.ai" className="text-primary hover:underline">legal@renderweb.ai</a></p>
                  <p><strong>Address:</strong> RenderWeb Inc., 123 Main Street, San Francisco, CA 94105</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
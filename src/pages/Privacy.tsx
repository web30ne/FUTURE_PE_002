import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Information You Provide</h3>
                <p className="text-muted-foreground mb-4">
                  We collect information you directly provide to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Account information (name, email address, company details)</li>
                  <li>Content you create or upload to our service</li>
                  <li>Communication with our support team</li>
                  <li>Payment information (processed securely by our payment processors)</li>
                  <li>Feedback, surveys, and other voluntary submissions</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-4">
                  When you use RenderWeb, we automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Usage data (features used, time spent, actions taken)</li>
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Log files and analytics data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative messages and updates</li>
                  <li>Respond to comments, questions, and customer service requests</li>
                  <li>Develop new features and services</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except:
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Service Providers</h3>
                <p className="text-muted-foreground mb-4">
                  We may share information with trusted service providers who assist in operating our service, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Cloud hosting and storage providers</li>
                  <li>Payment processing services</li>
                  <li>Analytics and monitoring tools</li>
                  <li>Customer support platforms</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Legal Requirements</h3>
                <p className="text-muted-foreground">
                  We may disclose information when required by law, such as to comply with a subpoena or similar legal process, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Encryption in transit and at rest</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>SOC 2 compliance (coming soon)</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
                <p className="text-muted-foreground mb-4">
                  You have several rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, contact us at <a href="mailto:privacy@renderweb.ai" className="text-primary hover:underline">privacy@renderweb.ai</a>.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Essential cookies:</strong> Required for basic functionality</li>
                  <li><strong>Analytics cookies:</strong> Help us understand usage patterns</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing cookies:</strong> Used for advertising and remarketing (with consent)</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can control cookies through your browser settings. Note that disabling certain cookies may limit functionality.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
                <p className="text-muted-foreground">
                  RenderWeb is based in the United States. If you are located outside the US, please note that we transfer, store, and process your information in the US. We ensure appropriate safeguards are in place for international transfers in compliance with applicable data protection laws.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  RenderWeb is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we may also send you an email notification.
                </p>
              </div>

              <div className="card-elevated bg-gradient-to-br from-primary/5 to-secondary/5">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> <a href="mailto:privacy@renderweb.ai" className="text-primary hover:underline">privacy@renderweb.ai</a></p>
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

export default Privacy;
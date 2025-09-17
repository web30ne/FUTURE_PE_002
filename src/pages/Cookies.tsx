import React from 'react';
import { Button } from '@/components/ui/button';

const Cookies = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Cookie <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about how we use cookies and similar technologies to improve your experience on RenderWeb.
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
                <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-muted-foreground">
                  RenderWeb uses cookies and similar technologies (such as web beacons and pixels) to enhance your experience, analyze usage, and provide personalized content and advertising.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Essential Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and authentication.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Authentication cookies:</strong> Keep you logged in during your session</li>
                  <li><strong>Security cookies:</strong> Help detect malicious activity and protect user data</li>
                  <li><strong>Load balancing cookies:</strong> Ensure the website loads efficiently</li>
                  <li><strong>Preference cookies:</strong> Remember your language and region settings</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Analytics Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Google Analytics:</strong> Tracks page views, user interactions, and site performance</li>
                  <li><strong>Hotjar:</strong> Records user sessions to improve user experience</li>
                  <li><strong>Internal Analytics:</strong> Our own tracking for feature usage and performance</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Functional Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies enhance the functionality of our website and make it more convenient to use.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Chat support:</strong> Enable live chat functionality and support features</li>
                  <li><strong>Form data:</strong> Remember information you've entered in forms</li>
                  <li><strong>User preferences:</strong> Store your dashboard layout and settings</li>
                  <li><strong>Video player:</strong> Remember your video playback preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Marketing Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies track your activity across websites to deliver personalized advertisements and marketing content.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Google Ads:</strong> Show relevant advertisements based on your interests</li>
                  <li><strong>Facebook Pixel:</strong> Track conversions and optimize ad campaigns</li>
                  <li><strong>LinkedIn Insight:</strong> Measure campaign performance and retargeting</li>
                  <li><strong>Retargeting pixels:</strong> Show you relevant ads on other websites</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We work with trusted third-party services that may place cookies on your device. These include:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2">Analytics & Monitoring</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Google Analytics</li>
                      <li>• Hotjar</li>
                      <li>• Mixpanel</li>
                      <li>• Sentry (error tracking)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marketing & Advertising</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Google Ads</li>
                      <li>• Facebook Ads</li>
                      <li>• LinkedIn Ads</li>
                      <li>• Twitter Ads</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Support & Communication</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Intercom (chat support)</li>
                      <li>• Mailchimp (email campaigns)</li>
                      <li>• Calendly (scheduling)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Payment & Security</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Stripe (payment processing)</li>
                      <li>• Cloudflare (security)</li>
                      <li>• Auth0 (authentication)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">How Long Do Cookies Last?</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies have different lifespans depending on their purpose:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Authentication cookies:</strong> Last for 30 days or until you log out</li>
                  <li><strong>Preference cookies:</strong> Last for 1 year to remember your settings</li>
                  <li><strong>Analytics cookies:</strong> Typically last for 2 years</li>
                  <li><strong>Marketing cookies:</strong> Usually last between 30 days to 2 years</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Cookie Banner</h3>
                <p className="text-muted-foreground mb-4">
                  When you first visit RenderWeb, you'll see a cookie banner where you can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your preferences by cookie category</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Browser Settings</h3>
                <p className="text-muted-foreground mb-4">
                  You can also manage cookies through your browser settings:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Site permissions → Cookies and site data</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Opt-Out Links</h3>
                <p className="text-muted-foreground mb-4">
                  You can opt out of specific third-party tracking:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
                  <li><a href="https://www.facebook.com/help/568137493302217" className="text-primary hover:underline">Facebook Ads Preferences</a></li>
                  <li><a href="https://optout.aboutads.info/" className="text-primary hover:underline">Digital Advertising Alliance Opt-out</a></li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  While you can disable cookies, this may affect your experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Essential functions:</strong> Some features may not work properly</li>
                  <li><strong>Personalization:</strong> Settings and preferences won't be remembered</li>
                  <li><strong>Analytics:</strong> We can't improve our service based on usage data</li>
                  <li><strong>Marketing:</strong> You may see less relevant advertisements</li>
                </ul>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Other Tracking Technologies</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Web Beacons</h3>
                <p className="text-muted-foreground mb-4">
                  Small transparent images used to track email opens and website visits.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Local Storage</h3>
                <p className="text-muted-foreground mb-4">
                  Browser storage used to save user preferences and application data locally.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Fingerprinting</h3>
                <p className="text-muted-foreground">
                  We do not use device fingerprinting techniques to track users across sessions.
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last updated" date.
                </p>
              </div>

              <div className="card-elevated bg-gradient-to-br from-primary/5 to-secondary/5">
                <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about our use of cookies or this policy, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground mb-6">
                  <p><strong>Email:</strong> <a href="mailto:privacy@renderweb.ai" className="text-primary hover:underline">privacy@renderweb.ai</a></p>
                  <p><strong>Address:</strong> RenderWeb Inc., 123 Main Street, San Francisco, CA 94105</p>
                </div>
                <Button className="btn-hero">
                  Manage Cookie Preferences
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
import { Button } from "@/components/ui/button";

const Demo = () => {
  return (
    <section className="section-medium section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Watch a <span className="text-primary">Quick Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how RenderWeb can transform your content workflow in just 3 minutes.
          </p>
        </div>

        {/* Video Container */}
        <div className="video-container mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
            {/* Placeholder for video - in real implementation, this would be replaced with actual video */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
              </div>
              <div className="text-white">
                <h3 className="font-semibold text-lg mb-2">Demo Video</h3>
                <p className="text-white/80 text-sm">Click to watch our 3-minute demo</p>
              </div>
            </div>
          </div>
          
          {/* In a real app, you would use an actual video embed */}
          <iframe
            className="opacity-0"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="RenderWeb Platform Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Demo Features */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-semibold">1</span>
            </div>
            <h4 className="font-semibold mb-2">AI Content Generation</h4>
            <p className="text-sm text-muted-foreground">See how AI creates high-quality content instantly</p>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-semibold">2</span>
            </div>
            <h4 className="font-semibold mb-2">Alert Configuration</h4>
            <p className="text-sm text-muted-foreground">Set up real-time notifications in minutes</p>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-semibold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Template Library</h4>
            <p className="text-sm text-muted-foreground">Browse smart templates for any use case</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="btn-hero" size="lg">
            Sign Up to Try It Free
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Get full access to all features • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
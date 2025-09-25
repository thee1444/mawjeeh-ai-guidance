import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Target, Users } from "lucide-react";
import heroEducation from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-subtle">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroEducation} 
          alt="University guidance platform"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 gradient-hero opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            {/* Arabic Main Slogan */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 arabic leading-tight">
              <span className="gradient-primary bg-clip-text text-transparent">
                اكتشف تخصصك
              </span>
              <br />
              <span className="text-foreground">
                بخطوة واثقة
              </span>
            </h1>

            {/* English Subtitle */}
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Discover Your Perfect University Major with AI Guidance
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Smart guidance platform powered by AI to help high school and university students 
              discover the most suitable academic major based on their interests, abilities, 
              and Saudi Vision 2030 career opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Sparkles className="h-5 w-5 ml-2" />
                ابدأ الاختبار الآن
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
                <ArrowLeft className="h-5 w-5 mr-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Majors Covered</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10">
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card shadow-elegant rounded-xl p-4 border">
                <Target className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium">AI Recommendations</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card shadow-elegant rounded-xl p-4 border">
                <Users className="h-6 w-6 text-accent mb-2" />
                <div className="text-sm font-medium">Career Guidance</div>
              </div>

              {/* Main Visual */}
              <div className="bg-card shadow-elegant rounded-2xl p-8 border">
                <div className="gradient-hero rounded-xl p-6 text-white text-center">
                  <div className="text-2xl font-bold mb-4 arabic">
                    منصة التوجيه الذكي
                  </div>
                  <div className="text-lg opacity-90">
                    Powered by Vision 2030
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -inset-4 gradient-primary opacity-10 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
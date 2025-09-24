import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft, Users, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 arabic">
            ابدأ رحلتك اليوم
          </h2>
          <h3 className="text-2xl md:text-3xl mb-8 opacity-90">
            Start Your Journey Today
          </h3>
          
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed mb-12">
            Join thousands of students who have discovered their perfect university major 
            and career path with Muwajjih's AI-powered guidance system.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-white text-lg px-8 py-6"
            >
              <Sparkles className="h-6 w-6 ml-2" />
              ابدأ الاختبار المجاني
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white hover:bg-white/10 border border-white/20 text-lg px-8 py-6"
            >
              Watch Demo
              <ArrowLeft className="h-6 w-6 mr-2" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="h-8 w-8 mb-4 mx-auto opacity-80" />
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="opacity-80">Students Guided</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MessageSquare className="h-8 w-8 mb-4 mx-auto opacity-80" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-80">University Majors</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Sparkles className="h-8 w-8 mb-4 mx-auto opacity-80" />
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="opacity-80">Satisfaction Rate</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg opacity-70 mb-4">
              Free assessment • Instant results • Personalized recommendations
            </p>
            <p className="opacity-60 arabic">
              اختبار مجاني • نتائج فورية • توصيات شخصية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
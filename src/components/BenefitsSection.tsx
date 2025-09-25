import { Users, TrendingDown, Building, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import careerPathway from "@/assets/career-pathway.jpg";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduce Dropout Rates",
      titleAr: "تقليل معدلات التسرب",
      description: "Help students choose majors they're passionate about, reducing university dropout rates by up to 40%.",
      stat: "40%"
    },
    {
      icon: Building,
      title: "Vision 2030 Alignment",
      titleAr: "التوافق مع رؤية 2030",
      description: "Guide students toward careers that support Saudi Arabia's economic transformation and Vision 2030 goals.",
      stat: "2030"
    },
    {
      icon: Users,
      title: "Family Confidence",
      titleAr: "ثقة الأسرة",
      description: "Provide families with data-driven insights to support their children's educational decisions.",
      stat: "95%"
    },
    {
      icon: Globe,
      title: "Future-Ready Skills",
      titleAr: "مهارات المستقبل",
      description: "Connect students with majors that develop skills needed for the digital economy and emerging industries.",
      stat: "Future"
    }
  ];

  return (
    <section id="benefits" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="arabic text-primary">فوائد موجّه للجميع</span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">Benefits for Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Muwajjih creates value for students, families, universities, and the Kingdom's educational ecosystem.
          </p>
        </div>

        {/* Main Benefits Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img 
              src={careerPathway}
              alt="Career pathway guidance"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute -top-4 -left-4 bg-card shadow-elegant rounded-xl p-4 border">
              <div className="text-2xl font-bold text-accent">2030</div>
              <div className="text-sm text-muted-foreground">Vision Aligned</div>
            </div>
          </div>
          
          <div>
            <div className="bg-card rounded-2xl p-8 shadow-elegant border">
              <h3 className="text-3xl font-bold mb-6">
                <span className="arabic text-primary">لأولياء الأمور والجامعات</span>
                <br />
                <span className="text-xl text-muted-foreground">For Parents & Universities</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="gradient-primary rounded-lg p-2 flex-shrink-0">
                    <TrendingDown className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Reduce Academic Dropouts</h4>
                    <p className="text-muted-foreground">Evidence-based major selection reduces dropout rates and improves student satisfaction.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="gradient-accent rounded-lg p-2 flex-shrink-0">
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Support Vision 2030</h4>
                    <p className="text-muted-foreground">Channel students into sectors critical for Saudi Arabia's economic diversification.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="gradient-hero rounded-lg p-2 flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data-Driven Decisions</h4>
                    <p className="text-muted-foreground">Provide families with comprehensive insights to make informed educational choices.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <Button variant="accent" size="lg" className="w-full">
                  Learn More About Our Impact
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth border group-hover:border-accent/20 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="gradient-accent rounded-lg p-3 group-hover:shadow-glow transition-smooth">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent">
                    {benefit.stat}
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-2 arabic text-primary">
                  {benefit.titleAr}
                </h3>
                <h4 className="font-semibold text-base mb-3 text-foreground">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision 2030 Connection */}
        <div className="mt-20 gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 arabic">
            متوافق مع رؤية المملكة 2030
          </h3>
          <h4 className="text-xl md:text-2xl mb-6 opacity-90">
            Aligned with Saudi Vision 2030
          </h4>
          <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed mb-8">
            Muwajjih directly supports the Kingdom's goals of developing human capital, 
            promoting innovation, and building a diversified economy by guiding students 
            toward high-impact careers in emerging sectors.
          </p>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Explore Vision 2030 Careers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
import { Bot, Brain, TrendingUp, Users, MessageSquare, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiGuidance from "@/assets/ai-guidance.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Interactive AI Chat",
      titleAr: "محادثة تفاعلية مع الذكاء الاصطناعي",
      description: "Engage in a friendly conversation about your interests, strengths, and career aspirations."
    },
    {
      icon: Brain,
      title: "Smart Analysis",
      titleAr: "تحليل ذكي للشخصية",
      description: "AI analyzes your responses to understand your personality, learning style, and preferences."
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      titleAr: "رؤى سوق العمل السعودي",
      description: "Get insights about job market trends and Vision 2030 career opportunities in Saudi Arabia."
    },
    {
      icon: Award,
      title: "Top 3 Recommendations",
      titleAr: "أفضل 3 توصيات للتخصص",
      description: "Receive personalized recommendations for university majors that match your profile."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="arabic text-primary">كيف يعمل موجّه؟</span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">How Muwajjih Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform guides you through a comprehensive assessment to discover 
            your ideal university major and career path aligned with Saudi Vision 2030.
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="gradient-hero rounded-2xl p-8 text-white shadow-glow">
              <Bot className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4 arabic">
                اختبار ذكي تفاعلي
              </h3>
              <h4 className="text-lg opacity-90 mb-4">
                Smart Interactive Assessment
              </h4>
              <p className="text-lg opacity-80 leading-relaxed">
                Our AI chatbot asks targeted questions about your interests, academic performance, 
                career goals, and personal preferences to build a comprehensive profile of your 
                academic and professional potential.
              </p>
              <Button variant="outline" className="mt-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
                Try Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={aiGuidance}
              alt="AI guidance interface"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-card shadow-elegant rounded-xl p-4 border">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth border group-hover:border-primary/20">
                <div className="gradient-primary rounded-lg p-3 w-fit mb-4 group-hover:shadow-glow transition-smooth">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 arabic text-primary">
                  {feature.titleAr}
                </h3>
                <h4 className="font-semibold text-base mb-3 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-20 gradient-subtle rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="arabic text-primary">خطوات بسيطة للوصول لهدفك</span>
            <br />
            <span className="text-xl text-muted-foreground">Simple Steps to Your Goal</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-lg mb-2 arabic">أجب على الأسئلة</h4>
              <p className="text-muted-foreground">Answer our smart questionnaire about your interests and goals</p>
            </div>
            
            <div className="text-center">
              <div className="gradient-accent rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-lg mb-2 arabic">احصل على التوصيات</h4>
              <p className="text-muted-foreground">Receive AI-powered recommendations for your ideal majors</p>
            </div>
            
            <div className="text-center">
              <div className="gradient-hero rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-lg mb-2 arabic">ابدأ رحلتك</h4>
              <p className="text-muted-foreground">Start your academic journey with confidence and clarity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
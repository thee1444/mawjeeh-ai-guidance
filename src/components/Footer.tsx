import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="text-xl font-bold">
                <span className="text-primary arabic">موجّه</span>
                <span className="text-muted-foreground text-sm ml-2">Muwajjih</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Smart university guidance platform powered by AI to help students discover 
              their perfect academic major aligned with Saudi Vision 2030 career opportunities.
            </p>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed arabic">
              منصة التوجيه الجامعي الذكي المدعومة بالذكاء الاصطناعي لمساعدة الطلاب 
              على اكتشاف التخصص الأكاديمي المثالي المتوافق مع فرص رؤية السعودية 2030.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">How it Works</a></li>
              <li><a href="#benefits" className="text-muted-foreground hover:text-primary transition-smooth">Benefits</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">For Universities</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">For Parents</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Vision 2030</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@muwajjih.sa</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+966 11 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Muwajjih Platform. All rights reserved. | 
              <span className="arabic ml-2">جميع الحقوق محفوظة لمنصة موجّه</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth arabic">سياسة الخصوصية</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
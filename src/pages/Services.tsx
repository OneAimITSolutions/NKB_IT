import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, TrendingUp, Code, Smartphone, Server, Shield, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Domain Registration & Management",
      description: "Secure your digital identity with our comprehensive domain services.",
      features: [
        "Domain registration and renewal",
        "DNS management and configuration",
        "Domain transfer assistance",
        "WHOIS privacy protection",
        "Subdomain setup",
        "Email forwarding"
      ],
      pricing: "Starting at $12/year",
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Boost your online presence and drive targeted traffic to your business.",
      features: [
        "SEO optimization",
        "Social media marketing",
        "Pay-per-click advertising",
        "Content marketing strategy",
        "Email marketing campaigns",
        "Analytics and reporting"
      ],
      pricing: "Starting at $500/month",
      popular: true
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies and best practices.",
      features: [
        "Responsive web design",
        "Custom CMS development",
        "E-commerce solutions",
        "Website optimization",
        "Security implementation",
        "Ongoing maintenance"
      ],
      pricing: "Starting at $2,500",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "UI/UX design",
        "App store optimization",
        "Backend integration",
        "Post-launch support"
      ],
      pricing: "Starting at $5,000",
      popular: false
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      features: [
        "Cloud migration",
        "Infrastructure as code",
        "Auto-scaling setup",
        "Disaster recovery",
        "Monitoring and alerting",
        "Cost optimization"
      ],
      pricing: "Custom pricing",
      popular: false
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions.",
      features: [
        "Security audits",
        "Penetration testing",
        "Firewall configuration",
        "SSL certificate setup",
        "Security training",
        "Incident response"
      ],
      pricing: "Starting at $300/month",
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your website and improve user experience"
    },
    {
      icon: Users,
      title: "Technical Consulting",
      description: "Expert guidance for your technology decisions"
    },
    {
      icon: Server,
      title: "Database Management",
      description: "Secure and optimize your data infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Comprehensive IT Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From domain registration to complex application development, we provide end-to-end IT solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of IT services designed to help your business succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary mb-4">{service.pricing}</div>
                    <Link to="/contact">
                      <Button className={`w-full ${service.popular ? 'bg-gradient-button shadow-button' : ''}`} variant={service.popular ? 'default' : 'outline'}>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 lg:py-24 bg-tech-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Enhance your IT infrastructure with our specialized services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined approach to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We understand your requirements and goals" },
              { step: "02", title: "Planning", description: "We create a detailed project roadmap" },
              { step: "03", title: "Development", description: "We build your solution with best practices" },
              { step: "04", title: "Launch", description: "We deploy and provide ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-button rounded-full flex items-center justify-center text-white font-bold text-lg shadow-button">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90">
              Contact us today for a free consultation and project quote.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-button">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
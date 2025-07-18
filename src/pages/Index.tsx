import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Code2, 
  Target, 
  TrendingUp, 
  Clock, 
  Users, 
  Award,
  ArrowRight,
  Zap,
  Globe,
  Building2,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const assessmentSteps = [
    { id: 1, title: "Introduction", active: true },
    { id: 2, title: "Psychological Fit", active: false },
    { id: 3, title: "Technical Aptitude", active: false },
    { id: 4, title: "WISCAR Analysis", active: false },
    { id: 5, title: "Your Results", active: false }
  ];

  const careerPaths = [
    {
      title: "React.js Developer",
      description: "Build dynamic user interfaces and web applications"
    },
    {
      title: "Frontend Engineer", 
      description: "Craft seamless user experiences with modern tools"
    },
    {
      title: "Full Stack Developer",
      description: "Combine React with backend technologies"
    },
    {
      title: "UI Engineer",
      description: "Bridge design and development with React"
    },
    {
      title: "Mobile Developer",
      description: "Build mobile apps with React Native"
    }
  ];

  const idealTraits = [
    "Strong analytical thinking",
    "Process-oriented mindset", 
    "Logical problem-solving",
    "Interest in user interfaces",
    "Comfort with JavaScript",
    "Attention to detail"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Progress */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Is React.js Right for You?</h1>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">20%</span> Complete
            </div>
          </div>
          <Progress value={20} className="h-2 mb-4" />
          <div className="flex items-center gap-1 overflow-x-auto">
            {assessmentSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <Badge 
                  variant={step.active ? "default" : "secondary"}
                  className="whitespace-nowrap text-xs"
                >
                  <BookOpen className="h-3 w-3 mr-1" />
                  {step.title}
                </Badge>
                {index < assessmentSteps.length - 1 && (
                  <div className="w-2 h-px bg-border mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <p className="text-muted-foreground mb-2">Comprehensive Career Assessment & Guidance</p>
          
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover Your React.js Career Potential
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take our comprehensive assessment to evaluate your psychological fit, 
                technical readiness, and career alignment for a future in React.js 
                development.
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  25-30 minutes
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Personalized Results
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Career Guidance
                </div>
              </div>

              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/assessment">
                  Start Assessment
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* What is React.js */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Zap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">What is React.js?</h2>
          </div>
          
          <div className="mb-8">
            <p className="text-muted-foreground text-lg mb-6">
              React.js is a powerful <strong className="text-foreground">JavaScript library</strong> that specializes in <strong className="text-foreground">building user interfaces</strong> for web applications. It empowers developers to create dynamic, interactive, and scalable front-end experiences using component-based architecture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Component-Based</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    Build encapsulated components that manage their own state
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">Virtual DOM</h3>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Optimize performance with efficient DOM updates
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Ecosystem</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    Used by Facebook, Netflix, Airbnb, and thousands more
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Career Opportunities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{career.title}</h3>
                  <p className="text-sm text-muted-foreground">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ideal Traits */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Brain className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Ideal Traits & Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {idealTraits.map((trait, index) => (
              <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">{trait}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Assessment Overview */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">What You'll Discover</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Assessment Modules:</h3>
              <div className="space-y-3">
                {[
                  { icon: Brain, title: "Psychological Fit Evaluation", number: "1" },
                  { icon: Code2, title: "Technical Aptitude Testing", number: "2" },
                  { icon: Target, title: "WISCAR Framework Analysis", number: "3" }
                ].map((module, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {module.number}
                    </div>
                    <module.icon className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{module.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Your Results Include:</h3>
              <div className="space-y-2">
                {[
                  "Personalized fit score (0-100)",
                  "Detailed trait analysis", 
                  "Technical readiness assessment",
                  "Career pathway recommendations",
                  "Next steps and learning resources"
                ].map((result, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;

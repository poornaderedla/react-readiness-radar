import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Users, Award, Check, Brain, Code, Target, Lightbulb, TrendingUp, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Assessment = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const { toast } = useToast();

  const sections = [
    {
      id: 1,
      title: "Test Introduction & Background",
      icon: BookOpen,
      duration: "5-7 minutes",
      description: "Understanding your current experience and motivation for learning React.js"
    },
    {
      id: 2,
      title: "Psychometric Assessment",
      icon: Brain,
      duration: "8-10 minutes", 
      description: "Assess psychological alignment with front-end development using React.js"
    },
    {
      id: 3,
      title: "Technical & Aptitude",
      icon: Code,
      duration: "7-9 minutes",
      description: "Evaluate technical readiness and foundational knowledge"
    },
    {
      id: 4,
      title: "WISCAR Framework Analysis",
      icon: Target,
      duration: "6-8 minutes",
      description: "Measure holistic readiness across 6 key dimensions"
    },
    {
      id: 5,
      title: "Recommendation Engine",
      icon: Lightbulb,
      duration: "2-3 minutes",
      description: "Generate personalized guidance based on your results"
    },
    {
      id: 6,
      title: "Career & Learning Guidance",
      icon: TrendingUp,
      duration: "3-4 minutes",
      description: "Bridge results with actionable career and learning paths"
    }
  ];

  const getCurrentSectionData = () => {
    return sections.find(s => s.id === currentSection) || sections[0];
  };

  type QuestionType = {
    question: string;
    type?: "scale" | "slider";
    options?: string[];
    min?: number;
    max?: number;
  };

  const getQuestionsForSection = (): QuestionType[] => {
    switch(currentSection) {
      case 1:
        return [
          {
            question: "What best describes your current programming experience?",
            options: [
              'Complete beginner - no programming experience',
              'Some HTML/CSS knowledge', 
              'Basic JavaScript experience',
              'Experienced with other programming languages',
              'Professional developer looking to learn React'
            ]
          },
          {
            question: "What is your primary motivation for learning React.js?",
            options: [
              'Career advancement and better job opportunities',
              'Personal interest in web development',
              'Building my own projects and ideas',
              'Required for current job or studies',
              'Staying current with modern technologies'
            ]
          },
          {
            question: "How much time can you dedicate to learning React.js weekly?",
            options: [
              'Less than 2 hours per week',
              '2-5 hours per week',
              '5-10 hours per week', 
              '10-20 hours per week',
              'More than 20 hours per week'
            ]
          }
        ];
      case 2:
        return [
          {
            question: "I enjoy working with design, interfaces, and web applications.",
            type: "scale",
            options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
          },
          {
            question: "I like solving UI/UX problems with creative code solutions.",
            type: "scale", 
            options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
          },
          {
            question: "I prefer working in:",
            options: [
              'Individual focused environments',
              'Small collaborative teams (2-4 people)',
              'Medium teams (5-10 people)',
              'Large teams (10+ people)',
              'Mixed individual and team work'
            ]
          }
        ];
      case 3:
        return [
          {
            question: "What is JSX in React?",
            options: [
              'A separate templating language',
              'JavaScript XML - syntax extension for JavaScript',
              'A CSS framework for React',
              'A build tool for React applications',
              'I\'m not familiar with JSX'
            ]
          },
          {
            question: "Which of the following best describes the difference between Props and State?",
            options: [
              'Props are mutable, State is immutable',
              'Props are passed from parent, State is internal to component',
              'Props are for styling, State is for data',
              'There is no difference between Props and State',
              'I\'m not familiar with these concepts'
            ]
          }
        ];
      case 4:
        return [
          {
            question: "Rate your current Will/Drive to learn new technologies (0-100):",
            type: "slider",
            min: 0,
            max: 100
          },
          {
            question: "Rate your Interest in web development and React specifically (0-100):",
            type: "slider", 
            min: 0,
            max: 100
          },
          {
            question: "Rate your current Skill level in web technologies (0-100):",
            type: "slider",
            min: 0,
            max: 100
          }
        ];
      default:
        return [
          {
            question: "Assessment Complete!",
            options: ['View Results']
          }
        ];
    }
  };

  const currentSectionData = getCurrentSectionData();
  const questions = getQuestionsForSection();
  const currentQuestionData = questions[currentQuestion - 1];
  const totalQuestionsInSection = questions.length;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        description: "You need to choose an option before proceeding.",
        variant: "destructive"
      });
      return;
    }
    
    // Save answer
    const answerKey = `section_${currentSection}_question_${currentQuestion}`;
    setAnswers(prev => ({
      ...prev,
      [answerKey]: selectedAnswer
    }));

    toast({
      title: "Answer recorded!",
      description: "Moving to next question...",
    });
    
    // Move to next question or section
    if (currentQuestion < totalQuestionsInSection) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < 6) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(1);
    } else {
      // Assessment complete
      toast({
        title: "Assessment Complete!",
        description: "Generating your personalized results...",
      });
    }
    
    setSelectedAnswer(null);
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
      const prevSectionQuestions = getQuestionsForSection();
      setCurrentQuestion(prevSectionQuestions.length);
    }
    setSelectedAnswer(null);
  };

  const calculateProgress = () => {
    const totalSections = 6;
    const progressPerSection = 100 / totalSections;
    const currentSectionProgress = (currentQuestion / totalQuestionsInSection) * progressPerSection;
    const completedSections = (currentSection - 1) * progressPerSection;
    return completedSections + currentSectionProgress;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Badge variant="outline">React.js Skills Assessment</Badge>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">🧠 TECHNICAL FUTURES: Should You Learn React.js?</h1>
          <p className="text-muted-foreground text-lg">A Research-Backed Assessment of Your Readiness, Fit & Career Potential in React.js Development</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Assessment Progress</span>
            <span className="text-sm text-muted-foreground">
              Section {currentSection} of 6 • Question {currentQuestion} of {totalQuestionsInSection}
            </span>
          </div>
          <Progress value={calculateProgress()} className="h-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Section Overview */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Assessment Sections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <div 
                      key={section.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                        currentSection === section.id 
                          ? 'bg-primary/10 border-primary/20' 
                          : 'bg-muted/50'
                      }`}
                    >
                      <IconComponent className={`h-5 w-5 mt-0.5 ${
                        currentSection === section.id ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-medium text-sm ${
                          currentSection === section.id ? 'text-primary' : 'text-foreground'
                        }`}>
                          {section.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{section.duration}</p>
                      </div>
                      {currentSection > section.id && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Current Question */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Section {currentSection}</Badge>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{currentSectionData.duration}</span>
                </div>
                <CardTitle className="text-xl">{currentSectionData.title}</CardTitle>
                <CardDescription>{currentSectionData.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Question */}
                <div>
                  <h3 className="font-semibold mb-4 text-lg">
                    {currentQuestionData?.question}
                  </h3>
                  
                  {currentQuestionData?.type === "scale" ? (
                    <div className="space-y-2">
                      {currentQuestionData.options.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`w-full p-4 text-left rounded-lg border transition-colors ${
                            selectedAnswer === index 
                              ? 'bg-primary text-primary-foreground border-primary' 
                              : 'border-input bg-background hover:bg-accent hover:text-accent-foreground'
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {selectedAnswer === index && (
                              <Check className="h-4 w-4" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : currentQuestionData?.type === "slider" ? (
                    <div className="space-y-4">
                      <input
                        type="range"
                        min={currentQuestionData.min}
                        max={currentQuestionData.max}
                        value={selectedAnswer || 50}
                        onChange={(e) => setSelectedAnswer(Number(e.target.value))}
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="text-center">
                        <span className="text-2xl font-bold text-primary">{selectedAnswer || 50}</span>
                        <span className="text-muted-foreground ml-2">/ 100</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {currentQuestionData?.options?.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`w-full p-4 text-left rounded-lg border transition-colors ${
                            selectedAnswer === index 
                              ? 'bg-primary text-primary-foreground border-primary' 
                              : 'border-input bg-background hover:bg-accent hover:text-accent-foreground'
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          <div className="flex items-center">
                            {selectedAnswer === index && (
                              <Check className="h-4 w-4 mr-3" />
                            )}
                            <span>{option}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between pt-6 border-t">
                  <Button 
                    variant="outline" 
                    disabled={currentSection === 1 && currentQuestion === 1}
                    onClick={handlePrevious}
                  >
                    Previous
                  </Button>
                  <Button 
                    onClick={handleNext}
                    disabled={selectedAnswer === null}
                  >
                    {currentSection === 6 && currentQuestion === totalQuestionsInSection 
                      ? 'Complete Assessment' 
                      : 'Next Question'
                    }
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
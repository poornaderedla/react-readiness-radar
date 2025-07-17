import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Assessment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Badge variant="outline">React.js Assessment</Badge>
        </div>
      </header>

      {/* Assessment Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Assessment Progress</span>
            <span className="text-sm text-muted-foreground">1 of 6 sections</span>
          </div>
          <Progress value={16.67} className="h-2" />
        </div>

        {/* Current Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">Section 1</Badge>
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">5-7 minutes</span>
            </div>
            <CardTitle className="text-2xl">Test Introduction & Background</CardTitle>
            <CardDescription className="text-base">
              Let's start by understanding your current experience and motivation for learning React.js
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sample Question */}
            <div>
              <h3 className="font-semibold mb-3">1. What best describes your current programming experience?</h3>
              <div className="space-y-2">
                {[
                  'Complete beginner - no programming experience',
                  'Some HTML/CSS knowledge',
                  'Basic JavaScript experience',
                  'Experienced with other programming languages',
                  'Professional developer looking to learn React'
                ].map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-4"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button>
                Next Question
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What to Expect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium mb-1">25-30 Minutes</h4>
                <p className="text-sm text-muted-foreground">Total assessment time</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-medium mb-1">6 Sections</h4>
                <p className="text-sm text-muted-foreground">Comprehensive evaluation</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium mb-1">Detailed Report</h4>
                <p className="text-sm text-muted-foreground">Personalized results</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;
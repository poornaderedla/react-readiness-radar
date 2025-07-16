import HeroSection from '@/components/HeroSection';
import AssessmentOverview from '@/components/AssessmentOverview';
import ReactOverview from '@/components/ReactOverview';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ReactOverview />
      <AssessmentOverview />
      <CTASection />
    </div>
  );
};

export default Index;

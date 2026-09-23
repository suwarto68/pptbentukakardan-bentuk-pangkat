import React, { useState, useEffect, useRef } from 'react';
import { SLIDES_META, APP_INFO } from './data/slidesData';
import { soundFx } from './utils/audio';
import { NavigationControls } from './components/NavigationControls';
import { SlideDrawer } from './components/SlideDrawer';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { GuideModal } from './components/GuideModal';

// Slide Components
import { Slide1Cover } from './components/slides/Slide1Cover';
import { Slide2Objectives } from './components/slides/Slide2Objectives';
import { Slide3Apersepsi } from './components/slides/Slide3Apersepsi';
import { Slide4Definition } from './components/slides/Slide4Definition';
import { Slide5PracticeValues } from './components/slides/Slide5PracticeValues';
import { Slide6MultiplicationLaw } from './components/slides/Slide6MultiplicationLaw';
import { Slide7DivisionLaw } from './components/slides/Slide7DivisionLaw';
import { Slide8PowerOfPower } from './components/slides/Slide8PowerOfPower';
import { Slide9ZeroPower } from './components/slides/Slide9ZeroPower';
import { Slide10NegativePower } from './components/slides/Slide10NegativePower';
import { Slide11QuizExponents } from './components/slides/Slide11QuizExponents';
import { Slide12RootConcept } from './components/slides/Slide12RootConcept';
import { Slide13PowerRootRelation } from './components/slides/Slide13PowerRootRelation';
import { Slide14SimplifyRoots } from './components/slides/Slide14SimplifyRoots';
import { Slide15AddSubtractRoots } from './components/slides/Slide15AddSubtractRoots';
import { Slide16MultiplyRoots } from './components/slides/Slide16MultiplyRoots';
import { Slide17DivideRoots } from './components/slides/Slide17DivideRoots';
import { Slide18RealWorldApplications } from './components/slides/Slide18RealWorldApplications';
import { Slide19HotsQuiz } from './components/slides/Slide19HotsQuiz';
import { Slide20SummaryReflection } from './components/slides/Slide20SummaryReflection';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = SLIDES_META.length;

  const goToSlide = (slideNum: number) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      setCurrentSlide(slideNum);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    soundFx.enabled = !soundFx.enabled;
    setIsMuted(!soundFx.enabled);
  };

  const handlePrint = () => {
    window.print();
  };

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        soundFx.playSlide();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        soundFx.playSlide();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        soundFx.playSlide();
        goToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        soundFx.playSlide();
        goToSlide(totalSlides);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setIsDrawerOpen(false);
        setIsNotesOpen(false);
        setIsGuideOpen(false);
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [currentSlide, totalSlides]);

  // Helper to render specific slide
  const renderSlideContent = (slideId: number) => {
    switch (slideId) {
      case 1:
        return <Slide1Cover onNext={nextSlide} />;
      case 2:
        return <Slide2Objectives />;
      case 3:
        return <Slide3Apersepsi />;
      case 4:
        return <Slide4Definition />;
      case 5:
        return <Slide5PracticeValues />;
      case 6:
        return <Slide6MultiplicationLaw />;
      case 7:
        return <Slide7DivisionLaw />;
      case 8:
        return <Slide8PowerOfPower />;
      case 9:
        return <Slide9ZeroPower />;
      case 10:
        return <Slide10NegativePower />;
      case 11:
        return <Slide11QuizExponents />;
      case 12:
        return <Slide12RootConcept />;
      case 13:
        return <Slide13PowerRootRelation />;
      case 14:
        return <Slide14SimplifyRoots />;
      case 15:
        return <Slide15AddSubtractRoots />;
      case 16:
        return <Slide16MultiplyRoots />;
      case 17:
        return <Slide17DivideRoots />;
      case 18:
        return <Slide18RealWorldApplications />;
      case 19:
        return <Slide19HotsQuiz />;
      case 20:
        return <Slide20SummaryReflection />;
      default:
        return <Slide1Cover onNext={nextSlide} />;
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden relative">
      {/* Top Subtle School & Title Header Bar */}
      <header className="no-print w-full bg-slate-950/80 border-b border-slate-800/80 px-4 py-2 flex items-center justify-between text-xs z-30">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-slate-300 font-mono">{APP_INFO.school}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 font-medium hidden sm:inline">{APP_INFO.title}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-mono hidden md:inline">
            Guru: <strong className="text-slate-200">{APP_INFO.teacher}</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/30 text-[11px] text-indigo-300 font-mono">
            {APP_INFO.target}
          </span>
        </div>
      </header>

      {/* Main Slide Presentation Stage (16:9 Aspect Ratio Focus) */}
      <main
        ref={containerRef}
        className="slide-container-single flex-1 w-full max-w-7xl mx-auto flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden"
      >
        <div className="w-full h-full max-h-[720px] aspect-[16/9] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col">
          {renderSlideContent(currentSlide)}
        </div>
      </main>

      {/* Bottom Interactive Navigation Toolbar */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onHome={() => goToSlide(1)}
        onToggleDrawer={() => setIsDrawerOpen(true)}
        onToggleNotes={() => setIsNotesOpen(true)}
        onToggleGuide={() => setIsGuideOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        isMuted={isMuted}
        onToggleMute={toggleMute}
        onPrint={handlePrint}
      />

      {/* Modals */}
      <SlideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />

      <PresenterNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
      />

      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Hidden Print Deck for "Save as PDF": prints all 20 slides in sequence without controls */}
      <div className="slide-print-deck print-only">
        {SLIDES_META.map((meta) => (
          <div key={meta.id} className="slide-print-page w-full h-full bg-slate-900 text-white p-8">
            {renderSlideContent(meta.id)}
          </div>
        ))}
      </div>
    </div>
  );
}

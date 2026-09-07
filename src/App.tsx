import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TickerBand } from './components/TickerBand';
import { HeroSection } from './components/HeroSection';
import { EditorialManifesto } from './components/EditorialManifesto';
import { CurriculumSection } from './components/CurriculumSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ChallengesSection } from './components/ChallengesSection';
import { CapstoneSection } from './components/CapstoneSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { LessonModal } from './components/LessonModal';
import { ProjectModal } from './components/ProjectModal';
import { ChallengeModal } from './components/ChallengeModal';
import { EnrollmentModal } from './components/EnrollmentModal';
import { FloatingTimerBadge } from './components/FloatingTimerBadge';

import { CURRICULUM_MODULES } from './data/curriculumData';
import { PROJECTS_DATA } from './data/projectsData';
import { CHALLENGES_DATA } from './data/gamificationData';
import { Lesson, Project, Challenge, StudentState } from './types';

const INITIAL_STUDENT_STATE: StudentState = {
  name: 'Guest Operator',
  streakDays: 4,
  completedLessons: ['m1-l1'],
  completedProjects: [],
  completedChallenges: [],
  unlockedBadgeIds: ['badge-1'],
};

export default function App() {
  // Local persistence for student state
  const [studentState, setStudentState] = useState<StudentState>(() => {
    try {
      const saved = localStorage.getItem('ai_mastery_student_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return {
            ...INITIAL_STUDENT_STATE,
            ...parsed,
            completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : INITIAL_STUDENT_STATE.completedLessons,
            completedProjects: Array.isArray(parsed.completedProjects) ? parsed.completedProjects : INITIAL_STUDENT_STATE.completedProjects,
            completedChallenges: Array.isArray(parsed.completedChallenges) ? parsed.completedChallenges : INITIAL_STUDENT_STATE.completedChallenges,
          };
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_STUDENT_STATE;
  });

  useEffect(() => {
    try {
      localStorage.setItem('ai_mastery_student_state', JSON.stringify(studentState));
    } catch (e) {
      console.error(e);
    }
  }, [studentState]);

  // Modals state
  const [activeLesson, setActiveLesson] = useState<{ lesson: Lesson; moduleTitle: string } | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  // Navigation smoothly scrolling to sections
  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lesson handlers
  const handleSelectLesson = (lesson: Lesson, moduleTitle: string) => {
    setActiveLesson({ lesson, moduleTitle });
  };

  const handleToggleLessonComplete = (lessonId: string) => {
    setStudentState((prev) => {
      const alreadyDone = prev.completedLessons.includes(lessonId);
      if (alreadyDone) {
        return {
          ...prev,
          completedLessons: prev.completedLessons.filter((id) => id !== lessonId),
        };
      } else {
        return {
          ...prev,
          completedLessons: [...prev.completedLessons, lessonId],
        };
      }
    });
  };

  // Next / Prev lesson handlers inside modal
  const handleNextLesson = () => {
    if (!activeLesson) return;
    const allLessons: { lesson: Lesson; moduleTitle: string }[] = [];
    CURRICULUM_MODULES.forEach((m) => {
      m.lessons.forEach((l) => {
        allLessons.push({ lesson: l, moduleTitle: m.title });
      });
    });
    const currIdx = allLessons.findIndex((item) => item.lesson.id === activeLesson.lesson.id);
    if (currIdx !== -1 && currIdx < allLessons.length - 1) {
      setActiveLesson(allLessons[currIdx + 1]);
    }
  };

  const handlePrevLesson = () => {
    if (!activeLesson) return;
    const allLessons: { lesson: Lesson; moduleTitle: string }[] = [];
    CURRICULUM_MODULES.forEach((m) => {
      m.lessons.forEach((l) => {
        allLessons.push({ lesson: l, moduleTitle: m.title });
      });
    });
    const currIdx = allLessons.findIndex((item) => item.lesson.id === activeLesson.lesson.id);
    if (currIdx > 0) {
      setActiveLesson(allLessons[currIdx - 1]);
    }
  };

  // Project handlers
  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
  };

  const handleToggleProjectComplete = (projectId: string) => {
    setStudentState((prev) => {
      const alreadyDone = prev.completedProjects.includes(projectId);
      if (alreadyDone) {
        return {
          ...prev,
          completedProjects: prev.completedProjects.filter((id) => id !== projectId),
        };
      } else {
        return {
          ...prev,
          completedProjects: [...prev.completedProjects, projectId],
        };
      }
    });
  };

  // Challenge handlers
  const handleSelectChallenge = (challenge: Challenge) => {
    setActiveChallenge(challenge);
  };

  const handleSubmitChallenge = (challengeId: string) => {
    setStudentState((prev) => {
      if (prev.completedChallenges.includes(challengeId)) return prev;
      return {
        ...prev,
        completedChallenges: [...prev.completedChallenges, challengeId],
      };
    });
  };

  // Enrollment confirmation
  const handleConfirmEnrollment = (studentName: string) => {
    setStudentState((prev) => ({
      ...prev,
      name: studentName,
    }));
    setIsEnrollmentOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F6A51B] text-[#171717] font-sans selection:bg-[#171717] selection:text-[#F6A51B]">
      
      {/* Editorial Navigation */}
      <Navbar
        onNavClick={handleNavClick}
        studentState={studentState}
        onOpenEnrollment={() => setIsEnrollmentOpen(true)}
      />

      {/* Main Editorial Presentation */}
      <main className="w-full overflow-x-hidden">
        {/* Ticker marquee */}
        <TickerBand />

        {/* Hero poster section */}
        <HeroSection
          onOpenCurriculum={() => handleNavClick('curriculum')}
          onOpenEnrollment={() => setIsEnrollmentOpen(true)}
        />

        {/* 5-Phase Transformation Manifesto */}
        <EditorialManifesto />

        {/* 12 Module Curriculum Grid */}
        <CurriculumSection
          modules={CURRICULUM_MODULES}
          onSelectLesson={handleSelectLesson}
          completedLessonIds={studentState.completedLessons}
        />

        {/* 8 Production Builds Exhibition */}
        <ProjectsSection
          projects={PROJECTS_DATA}
          onSelectProject={handleSelectProject}
          completedProjectIds={studentState.completedProjects}
        />

        {/* Time-Bound Practical Sprint Arena */}
        <ChallengesSection
          challenges={CHALLENGES_DATA}
          onSelectChallenge={handleSelectChallenge}
          completedChallengeIds={studentState.completedChallenges}
        />

        {/* Climax Capstone Section */}
        <CapstoneSection
          onOpenEnrollment={() => setIsEnrollmentOpen(true)}
        />

        {/* Editorial Product Offer Tuition Ledger */}
        <PricingSection
          onOpenEnrollment={() => setIsEnrollmentOpen(true)}
        />

        {/* Spacious Editorial Footer */}
        <Footer
          onNavClick={handleNavClick}
          onOpenEnrollment={() => setIsEnrollmentOpen(true)}
        />
      </main>

      {/* Interactive Modals */}
      <LessonModal
        lesson={activeLesson?.lesson || null}
        moduleTitle={activeLesson?.moduleTitle || ''}
        onClose={() => setActiveLesson(null)}
        isCompleted={activeLesson ? studentState.completedLessons.includes(activeLesson.lesson.id) : false}
        onToggleComplete={handleToggleLessonComplete}
        onNextLesson={handleNextLesson}
        onPrevLesson={handlePrevLesson}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        isCompleted={activeProject ? studentState.completedProjects.includes(activeProject.id) : false}
        onToggleComplete={handleToggleProjectComplete}
      />

      <ChallengeModal
        challenge={activeChallenge}
        onClose={() => setActiveChallenge(null)}
        isCompleted={activeChallenge ? studentState.completedChallenges.includes(activeChallenge.id) : false}
        onSubmitChallenge={handleSubmitChallenge}
      />

      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        onConfirmEnrollment={handleConfirmEnrollment}
      />

      {/* Floating Timer Badge in Bottom-Right Corner */}
      <FloatingTimerBadge
        onOpenEnrollment={() => setIsEnrollmentOpen(true)}
      />
    </div>
  );
}


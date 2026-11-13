import { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NoticeBanner } from './components/NoticeBanner';
import { SearchBar } from './components/SearchBar';
import { CollegeTrustBar } from './components/CollegeTrustBar';
import { BatchesSection } from './components/BatchesSection';
import { LecturesSection } from './components/LecturesSection';
import { NotesSection } from './components/NotesSection';
import { EducatorCard } from './components/EducatorCard';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { VideoModal } from './components/VideoModal';
import { AuthModal } from './components/AuthModal';
import { AdminPanel } from './components/AdminPanel';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

import {
  INITIAL_BATCHES,
  INITIAL_LECTURES,
  INITIAL_STUDY_MATERIALS,
} from './data/mockData';
import type { StudentProfile, Lecture, StudyMaterial } from './types';

export function App() {
  // State for student authentication
  const [student, setStudent] = useState<StudentProfile | null>(() => {
    const saved = localStorage.getItem('teertha_student');
    return saved ? JSON.parse(saved) : null;
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // State for content
  const [batches] = useState(INITIAL_BATCHES);
  const [lectures, setLectures] = useState<Lecture[]>(() => {
    const saved = localStorage.getItem('teertha_lectures');
    return saved ? JSON.parse(saved) : INITIAL_LECTURES;
  });
  const [materials, setMaterials] = useState<StudyMaterial[]>(() => {
    const saved = localStorage.getItem('teertha_materials');
    return saved ? JSON.parse(saved) : INITIAL_STUDY_MATERIALS;
  });

  // State for captured student leads (for teacher view)
  const [studentLeads, setStudentLeads] = useState<StudentProfile[]>(() => {
    const saved = localStorage.getItem('teertha_student_leads');
    return saved ? JSON.parse(saved) : [];
  });

  // Modal states
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authPromptMessage, setAuthPromptMessage] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Lecture | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    if (student) {
      localStorage.setItem('teertha_student', JSON.stringify(student));
    } else {
      localStorage.removeItem('teertha_student');
    }
  }, [student]);

  useEffect(() => {
    localStorage.setItem('teertha_lectures', JSON.stringify(lectures));
  }, [lectures]);

  useEffect(() => {
    localStorage.setItem('teertha_materials', JSON.stringify(materials));
  }, [materials]);

  useEffect(() => {
    localStorage.setItem('teertha_student_leads', JSON.stringify(studentLeads));
  }, [studentLeads]);

  // Filtered Content based on Search Query
  const filteredLectures = useMemo(() => {
    if (!searchQuery.trim()) return lectures;
    const q = searchQuery.toLowerCase();
    return lectures.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.chapter.toLowerCase().includes(q) ||
        l.subject.toLowerCase().includes(q)
    );
  }, [lectures, searchQuery]);

  const filteredMaterials = useMemo(() => {
    if (!searchQuery.trim()) return materials;
    const q = searchQuery.toLowerCase();
    return materials.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.chapter.toLowerCase().includes(q) ||
        m.subject.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
    );
  }, [materials, searchQuery]);

  // Auth Handlers
  const handleAuthSuccess = (newStudent: StudentProfile) => {
    setStudent(newStudent);
    // Add to captured student leads list for Abhishek Sir's counseling database
    setStudentLeads((prev) => {
      const exists = prev.find((s) => s.email === newStudent.email || s.phone === newStudent.phone);
      if (exists) return prev;
      return [newStudent, ...prev];
    });
  };

  const handleLogout = () => {
    setStudent(null);
  };

  const handleRequireAuth = (message?: string) => {
    setAuthPromptMessage(message || 'Please log in to unlock and download high-yield PDF notes & formula sheets.');
    setIsAuthOpen(true);
  };

  const handleDownloadNotesForLecture = (lecture: Lecture) => {
    if (!student) {
      handleRequireAuth(`Login to download notes for "${lecture.title}"`);
      return;
    }

    // Trigger instant download
    const element = document.createElement('a');
    const file = new Blob(
      [
        `TEERTHA STUDY'S Lecture Notes\nLecture: ${lecture.title}\nChapter: ${lecture.chapter}\nAbhishek Sir Doubt Support: +91 7709611681\nStudent: ${student.fullName} (${student.phone})\nSecure Token Valid.`
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `${lecture.notesTitle || 'Lecture_Notes'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Content Handlers for Admin
  const handleAddLecture = (newLec: Lecture) => {
    setLectures((prev) => [newLec, ...prev]);
  };

  const handleAddMaterial = (newMat: StudyMaterial) => {
    setMaterials((prev) => [newMat, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Navigation Bar */}
      <Navbar
        student={student}
        onOpenAuth={() => handleRequireAuth('Login or sign up to access all materials & batches.')}
        onLogout={handleLogout}
        isAdmin={isAdminOpen}
        onToggleAdmin={() => setIsAdminOpen(!isAdminOpen)}
      />

      {/* Live Notice Updates Banner */}
      <NoticeBanner
        onBannerClick={() => {
          document.getElementById('notes')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Section */}
      <Hero
        onExploreLectures={() => {
          document.getElementById('lectures')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreNotes={() => {
          document.getElementById('notes')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Live Search & Quick Filter Bar */}
      <SearchBar
        query={searchQuery}
        onChange={(val) => setSearchQuery(val)}
        onSelectTag={(tag) => setSearchQuery(tag)}
      />

      {/* Maharashtra College Trust Bar */}
      <CollegeTrustBar />

      {/* Batches Section */}
      <BatchesSection
        batches={batches}
        onSelectBatch={(_batchId) => {
          document.getElementById('lectures')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Video Lectures Section */}
      <LecturesSection
        lectures={filteredLectures}
        onOpenVideo={(lec) => setSelectedVideo(lec)}
        onDownloadNotes={handleDownloadNotesForLecture}
        isLoggedIn={Boolean(student)}
      />

      {/* Study Materials & Locked PDF Notes Section */}
      <NotesSection
        materials={filteredMaterials}
        student={student}
        onRequireAuth={() => handleRequireAuth()}
      />

      {/* Verified Educator Narrative Section (Abhishek Sir) */}
      <EducatorCard />

      {/* Real Student Experiences & Hall of Fame */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Doubt Support Widget */}
      <WhatsAppButton
        phoneNumber="917709611681"
        studentName={student?.fullName}
      />

      {/* Video Player Modal */}
      <VideoModal
        lecture={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onDownloadNotes={handleDownloadNotesForLecture}
        isLoggedIn={Boolean(student)}
      />

      {/* Auth & Lead Collection Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={handleAuthSuccess}
        initialMessage={authPromptMessage}
      />

      {/* Teacher / Admin Management Modal */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onAddLecture={handleAddLecture}
        onAddMaterial={handleAddMaterial}
        studentLeads={studentLeads}
      />

    </div>
  );
}

export default App;

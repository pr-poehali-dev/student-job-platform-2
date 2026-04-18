import { useState } from "react";
import HomePage from "@/components/pages/HomePage";
import VacanciesPage from "@/components/pages/VacanciesPage";
import EmployersPage from "@/components/pages/EmployersPage";
import StudentProfilePage from "@/components/pages/StudentProfilePage";
import ChatPage from "@/components/pages/ChatPage";
import DashboardPage from "@/components/pages/DashboardPage";
import AboutPage from "@/components/pages/AboutPage";
import SupportPage from "@/components/pages/SupportPage";
import ReviewsPage from "@/components/pages/ReviewsPage";
import RegisterPage from "@/components/pages/RegisterPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export type Page =
  | "home"
  | "vacancies"
  | "employers"
  | "profile"
  | "chat"
  | "dashboard"
  | "about"
  | "support"
  | "reviews"
  | "register";

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage navigate={navigate} />;
      case "vacancies": return <VacanciesPage navigate={navigate} />;
      case "employers": return <EmployersPage navigate={navigate} />;
      case "profile": return <StudentProfilePage navigate={navigate} />;
      case "chat": return <ChatPage navigate={navigate} />;
      case "dashboard": return <DashboardPage navigate={navigate} />;
      case "about": return <AboutPage navigate={navigate} />;
      case "support": return <SupportPage navigate={navigate} />;
      case "reviews": return <ReviewsPage navigate={navigate} />;
      case "register": return <RegisterPage navigate={navigate} />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  const noFooterPages: Page[] = ["chat", "dashboard"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      {!noFooterPages.includes(currentPage) && <Footer navigate={navigate} />}
    </div>
  );
}

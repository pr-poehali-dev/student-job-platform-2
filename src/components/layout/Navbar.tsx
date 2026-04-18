import { useState } from "react";
import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: "Главная", page: "home" },
  { label: "Вакансии", page: "vacancies" },
  { label: "Работодатели", page: "employers" },
  { label: "Отзывы", page: "reviews" },
  { label: "О платформе", page: "about" },
  { label: "Поддержка", page: "support" },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center animate-pulse-green">
            <Icon name="GraduationCap" size={18} className="text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground tracking-wide">
            СТУД<span className="text-primary">РАБОТА</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              className={`nav-link px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPage === item.page
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate("dashboard")}
            className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="LayoutDashboard" size={16} />
            Дашборд
          </button>
          <button
            onClick={() => navigate("register")}
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Начать
          </button>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-card animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => { navigate(item.page); setMobileOpen(false); }}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 mt-2 pt-2 border-t border-white/5">
              <button
                onClick={() => { navigate("dashboard"); setMobileOpen(false); }}
                className="flex-1 px-4 py-2 text-sm text-center border border-border rounded-lg text-muted-foreground hover:text-foreground"
              >
                Дашборд
              </button>
              <button
                onClick={() => { navigate("register"); setMobileOpen(false); }}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg"
              >
                Начать
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

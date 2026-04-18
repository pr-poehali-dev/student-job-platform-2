import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="border-t border-white/5 bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <button onClick={() => navigate("home")} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="GraduationCap" size={18} className="text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-semibold">
                СТУД<span className="text-primary">РАБОТА</span>
              </span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Платформа для трудоустройства студентов и найма молодых специалистов
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
                <Icon name="Send" size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
                <Icon name="MessageSquare" size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Платформа</h4>
            <ul className="space-y-2">
              {[
                { label: "Главная", page: "home" as Page },
                { label: "Вакансии", page: "vacancies" as Page },
                { label: "Работодатели", page: "employers" as Page },
                { label: "О платформе", page: "about" as Page },
              ].map(item => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Студентам</h4>
            <ul className="space-y-2">
              {[
                { label: "Мой профиль", page: "profile" as Page },
                { label: "Дашборд", page: "dashboard" as Page },
                { label: "Чат", page: "chat" as Page },
                { label: "Отзывы", page: "reviews" as Page },
              ].map(item => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Помощь</h4>
            <ul className="space-y-2">
              {[
                { label: "Поддержка", page: "support" as Page },
                { label: "Регистрация", page: "register" as Page },
              ].map(item => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-xs text-primary font-medium">📬 support@studrabota.ru</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2024 СтудРабота. Все права защищены.</p>
          <p className="text-sm text-muted-foreground">Помогаем студентам найти первую работу</p>
        </div>
      </div>
    </footer>
  );
}

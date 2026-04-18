import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const stats = [
  { value: "12 400+", label: "студентов", icon: "GraduationCap" },
  { value: "3 200+", label: "вакансий", icon: "Briefcase" },
  { value: "850+", label: "работодателей", icon: "Building2" },
  { value: "94%", label: "успешных найма", icon: "TrendingUp" },
];

const features = [
  { icon: "Search", title: "Умный поиск", desc: "Алгоритмы подбирают вакансии под ваш профиль, навыки и расписание учёбы" },
  { icon: "Star", title: "Рейтинг работодателей", desc: "Честные отзывы студентов о компаниях — знайте, куда идёте" },
  { icon: "MessageCircle", title: "Прямой чат", desc: "Общайтесь с работодателями без посредников прямо на платформе" },
  { icon: "Shield", title: "Защита прав студентов", desc: "Проверяем работодателей, чтобы условия работы соответствовали обещаниям" },
  { icon: "Clock", title: "Гибкий график", desc: "Только вакансии с учётом учебной нагрузки и сессий" },
  { icon: "Award", title: "Стажировки и практика", desc: "Официальное трудоустройство, запись в трудовую и отметка в вузе" },
];

const topVacancies = [
  { company: "Яндекс", role: "Junior Frontend разработчик", salary: "от 60 000 ₽", badge: "Стажировка", badgeColor: "bg-blue-500/20 text-blue-400" },
  { company: "Сбер", role: "Аналитик данных (стажёр)", salary: "от 45 000 ₽", badge: "Частичная", badgeColor: "bg-primary/20 text-primary" },
  { company: "VK", role: "UI/UX дизайнер", salary: "от 55 000 ₽", badge: "Удалённо", badgeColor: "bg-purple-500/20 text-purple-400" },
  { company: "Тинькофф", role: "Backend разработчик (Python)", salary: "от 70 000 ₽", badge: "Офис", badgeColor: "bg-yellow-500/20 text-yellow-400" },
];

export default function HomePage({ navigate }: Props) {
  return (
    <div className="animate-fade-in">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">Новые вакансии каждый день</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
              НАЙДИ РАБОТУ,<br />
              <span className="gradient-text">НЕ ТЕРЯЯ</span><br />
              УЧЁБУ
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-in-up delay-200">
              Платформа для студентов, которые хотят работать и учиться одновременно. 
              Вакансии с гибким графиком, стажировки и первый опыт в крупных компаниях.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button
                onClick={() => navigate("register")}
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2 justify-center"
              >
                <Icon name="Rocket" size={18} />
                Начать бесплатно
              </button>
              <button
                onClick={() => navigate("vacancies")}
                className="px-8 py-4 bg-secondary text-foreground font-semibold rounded-xl hover:bg-secondary/80 transition-all border border-border flex items-center gap-2 justify-center"
              >
                <Icon name="Search" size={18} />
                Найти вакансии
              </button>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up delay-400">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Icon name="CheckCircle" size={14} className="text-primary" /> Без опыта
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Icon name="CheckCircle" size={14} className="text-primary" /> Гибкий график
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Icon name="CheckCircle" size={14} className="text-primary" /> Официальное трудоустройство
              </span>
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-fade-in delay-500">
          <img
            src="https://cdn.poehali.dev/projects/f95a81f7-0c80-4a83-a109-66d58d5f56f3/files/460684c2-4c6b-4c24-bd0a-bf35ef6e7b32.jpg"
            alt="Студенты за работой"
            className="w-[480px] h-[360px] object-cover rounded-2xl border border-white/10 shadow-2xl"
          />
          <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Icon name="TrendingUp" size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Новых вакансий</p>
              <p className="font-display font-bold text-foreground">+47 сегодня</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon as any} size={22} className="text-primary" />
                </div>
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Возможности</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            ВСЁ ДЛЯ СТУДЕНТА
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Платформа создана специально для совмещения работы и учёбы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-hover p-6 rounded-xl bg-card border border-border"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={f.icon as any} size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Горячие</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">ПОПУЛЯРНЫЕ ВАКАНСИИ</h2>
            </div>
            <button
              onClick={() => navigate("vacancies")}
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
            >
              Все вакансии <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topVacancies.map((v) => (
              <div key={v.role} className="card-hover p-5 rounded-xl bg-card border border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center font-display font-bold text-lg text-primary flex-shrink-0">
                  {v.company[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{v.role}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{v.company}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${v.badgeColor}`}>
                      {v.badge}
                    </span>
                  </div>
                  <p className="text-primary font-semibold text-sm mt-2">{v.salary}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <button
              onClick={() => navigate("vacancies")}
              className="px-6 py-3 border border-border rounded-xl text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              Все вакансии →
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              ГОТОВ НАЧАТЬ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Регистрация занимает 2 минуты. Первая вакансия — сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("register")}
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                Я студент — ищу работу
              </button>
              <button
                onClick={() => navigate("employers")}
                className="px-8 py-4 bg-background/50 text-foreground font-semibold rounded-xl hover:bg-background/80 transition-all border border-white/20"
              >
                Я работодатель
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

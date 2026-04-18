import { useState } from "react";
import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const categories = ["Все", "IT", "Маркетинг", "Дизайн", "Аналитика", "Финансы", "Медиа", "Продажи"];

const vacancies = [
  { id: 1, company: "Яндекс", role: "Junior Frontend разработчик", salary: "60 000 – 80 000 ₽", type: "Стажировка", schedule: "Гибкий", location: "Москва / Удалённо", category: "IT", tags: ["React", "TypeScript", "Git"], logo: "Y", hot: true },
  { id: 2, company: "Сбер", role: "Аналитик данных (стажёр)", salary: "45 000 – 60 000 ₽", type: "Частичная", schedule: "Гибкий", location: "Москва", category: "Аналитика", tags: ["Python", "SQL", "Excel"], logo: "С", hot: false },
  { id: 3, company: "VK", role: "UI/UX дизайнер", salary: "55 000 – 75 000 ₽", type: "Удалённо", schedule: "Полный", location: "Удалённо", category: "Дизайн", tags: ["Figma", "Prototyping"], logo: "V", hot: true },
  { id: 4, company: "Тинькофф", role: "Backend разработчик (Python)", salary: "70 000 – 95 000 ₽", type: "Офис", schedule: "Гибкий", location: "Москва", category: "IT", tags: ["Python", "FastAPI", "PostgreSQL"], logo: "Т", hot: false },
  { id: 5, company: "Авито", role: "SMM-менеджер", salary: "35 000 – 50 000 ₽", type: "Частичная", schedule: "Свободный", location: "Удалённо", category: "Маркетинг", tags: ["ВКонтакте", "Telegram", "Reels"], logo: "А", hot: false },
  { id: 6, company: "Mail.ru", role: "Тестировщик ПО", salary: "40 000 – 55 000 ₽", type: "Стажировка", schedule: "Гибкий", location: "Москва", category: "IT", tags: ["QA", "Jira", "Python"], logo: "M", hot: false },
  { id: 7, company: "Ozon", role: "Контент-менеджер", salary: "30 000 – 45 000 ₽", type: "Частичная", schedule: "Свободный", location: "Удалённо", category: "Медиа", tags: ["Excel", "CMS", "SEO"], logo: "О", hot: false },
  { id: 8, company: "1С", role: "Junior разработчик 1С", salary: "50 000 – 70 000 ₽", type: "Офис", schedule: "Полный", location: "Москва", category: "IT", tags: ["1С", "ERP", "SQL"], logo: "1", hot: true },
];

const typeColors: Record<string, string> = {
  "Стажировка": "bg-blue-500/20 text-blue-400",
  "Частичная": "bg-primary/20 text-primary",
  "Удалённо": "bg-purple-500/20 text-purple-400",
  "Офис": "bg-yellow-500/20 text-yellow-400",
};

export default function VacanciesPage({ navigate }: Props) {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [search, setSearch] = useState("");

  const filtered = vacancies.filter(v => {
    const matchesCategory = activeCategory === "Все" || v.category === activeCategory;
    const matchesSearch = v.role.toLowerCase().includes(search.toLowerCase()) ||
      v.company.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fade-in container mx-auto px-4 py-10">
      <div className="mb-10">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Вакансии</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">НАЙДИ СВОЮ РАБОТУ</h1>
        <p className="text-muted-foreground max-w-lg">
          {filtered.length} вакансий с гибким графиком для студентов
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск по вакансиям и компаниям..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Icon name="SlidersHorizontal" size={16} />
          Фильтры
        </button>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((v) => (
          <div key={v.id} className="card-hover p-6 rounded-xl bg-card border border-border group cursor-pointer" onClick={() => navigate("register")}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center font-display font-bold text-xl text-primary flex-shrink-0">
                {v.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{v.role}</p>
                    <p className="text-sm text-muted-foreground">{v.company}</p>
                  </div>
                  {v.hot && (
                    <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-400 font-medium flex-shrink-0">🔥 Горячая</span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${typeColors[v.type] || "bg-secondary text-muted-foreground"}`}>
                    {v.type}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground flex items-center gap-1">
                    <Icon name="MapPin" size={10} />
                    {v.location}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground flex items-center gap-1">
                    <Icon name="Clock" size={10} />
                    {v.schedule}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {v.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded bg-background text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="font-semibold text-primary">{v.salary}</p>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    Откликнуться <Icon name="ArrowRight" size={12} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <Icon name="SearchX" size={48} className="text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Ничего не найдено. Попробуйте другой запрос.</p>
        </div>
      )}
    </div>
  );
}

import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const employers = [
  { name: "Яндекс", industry: "IT / Технологии", rating: 4.9, reviews: 234, vacancies: 12, logo: "Y", verified: true, desc: "Крупнейшая технологическая компания России. Стажировки с возможностью перехода в штат." },
  { name: "Сбер", industry: "Финансы / Банкинг", rating: 4.7, reviews: 189, vacancies: 8, logo: "С", verified: true, desc: "Ведущий банк страны с развитой программой молодых специалистов." },
  { name: "VK", industry: "IT / Социальные сети", rating: 4.6, reviews: 156, vacancies: 6, logo: "V", verified: true, desc: "Экосистема интернет-сервисов. Возможности для роста и обучения." },
  { name: "Тинькофф", industry: "Финтех", rating: 4.8, reviews: 201, vacancies: 9, logo: "Т", verified: true, desc: "Инновационный финтех-банк с сильной инженерной культурой." },
  { name: "Авито", industry: "E-commerce", rating: 4.5, reviews: 98, vacancies: 4, logo: "А", verified: false, desc: "Крупнейшая платформа объявлений. Молодая команда, плоская структура." },
  { name: "Ozon", industry: "E-commerce", rating: 4.4, reviews: 112, vacancies: 7, logo: "О", verified: true, desc: "Один из крупнейших маркетплейсов России с активным наймом." },
];

const benefits = [
  { icon: "Users", title: "База студентов", desc: "Доступ к 12 000+ активным студентам лучших вузов страны" },
  { icon: "Target", title: "Точный подбор", desc: "Фильтры по специальности, курсу, навыкам и расписанию" },
  { icon: "Zap", title: "Быстрый отклик", desc: "Студенты отвечают в течение нескольких часов" },
  { icon: "BarChart2", title: "Аналитика", desc: "Статистика просмотров, откликов и конверсий по вакансиям" },
];

export default function EmployersPage({ navigate }: Props) {
  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-b from-card/50 to-background border-b border-white/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Для бизнеса</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">
              НАНИМАЙТЕ<br />
              <span className="gradient-text">ЛУЧШИХ СТУДЕНТОВ</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Найдите мотивированных молодых специалистов для стажировок, 
              частичной или полной занятости
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("register")}
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2"
              >
                <Icon name="Plus" size={18} />
                Разместить вакансию
              </button>
              <button className="px-8 py-4 bg-secondary text-foreground font-semibold rounded-xl hover:bg-secondary/80 transition-all border border-border">
                Смотреть тарифы
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {benefits.map(b => (
            <div key={b.title} className="card-hover p-5 rounded-xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name={b.icon as "Users"} size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-1">Компании</p>
              <h2 className="font-display text-3xl font-bold">ПРОВЕРЕННЫЕ РАБОТОДАТЕЛИ</h2>
            </div>
            <div className="relative hidden md:block">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Поиск компании..."
                className="pl-9 pr-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {employers.map(emp => (
              <div key={emp.name} className="card-hover p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center font-display font-bold text-2xl text-primary flex-shrink-0">
                    {emp.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{emp.name}</h3>
                      {emp.verified && (
                        <Icon name="BadgeCheck" size={16} className="text-primary" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{emp.industry}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{emp.desc}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-foreground">{emp.rating}</span>
                    <span className="text-xs text-muted-foreground">({emp.reviews})</span>
                  </div>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                    {emp.vacancies} вакансий
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 p-10 text-center">
          <img
            src="https://cdn.poehali.dev/projects/f95a81f7-0c80-4a83-a109-66d58d5f56f3/files/ffd73699-75fe-4ade-b651-e324de91ed38.jpg"
            alt="Работодатель"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold mb-3">СТАТЬ ПАРТНЁРОМ</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Разместите вакансию бесплатно и получите первые отклики уже сегодня
            </p>
            <button
              onClick={() => navigate("register")}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Зарегистрироваться как работодатель
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

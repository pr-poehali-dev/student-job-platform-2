import { useState } from "react";
import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const profileData = {
  firstName: "Алексей",
  lastName: "Козлов",
  middleName: "Дмитриевич",
  role: "student" as "student" | "employer",
  photo: "https://cdn.poehali.dev/projects/f95a81f7-0c80-4a83-a109-66d58d5f56f3/files/26467e67-1c2f-4cc3-9e3b-9f3ae03e58d2.jpg",
  birthDate: "12 марта 2003",
  age: 21,
  city: "Москва",
  phone: "+7 (916) 234-56-78",
  email: "a.kozlov@student.msu.ru",
  telegram: "@alex_kozlov",
  about: "Студент 3 курса факультета ВМК МГУ. Увлекаюсь веб-разработкой и машинным обучением. Ищу стажировку или частичную занятость в IT-компании. Открыт к интересным задачам и готов быстро обучаться.",
  education: { university: "МГУ им. М.В. Ломоносова", faculty: "Факультет вычислительной математики и кибернетики", specialty: "Прикладная математика и информатика", year: "3 курс", period: "2022 – 2026", gpa: "4.7 / 5.0" },
  skills: [
    { name: "React", level: 80 }, { name: "TypeScript", level: 75 },
    { name: "Python", level: 85 }, { name: "SQL", level: 70 },
    { name: "Git", level: 90 }, { name: "Figma", level: 60 },
    { name: "FastAPI", level: 65 }, { name: "Docker", level: 50 },
  ],
  languages: [{ lang: "Русский", level: "Родной" }, { lang: "Английский", level: "B2 Upper-Intermediate" }],
  schedule: {
    days: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    available: ["Вт", "Чт", "Пт", "Сб"],
    hours: "от 4 часов в день",
    type: "Гибкий / Удалённо",
    preferredStart: "После 14:00",
  },
  employment: ["Стажировка", "Частичная занятость", "Удалённо"],
  portfolio: [
    { name: "Task Manager App", tech: "React + FastAPI", url: "#", stars: 12 },
    { name: "ML модель предсказания цен", tech: "Python + sklearn", url: "#", stars: 7 },
  ],
};

const reviews = [
  { author: "Анна Сергеева", role: "HR-менеджер, Яндекс", rating: 5, date: "март 2024", text: "Алексей прошёл стажировку в нашем отделе. Невероятно быстро разбирается в новых технологиях, всегда выполняет задачи в срок. Особо отмечу высокую самостоятельность и инициативность. Рекомендую!", avatar: "АС" },
  { author: "Михаил Орлов", role: "Tech Lead, VK", rating: 5, date: "янв 2024", text: "Участвовал в нашем хакатоне — занял 2 место. Отличный командный игрок, умеет работать под давлением. Код пишет чистый и структурированный.", avatar: "МО" },
  { author: "Елена Васина", role: "Преподаватель, МГУ", rating: 5, date: "дек 2023", text: "Один из лучших студентов потока. Глубокое понимание алгоритмов, активен на семинарах. Сдал все проекты с оценкой «отлично».", avatar: "ЕВ" },
];

const applied = [
  { company: "Яндекс", role: "Junior Frontend", status: "Приглашение", date: "12 апр", statusColor: "text-primary bg-primary/10" },
  { company: "VK", role: "UI/UX дизайнер", status: "На рассмотрении", date: "10 апр", statusColor: "text-yellow-400 bg-yellow-400/10" },
  { company: "Сбер", role: "Аналитик данных", status: "Отказ", date: "8 апр", statusColor: "text-red-400 bg-red-400/10" },
];

const allDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export default function StudentProfilePage({ navigate }: Props) {
  const [activeTab, setActiveTab] = useState<"info" | "activity" | "reviews">("info");

  const fullName = `${profileData.lastName} ${profileData.firstName} ${profileData.middleName}`;
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="animate-fade-in">
      <div className="relative bg-gradient-to-b from-card/80 to-background border-b border-white/5 pt-8 pb-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-primary/5 blur-[80px] rounded-full" />
          <div className="absolute top-0 left-1/3 w-[300px] h-[200px] bg-cyan-500/5 blur-[60px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end pb-0">
            <div className="relative flex-shrink-0">
              <img
                src={profileData.photo}
                alt={fullName}
                className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover border-4 border-background shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-primary border-2 border-background flex items-center justify-center animate-pulse-green">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              </div>
            </div>

            <div className="flex-1 pb-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">{fullName}</h1>
                    <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/30">
                      {profileData.role === "student" ? "👨‍🎓 Студент" : "🏢 Работодатель"}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-semibold border border-green-500/30">
                      ✓ Верифицирован
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {profileData.education.university} · {profileData.education.faculty}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={14} className="text-primary" />
                      {profileData.city}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={14} className="text-primary" />
                      {profileData.birthDate} · {profileData.age} лет
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{avgRating}</span>
                      <span>({reviews.length} отзыва)</span>
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => navigate("chat")}
                    className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2"
                  >
                    <Icon name="MessageCircle" size={15} />
                    Написать
                  </button>
                  <button className="px-4 py-2.5 bg-secondary text-foreground text-sm font-medium rounded-xl hover:bg-secondary/80 transition-colors border border-border flex items-center gap-2">
                    <Icon name="Bookmark" size={15} />
                    Сохранить
                  </button>
                </div>
              </div>

              <div className="flex gap-1 mt-6 border-b border-transparent">
                {(["info", "activity", "reviews"] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab === "info" && "Информация"}
                    {tab === "activity" && "Активность"}
                    {tab === "reviews" && `Отзывы (${reviews.length})`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

        {activeTab === "info" && (
          <div className="animate-fade-in grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="User" size={16} className="text-primary" />
                  Личные данные
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Фамилия", value: profileData.lastName, icon: "User" },
                    { label: "Имя", value: profileData.firstName, icon: "User" },
                    { label: "Отчество", value: profileData.middleName, icon: "User" },
                    { label: "Дата рождения", value: `${profileData.birthDate} (${profileData.age} лет)`, icon: "Calendar" },
                    { label: "Город", value: profileData.city, icon: "MapPin" },
                    { label: "Email", value: profileData.email, icon: "Mail" },
                    { label: "Телефон", value: profileData.phone, icon: "Phone" },
                    { label: "Telegram", value: profileData.telegram, icon: "Send" },
                  ].map(field => (
                    <div key={field.label} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name={field.icon as "User"} size={14} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{field.label}</p>
                        <p className="text-sm font-medium text-foreground">{field.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="FileText" size={16} className="text-primary" />
                  О себе
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{profileData.about}</p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                  <Icon name="GraduationCap" size={16} className="text-primary" />
                  Образование
                </h3>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name="BookOpen" size={18} className="text-primary" />
                    </div>
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-semibold text-foreground">{profileData.education.university}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{profileData.education.faculty}</p>
                    <p className="text-sm text-muted-foreground">{profileData.education.specialty}</p>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">{profileData.education.year}</span>
                      <span className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground">{profileData.education.period}</span>
                      <span className="text-xs px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 font-medium">
                        ★ ГПА {profileData.education.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  Желаемый график работы
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Доступные дни</p>
                    <div className="flex gap-2 flex-wrap">
                      {allDays.map(day => (
                        <div
                          key={day}
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold transition-all ${
                            profileData.schedule.available.includes(day)
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { label: "Часов в день", value: profileData.schedule.hours, icon: "Clock" },
                      { label: "Начало работы", value: profileData.schedule.preferredStart, icon: "Sunrise" },
                      { label: "Формат", value: profileData.schedule.type, icon: "Laptop" },
                    ].map(item => (
                      <div key={item.label} className="p-3 rounded-lg bg-secondary/30 flex gap-3 items-start">
                        <Icon name={item.icon as "Clock"} size={15} className="text-primary mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Тип занятости</p>
                    <div className="flex flex-wrap gap-2">
                      {profileData.employment.map(e => (
                        <span key={e} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                  <Icon name="Code" size={16} className="text-primary" />
                  Портфолио
                </h3>
                <div className="space-y-3">
                  {profileData.portfolio.map(p => (
                    <div key={p.name} className="card-hover flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="ExternalLink" size={16} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">{p.name}</p>
                        <p className="text-xs text-muted-foreground">{p.tech}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                        {p.stars}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-5">
              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-foreground text-sm flex items-center gap-2">
                    <Icon name="Activity" size={14} className="text-primary" />
                    Профиль заполнен
                  </h3>
                  <span className="text-primary font-bold text-sm">92%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full transition-all" style={{ width: "92%" }} />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Добавьте портфолио для 100%</p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2 text-sm">
                  <Icon name="Layers" size={14} className="text-primary" />
                  Навыки
                </h3>
                <div className="space-y-3">
                  {profileData.skills.map(s => (
                    <div key={s.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-medium text-foreground">{s.name}</span>
                        <span className="text-xs text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2 text-sm">
                  <Icon name="Globe" size={14} className="text-primary" />
                  Языки
                </h3>
                <div className="space-y-3">
                  {profileData.languages.map(l => (
                    <div key={l.lang} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{l.lang}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">Средний рейтинг</span>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-display text-xl font-bold text-foreground">{avgRating}</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {[5, 4, 3].map(star => (
                    <div key={star} className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground w-4">{star}</span>
                      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full"
                          style={{ width: star === 5 ? "85%" : star === 4 ? "10%" : "5%" }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-6">
                        {star === 5 ? reviews.length - 1 : star === 4 ? 1 : 0}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className="w-full mt-4 py-2.5 rounded-lg bg-primary/20 text-primary text-sm font-medium hover:bg-primary/30 transition-colors"
                >
                  Читать отзывы →
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "activity" && (
          <div className="animate-fade-in grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                <Icon name="Briefcase" size={16} className="text-primary" />
                Отклики на вакансии
              </h3>
              <div className="space-y-3">
                {applied.map(a => (
                  <div key={a.role} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center font-display font-bold text-primary text-sm flex-shrink-0">
                        {a.company[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{a.role}</p>
                        <p className="text-xs text-muted-foreground">{a.company} · {a.date}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${a.statusColor}`}>
                      {a.status}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("vacancies")}
                className="w-full mt-4 py-3 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="Plus" size={14} />
                Откликнуться на новую вакансию
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "12", label: "Откликов", icon: "Send" },
                  { value: "3", label: "Интервью", icon: "Calendar" },
                  { value: "1", label: "Оффер", icon: "Award" },
                ].map(s => (
                  <div key={s.label} className="p-4 rounded-xl bg-card border border-border text-center">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <Icon name={s.icon as "Send"} size={16} className="text-primary" />
                    </div>
                    <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-card border border-border">
                <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2 text-sm">
                  <Icon name="Bell" size={14} className="text-primary" />
                  Последние события
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: "CheckCircle", text: "Яндекс пригласил на интервью", time: "2 часа назад", color: "text-primary" },
                    { icon: "Eye", text: "VK просмотрели ваш профиль", time: "5 часов назад", color: "text-blue-400" },
                    { icon: "MessageCircle", text: "Новое сообщение от Яндекс HR", time: "вчера", color: "text-cyan-400" },
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon name={a.icon as "Bell"} size={14} className={`mt-0.5 flex-shrink-0 ${a.color}`} />
                      <div>
                        <p className="text-sm text-foreground">{a.text}</p>
                        <p className="text-xs text-muted-foreground">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="animate-fade-in space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 flex flex-col items-center justify-center text-center">
                <p className="font-display text-6xl font-bold gradient-text">{avgRating}</p>
                <div className="flex gap-1 my-2">
                  {[1,2,3,4,5].map(s => (
                    <Icon key={s} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{reviews.length} отзыва</p>
              </div>
              <div className="md:col-span-3 grid grid-cols-3 gap-4">
                {[
                  { label: "Ответственность", val: 98 },
                  { label: "Коммуникация", val: 95 },
                  { label: "Технические навыки", val: 92 },
                  { label: "Пунктуальность", val: 100 },
                  { label: "Инициативность", val: 90 },
                  { label: "Обучаемость", val: 97 },
                ].map(c => (
                  <div key={c.label} className="p-4 rounded-xl bg-card border border-border text-center">
                    <p className="font-display text-2xl font-bold text-foreground">{c.val}%</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">{c.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((r, i) => (
                <div key={i} className="card-hover p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center font-display font-bold text-foreground flex-shrink-0">
                      {r.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-foreground">{r.author}</p>
                          <p className="text-xs text-muted-foreground">{r.role}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="flex items-center gap-1 justify-end">
                            {[1,2,3,4,5].map(s => (
                              <Icon
                                key={s}
                                name="Star"
                                size={13}
                                className={s <= r.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}
                              />
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{r.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-card border border-border text-center">
              <Icon name="Star" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-display font-bold text-foreground mb-2">Оставить отзыв</h4>
              <p className="text-sm text-muted-foreground mb-4">Работали с этим студентом? Поделитесь опытом.</p>
              <button
                onClick={() => navigate("register")}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all"
              >
                Написать отзыв
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

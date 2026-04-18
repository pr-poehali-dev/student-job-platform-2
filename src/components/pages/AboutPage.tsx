import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const team = [
  { name: "Максим Орлов", role: "CEO & Основатель", emoji: "🚀", bio: "Сам нашёл первую работу на платформе будучи студентом. Решил масштабировать идею." },
  { name: "Алина Петрова", role: "Директор по продукту", emoji: "🎯", bio: "Эксперт в студенческом рынке труда. Работала HR в 3 крупных компаниях." },
  { name: "Игорь Васин", role: "CTO", emoji: "⚡", bio: "10 лет опыта в разработке. Строит платформу, которую сам хотел бы иметь в студенчестве." },
];

const milestones = [
  { year: "2022", title: "Запуск", desc: "Первые 100 студентов и 20 работодателей в Москве" },
  { year: "2023", title: "Рост", desc: "Выход в 15 городов, 5 000 студентов, партнёрство с 3 вузами" },
  { year: "2024", title: "Сейчас", desc: "12 000+ студентов, 850+ работодателей, 3 200+ вакансий" },
];

export default function AboutPage({ navigate }: Props) {
  return (
    <div className="animate-fade-in">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">О платформе</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              МЫ СТРОИМ МОСТ<br />
              <span className="gradient-text">МЕЖДУ ВУЗОМ И КАРЬЕРОЙ</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              СтудРабота — это платформа, которая решает главную проблему студентов: 
              найти работу без опыта, не жертвуя учёбой. Мы соединяем мотивированных 
              студентов с компаниями, которые ценят молодые таланты.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("register")}
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                Присоединиться
              </button>
              <button
                onClick={() => navigate("support")}
                className="px-8 py-4 bg-secondary text-foreground font-semibold rounded-xl hover:bg-secondary/80 transition-all border border-border"
              >
                Написать нам
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map(m => (
              <div key={m.year} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-lg">{m.year}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Команда</p>
          <h2 className="font-display text-4xl font-bold">ЛЮДИ, КОТОРЫЕ ДЕЛАЮТ<br />ЭТО ВОЗМОЖНЫМ</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {team.map(t => (
            <div key={t.name} className="card-hover p-6 rounded-xl bg-card border border-border text-center">
              <div className="text-4xl mb-4">{t.emoji}</div>
              <h3 className="font-display font-bold text-foreground mb-1">{t.name}</h3>
              <p className="text-xs text-primary font-medium mb-3">{t.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Миссия</p>
            <h2 className="font-display text-4xl font-bold mb-5">КАЖДЫЙ СТУДЕНТ<br />ЗАСЛУЖИВАЕТ ШАНСА</h2>
            <div className="space-y-4">
              {[
                { icon: "Target", title: "Честность", desc: "Проверяем каждого работодателя и публикуем только реальные отзывы" },
                { icon: "Heart", title: "Забота о студентах", desc: "Все вакансии адаптированы под студенческий график и уровень" },
                { icon: "Globe", title: "Доступность", desc: "Бесплатная регистрация для студентов навсегда" },
              ].map(v => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={v.icon as "Target"} size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-0.5">{v.title}</h4>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Студентов трудоустроено", value: "8 400+" },
              { label: "Вузов-партнёров", value: "47" },
              { label: "Городов России", value: "28" },
              { label: "Лет на рынке", value: "2+" },
            ].map(s => (
              <div key={s.label} className="p-6 rounded-xl bg-card border border-border text-center">
                <p className="font-display text-3xl font-bold gradient-text">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

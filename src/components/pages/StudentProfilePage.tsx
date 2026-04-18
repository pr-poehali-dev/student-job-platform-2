import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const skills = ["React", "TypeScript", "Python", "Figma", "SQL", "Git"];
const applied = [
  { company: "Яндекс", role: "Junior Frontend", status: "На рассмотрении", date: "12 апр", statusColor: "text-yellow-400 bg-yellow-400/10" },
  { company: "VK", role: "UI/UX дизайнер", status: "Приглашение", date: "10 апр", statusColor: "text-primary bg-primary/10" },
  { company: "Сбер", role: "Аналитик данных", status: "Отказ", date: "8 апр", statusColor: "text-red-400 bg-red-400/10" },
];

export default function StudentProfilePage({ navigate }: Props) {
  return (
    <div className="animate-fade-in container mx-auto px-4 py-10">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-6">Мой профиль</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-5">
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center mx-auto mb-4 text-3xl font-display font-bold text-primary-foreground">
              АК
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">Алексей Козлов</h2>
            <p className="text-sm text-muted-foreground mt-1">МГУ · Факультет ВМК · 3 курс</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Icon name="MapPin" size={13} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Москва</span>
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <div className="text-center">
                <p className="font-display font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground">Откликов</p>
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Интервью</p>
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-primary">92%</p>
                <p className="text-xs text-muted-foreground">Профиль</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Icon name="Layers" size={16} className="text-primary" />
              Навыки
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {s}
                </span>
              ))}
              <button className="px-3 py-1.5 rounded-full border border-dashed border-border text-muted-foreground text-sm hover:border-primary/50 hover:text-primary transition-colors">
                + Добавить
              </button>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Icon name="GraduationCap" size={16} className="text-primary" />
              Образование
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">МГУ им. М.В. Ломоносова</p>
                  <p className="text-xs text-muted-foreground">Прикладная математика · 2022 – 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-5">
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
                <Icon name="User" size={16} className="text-primary" />
                О себе
              </h3>
              <button className="text-xs text-primary hover:text-primary/80 flex items-center gap-1">
                <Icon name="Pencil" size={12} /> Редактировать
              </button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Студент 3 курса факультета ВМК МГУ. Увлекаюсь веб-разработкой и машинным обучением. 
              Ищу стажировку или частичную занятость в IT-компании. Готов к обучению и интересным задачам.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
              <Icon name="Briefcase" size={16} className="text-primary" />
              Мои отклики
            </h3>
            <div className="space-y-3">
              {applied.map(a => (
                <div key={a.role} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center font-display font-bold text-primary text-sm">
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

          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
                <Icon name="Activity" size={16} className="text-primary" />
                Заполненность профиля
              </h3>
              <span className="text-primary font-bold">92%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full" style={{ width: "92%" }} />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Добавьте портфолио для 100%</p>
          </div>

          <button
            onClick={() => navigate("chat")}
            className="w-full py-4 rounded-xl bg-primary/10 border border-primary/30 text-primary font-semibold hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
          >
            <Icon name="MessageCircle" size={18} />
            Написать работодателю
          </button>
        </div>
      </div>
    </div>
  );
}

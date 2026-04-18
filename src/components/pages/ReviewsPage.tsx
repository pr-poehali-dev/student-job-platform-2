import { useState } from "react";
import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const studentReviewsOfEmployers = [
  { author: "Иван М.", university: "МГТУ им. Баумана", company: "Яндекс", rating: 5, text: "Отличная стажировка! Реальные задачи с первого дня, менторство от сильных разработчиков. Рекомендую всем.", date: "14 апр 2024", helpful: 23 },
  { author: "Екатерина С.", university: "МГУ", company: "Сбер", rating: 4, text: "Хорошая программа для студентов. Гибкий график помог совмещать с учёбой. Немного бюрократии, но в целом очень достойно.", date: "10 апр 2024", helpful: 18 },
  { author: "Дмитрий К.", university: "ВШЭ", company: "VK", rating: 5, text: "Лучшая стажировка, которую я мог представить. Молодая команда, современные технологии, реальные проекты.", date: "7 апр 2024", helpful: 31 },
  { author: "Алиса Р.", university: "СПБГУ", company: "Тинькофф", rating: 4, text: "Быстрый темп работы, много обучения. Платят хорошо для студента. Иногда приходится задерживаться, но задачи интересные.", date: "5 апр 2024", helpful: 15 },
];

const employerReviewsOfStudents = [
  { author: "Анна К.", company: "Яндекс", role: "HR-менеджер", student: "Frontend разработчик", rating: 5, text: "Отличный студент! Быстро обучается, всегда выполняет задачи в срок. Взяли в штат после стажировки.", date: "12 апр 2024" },
  { author: "Сергей П.", company: "VK", role: "Tech Lead", student: "UX-дизайнер", rating: 5, text: "Невероятно талантливый дизайнер. Его работы уже в нашем продукте. Всем советую рассмотреть студентов с платформы.", date: "9 апр 2024" },
  { author: "Мария В.", company: "Авито", role: "Marketing Director", student: "SMM-менеджер", rating: 4, text: "Хорошо разбирается в социальных сетях, генерирует идеи. Нужно чуть больше самостоятельности, но потенциал огромный.", date: "3 апр 2024" },
];

export default function ReviewsPage({ navigate }: Props) {
  const [activeTab, setActiveTab] = useState<"students" | "employers">("students");

  return (
    <div className="animate-fade-in container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Честные мнения</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">ОТЗЫВЫ</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Реальный опыт студентов и работодателей — без фильтров
        </p>
      </div>

      <div className="flex gap-2 p-1 bg-secondary rounded-xl w-fit mx-auto mb-10">
        <button
          onClick={() => setActiveTab("students")}
          className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === "students" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Студенты о работодателях
        </button>
        <button
          onClick={() => setActiveTab("employers")}
          className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === "employers" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Работодатели о студентах
        </button>
      </div>

      {activeTab === "students" && (
        <div className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { value: "4.8", label: "Средний рейтинг работодателей", icon: "Star" },
              { value: "1 234", label: "Отзывов от студентов", icon: "MessageSquare" },
              { value: "97%", label: "Рекомендуют платформу", icon: "ThumbsUp" },
            ].map(s => (
              <div key={s.label} className="p-5 rounded-xl bg-card border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name={s.icon as "Star"} size={22} className="text-primary" />
                </div>
                <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            {studentReviewsOfEmployers.map((r, i) => (
              <div key={i} className="card-hover p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center font-display font-bold text-foreground">
                      {r.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{r.author}</p>
                      <p className="text-xs text-muted-foreground">{r.university}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className="flex items-center gap-1 justify-end">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Icon
                          key={j}
                          name="Star"
                          size={13}
                          className={j < r.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{r.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.text}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="ThumbsUp" size={12} />
                    Полезно ({r.helpful})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "employers" && (
        <div className="animate-fade-in">
          <div className="space-y-5">
            {employerReviewsOfStudents.map((r, i) => (
              <div key={i} className="card-hover p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center font-display font-bold text-foreground">
                      {r.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{r.author}</p>
                      <p className="text-xs text-muted-foreground">{r.role}, {r.company}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className="flex items-center gap-1 justify-end">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Icon
                          key={j}
                          name="Star"
                          size={13}
                          className={j < r.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">о: {r.student}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{r.text}</p>
                <p className="text-xs text-muted-foreground pt-3 border-t border-border">{r.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <button
          onClick={() => navigate("register")}
          className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25"
        >
          Оставить отзыв
        </button>
      </div>
    </div>
  );
}

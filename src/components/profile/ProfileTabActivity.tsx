import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";
import { applied } from "./profileData";

interface ProfileTabActivityProps {
  navigate: (page: Page) => void;
}

export default function ProfileTabActivity({ navigate }: ProfileTabActivityProps) {
  return (
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
  );
}

import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const stats = [
  { label: "Откликов", value: "12", icon: "Send", trend: "+3 за неделю", up: true },
  { label: "Просмотры профиля", value: "48", icon: "Eye", trend: "+12 за неделю", up: true },
  { label: "Приглашений", value: "3", icon: "Bell", trend: "+1 новое", up: true },
  { label: "Сохранённых", value: "7", icon: "Bookmark", trend: "без изменений", up: false },
];

const recentActivity = [
  { icon: "CheckCircle", text: "VK Team просмотрели ваш профиль", time: "2 часа назад", color: "text-primary" },
  { icon: "MessageCircle", text: "Новое сообщение от Яндекс HR", time: "5 часов назад", color: "text-blue-400" },
  { icon: "Star", text: "Вакансия «Backend разработчик» добавлена в избранное", time: "вчера", color: "text-yellow-400" },
  { icon: "XCircle", text: "Отказ по вакансии в Сбер", time: "2 дня назад", color: "text-red-400" },
  { icon: "Send", text: "Вы откликнулись на вакансию в Ozon", time: "3 дня назад", color: "text-muted-foreground" },
];

const recommended = [
  { company: "Wildberries", role: "Frontend стажёр", salary: "50 000 ₽", match: "97%" },
  { company: "HeadHunter", role: "Junior React разработчик", salary: "65 000 ₽", match: "94%" },
  { company: "EPAM", role: "Стажёр-разработчик", salary: "45 000 ₽", match: "89%" },
];

export default function DashboardPage({ navigate }: Props) {
  return (
    <div className="animate-fade-in h-[calc(100vh-64px)] flex overflow-hidden">
      <div className="hidden lg:flex w-64 flex-col bg-card border-r border-border p-4 gap-1 flex-shrink-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 mb-2">Навигация</p>
        {[
          { icon: "LayoutDashboard", label: "Дашборд", active: true },
          { icon: "User", label: "Профиль", page: "profile" as Page },
          { icon: "Briefcase", label: "Мои отклики" },
          { icon: "Bookmark", label: "Избранное" },
          { icon: "MessageCircle", label: "Сообщения", page: "chat" as Page },
          { icon: "Star", label: "Отзывы", page: "reviews" as Page },
        ].map(item => (
          <button
            key={item.label}
            onClick={() => item.page && navigate(item.page)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              item.active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <Icon name={item.icon as "User"} size={16} />
            {item.label}
          </button>
        ))}

        <div className="mt-auto pt-4 border-t border-border">
          <button
            onClick={() => navigate("support")}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 w-full transition-colors"
          >
            <Icon name="HelpCircle" size={16} />
            Поддержка
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Добро пожаловать, Алексей!</h1>
            <p className="text-sm text-muted-foreground mt-0.5">18 апреля 2024 · Пятница</p>
          </div>
          <button
            onClick={() => navigate("vacancies")}
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            <Icon name="Search" size={15} />
            Найти вакансии
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name={s.icon as "Send"} size={18} className="text-primary" />
                </div>
                <Icon
                  name={s.up ? "TrendingUp" : "Minus"}
                  size={14}
                  className={s.up ? "text-primary" : "text-muted-foreground"}
                />
              </div>
              <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              <p className={`text-xs mt-1 ${s.up ? "text-primary" : "text-muted-foreground"}`}>{s.trend}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
              <Icon name="Activity" size={16} className="text-primary" />
              Активность
            </h3>
            <div className="space-y-4">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 ${a.color}`}>
                    <Icon name={a.icon as "Activity"} size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{a.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
              <Icon name="Sparkles" size={16} className="text-primary" />
              Рекомендованные вакансии
            </h3>
            <div className="space-y-3">
              {recommended.map(r => (
                <div key={r.role} className="card-hover p-4 rounded-lg bg-secondary/50 border border-border flex items-center gap-3 cursor-pointer" onClick={() => navigate("vacancies")}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm flex-shrink-0">
                    {r.company[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{r.role}</p>
                    <p className="text-xs text-muted-foreground">{r.company} · {r.salary}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium flex-shrink-0">
                    {r.match}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("vacancies")}
              className="w-full mt-4 py-3 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Смотреть все →
            </button>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-semibold text-foreground">Заполните профиль до 100%</h3>
            <span className="text-primary font-bold">92%</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-3">
            <div className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full" style={{ width: "92%" }} />
          </div>
          <p className="text-sm text-muted-foreground mb-4">Добавьте ссылку на портфолио и повысьте шансы на отклик в 2 раза</p>
          <button
            onClick={() => navigate("profile")}
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Дополнить профиль
          </button>
        </div>
      </div>
    </div>
  );
}

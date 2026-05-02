import Icon from "@/components/ui/icon";
import { profileData, reviews, allDays } from "./profileData";

interface ProfileTabInfoProps {
  avgRating: string;
  onShowReviews: () => void;
}

export default function ProfileTabInfo({ avgRating, onShowReviews }: ProfileTabInfoProps) {
  return (
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
            onClick={onShowReviews}
            className="w-full mt-4 py-2.5 rounded-lg bg-primary/20 text-primary text-sm font-medium hover:bg-primary/30 transition-colors"
          >
            Читать отзывы →
          </button>
        </div>
      </div>
    </div>
  );
}

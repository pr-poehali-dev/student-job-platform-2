import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";
import { profileData, reviews } from "./profileData";

interface ProfileHeaderProps {
  navigate: (page: Page) => void;
  activeTab: "info" | "activity" | "reviews";
  setActiveTab: (tab: "info" | "activity" | "reviews") => void;
  fullName: string;
  avgRating: string;
}

export default function ProfileHeader({ navigate, activeTab, setActiveTab, fullName, avgRating }: ProfileHeaderProps) {
  return (
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
  );
}

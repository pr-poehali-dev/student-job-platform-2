import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";
import { reviews } from "./profileData";

interface ProfileTabReviewsProps {
  navigate: (page: Page) => void;
  avgRating: string;
}

export default function ProfileTabReviews({ navigate, avgRating }: ProfileTabReviewsProps) {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 flex flex-col items-center justify-center text-center">
          <p className="font-display text-6xl font-bold gradient-text">{avgRating}</p>
          <div className="flex gap-1 my-2">
            {[1, 2, 3, 4, 5].map(s => (
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
                      {[1, 2, 3, 4, 5].map(s => (
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
  );
}

import { useState } from "react";
import { type Page } from "@/pages/Index";
import { profileData, reviews } from "@/components/profile/profileData";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabInfo from "@/components/profile/ProfileTabInfo";
import ProfileTabActivity from "@/components/profile/ProfileTabActivity";
import ProfileTabReviews from "@/components/profile/ProfileTabReviews";

interface Props { navigate: (page: Page) => void; }

export default function StudentProfilePage({ navigate }: Props) {
  const [activeTab, setActiveTab] = useState<"info" | "activity" | "reviews">("info");

  const fullName = `${profileData.lastName} ${profileData.firstName} ${profileData.middleName}`;
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="animate-fade-in">
      <ProfileHeader
        navigate={navigate}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        fullName={fullName}
        avgRating={avgRating}
      />

      <div className="container mx-auto px-4 py-8">
        {activeTab === "info" && (
          <ProfileTabInfo
            avgRating={avgRating}
            onShowReviews={() => setActiveTab("reviews")}
          />
        )}
        {activeTab === "activity" && (
          <ProfileTabActivity navigate={navigate} />
        )}
        {activeTab === "reviews" && (
          <ProfileTabReviews navigate={navigate} avgRating={avgRating} />
        )}
      </div>
    </div>
  );
}

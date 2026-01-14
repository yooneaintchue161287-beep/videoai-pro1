import DashboardHeader from "@/components/dashboard/DashboardHeader";
import CreditCard from "@/components/dashboard/CreditCard";
import UsageBar from "@/components/dashboard/UsageBar";
import VideoHistory from "@/components/dashboard/VideoHistory";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <DashboardHeader />

        <div className="grid md:grid-cols-3 gap-6">
          <CreditCard />
          <UsageBar />
        </div>

        <VideoHistory />
      </div>
    </div>
  );
}

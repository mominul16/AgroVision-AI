import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { DashboardStats } from '@/components/dashboard/dashboard-stats'
import { WeatherWidget } from '@/components/dashboard/weather-widget'
import { RecentScans } from '@/components/dashboard/recent-scans'
import { NotificationPanel } from '@/components/dashboard/notification-panel'
import { AnalyticsChart } from '@/components/dashboard/analytics-chart'
import { ActivityTimeline } from '@/components/dashboard/activity-timeline'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">ড্যাশবোর্ড</h1>
          <p className="text-muted-foreground">আপনার কৃষি কার্যক্রমের সারসংক্ষেপ</p>
        </div>

        {/* Stats */}
        <DashboardStats />

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column - Chart */}
          <div className="lg:col-span-2">
            <AnalyticsChart />
          </div>

          {/* Right column - Weather */}
          <div>
            <WeatherWidget />
          </div>
        </div>

        {/* Bottom grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent scans */}
          <div className="lg:col-span-2">
            <RecentScans />
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            <NotificationPanel />
            <ActivityTimeline />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

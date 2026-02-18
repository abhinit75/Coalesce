import PageContainer from "@/components/layouts/page-container";
import { Terminal, Users } from "lucide-react";
import SettingsCard from "./components/settings-card";

export default function SettingsPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground mt-1">
              Manage your workspace settings.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SettingsCard
            title="Team Members"
            description="Manage your team members and their permissions."
            icon={<Users className="h-6 w-6 text-primary" />}
            href="settings/team"
          />
          <SettingsCard
            title="Developers"
            description="Manage your API keys."
            icon={<Terminal className="h-6 w-6 text-primary" />}
            href="settings/developers"
          />
        </div>
      </div>
    </PageContainer>
  );
}

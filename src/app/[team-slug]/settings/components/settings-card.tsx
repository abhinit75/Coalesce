"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useTeam } from "@/app/providers/team-provider";

const SettingsCard = ({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) => {
  const { teamData } = useTeam();
  const teamSlug = teamData?.slug || "";

  return (
    <Link href={`/${teamSlug}/${href}`}>
      <Card className="p-6 transition-all hover:bg-accent">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-primary/10 p-2">{icon}</div>
          <div className="space-y-1">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SettingsCard;

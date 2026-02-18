"use client";

import { useState } from "react";
import { MembersTable } from "./_components/members-table";
import { InviteMemberModal } from "./_components/invite-member-modal";
import PageContainer from "@/components/layouts/page-container";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import LoadingScreen from "@/components/loading-screen";
import { useUser } from "@clerk/nextjs";

interface Member {
  id: string;
  authId: string | null;
  email: string;
  name: string | null;
  role: "ADMIN" | "MEMBER" | "SUPER_ADMIN";
  status: "ACTIVE" | "PENDING";
  joinedAt: Date;
}

export default function MembersPage() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const params = useParams();
  const teamSlug = params["team-slug"] as string;
  const { user } = useUser();

  // Fetch team members
  const { data, error, isLoading, mutate } = useSWR<{ members: Member[] }>(
    teamSlug ? `/api/team/get-members?teamSlug=${teamSlug}` : null,
    fetcher
  );

  const members = data?.members || [];

  const currentUserAuthId = user?.id ?? null;
  const currentUserRole: "ADMIN" | "MEMBER" | "SUPER_ADMIN" =
    members.find((m) => m.authId && m.authId === currentUserAuthId)?.role ??
    "MEMBER";

  // Show loading screen while fetching data
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Show error state if there's an error
  if (error) {
    return (
      <PageContainer>
        <div className="text-center py-8">
          <p className="text-red-600">
            Error loading team members: {error.message}
          </p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Team Members</h1>
            <p className="text-muted-foreground mt-1">
              Manage your team members and their permissions.
            </p>
          </div>
          <Button
            onClick={() => setIsInviteModalOpen(true)}
            disabled={currentUserRole === "MEMBER"}
          >
            <Plus className="w-4 h-4 mr-2" />
            Invite Member
          </Button>
        </div>

        <MembersTable
          members={members}
          currentUserAuthId={currentUserAuthId}
          currentUserRole={currentUserRole}
          onChanged={() => mutate()}
          teamSlug={teamSlug}
        />

        <InviteMemberModal
          open={isInviteModalOpen}
          onOpenChange={setIsInviteModalOpen}
          onSuccess={() => {
            // Refresh members list after successful invite
            mutate();
          }}
        />
      </div>
    </PageContainer>
  );
}

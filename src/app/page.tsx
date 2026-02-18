"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useTeam } from "@/app/providers/team-provider";
import LoadingScreen from "@/components/loading-screen";

export default function Home() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();
  const { teamData, loading: isTeamLoading } = useTeam();

  useEffect(() => {
    // Wait for both auth and team data to load
    if (!isLoaded || isTeamLoading) return;

    if (!isSignedIn) {
      router.push("/sign-in");
    } else if (teamData?.slug) {
      router.push(`/${teamData.slug}/dashboard`);
    } else {
      router.push("/create-team");
    }
  }, [isSignedIn, isLoaded, router, teamData, isTeamLoading]);

  // Show loading screen while either auth or team data is loading
  if (!isLoaded || isTeamLoading) {
    return <LoadingScreen />;
  }

  return null;
}

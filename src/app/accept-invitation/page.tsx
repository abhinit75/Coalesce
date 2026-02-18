"use client";

import { useEffect } from "react";
import { useSignIn, useSignUp, SignUp } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function Page() {
  useSignUp();
  const { signIn, setActive: setActiveSignIn } = useSignIn();
  const router = useRouter();

  // Get the token and account status from the query params
  const searchParams = useSearchParams();
  const token = searchParams.get("__clerk_ticket");
  const accountStatus = searchParams.get("__clerk_status");
  const teamSlug = searchParams.get("teamSlug");

  useEffect(() => {
    if (accountStatus === "complete" && teamSlug) {
      router.replace(`/${teamSlug}/dashboard`);
    }
  }, [accountStatus, teamSlug, router]);

  useEffect(() => {
    if (!signIn || !setActiveSignIn || !token || accountStatus !== "sign_in") {
      return;
    }

    const createSignIn = async () => {
      try {
        const signInAttempt = await signIn.create({
          strategy: "ticket",
          ticket: token as string,
        });

        if (signInAttempt.status === "complete") {
          await setActiveSignIn({
            session: signInAttempt.createdSessionId,
          });
          if (teamSlug) {
            router.replace(`/${teamSlug}/dashboard`);
          }
        } else {
          console.error(JSON.stringify(signInAttempt, null, 2));
        }
      } catch (err) {
        console.error("Error:", JSON.stringify(err, null, 2));
      }
    };

    createSignIn();
  }, [signIn, setActiveSignIn, token, accountStatus, teamSlug, router]);

  // Handle submission of the sign-up form

  if (!token) {
    return <p>No invitation token found.</p>;
  }

  const header = (
    <div className="mx-auto px-4 text-center">
      <h1 className="mb-2 text-xl font-semibold">Accept invitation</h1>
      <p className="mb-2 leading-normal text-muted-foreground max-w-lg mx-auto">
        {teamSlug
          ? `You've been invited to join the ${teamSlug} team.`
          : "You've been invited to join a team."}
      </p>
    </div>
  );

  if (accountStatus === "sign_in") {
    return (
      <div className="pt-4">
        {header}
        <div className="pt-4 max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Signing you in</CardTitle>
              <CardDescription>Completing your invitation...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Just a moment...</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (accountStatus === "sign_up") {
    return (
      <div className="pt-4">
        {header}

        <SignUp
          routing="hash"
          signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
          afterSignUpUrl={teamSlug ? `/${teamSlug}/dashboard` : "/"}
        />
      </div>
    );
  }

  return (
    <div className="pt-4">
      {header}
      <div className="pt-4 max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Organization invitation accepted</CardTitle>
            <CardDescription>
              {teamSlug ? `Redirecting to ${teamSlug}...` : "You're all set."}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

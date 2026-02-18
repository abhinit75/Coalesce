"use client";

import PageContainer from "@/components/layouts/page-container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTeam } from "@/app/providers/team-provider";

export default function DevelopersPage() {
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const { toast } = useToast();
  const { teamData } = useTeam();
  const apiKey = teamData?.apiKey || "";
  const teamId = teamData?.id || "";
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(apiKey);
    setCopied(true);
    toast({
      title: "API key successfully copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const maskedApiKey =
    revealed || !apiKey
      ? apiKey
      : `${apiKey.slice(0, 3)}${"•".repeat(Math.max(0, apiKey.length - 3))}`;

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Developers</h1>
            <p className="text-muted-foreground mt-1">
              Manage your API keys and developer settings.
            </p>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>
              Use this API key to authenticate your API requests. Make sure to
              keep it secure and never share it publicly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="rounded-lg border p-3 bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono">{maskedApiKey}</code>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setRevealed(!revealed)}
                      aria-label={revealed ? "Hide API key" : "Show API key"}
                    >
                      {revealed ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyToClipboard}
                      aria-label="Copy API key"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-[0.8rem] text-muted-foreground">
                View the{" "}
                <a
                  href="#"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  documentation
                </a>{" "}
                to get started using the API.
              </p>
              <div className="mt-6 pt-6 border-t">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium">Team ID</label>
                  <CardDescription>
                    Use your teamId alongside the API key to authenticate your
                    requests.
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-mono bg-muted/50 px-2 py-1 rounded">
                      {teamId}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        navigator.clipboard.writeText(teamId);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      aria-label="Copy Team ID"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
  className?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  action?: React.ReactNode;
}

export function EmptyState({
  title,
  subtitle,
  className,
  icon: Icon = Inbox,
  action,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed bg-muted/20 p-8 text-center",
        className
      )}
    >
      <div className="mb-3 rounded-md bg-muted p-3">
        <Icon className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="text-base font-medium leading-none">{title}</h3>
      {subtitle ? (
        <p className="mt-1 max-w-md text-sm text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

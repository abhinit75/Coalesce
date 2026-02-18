"use client";

// Simple wrapper around Sonner for toast notifications
import { toast as sonnerToast } from "sonner";
import * as React from "react";

type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive" | "success";
};

type Toast = ToastProps;

function toast({ title, description, variant = "default" }: Toast) {
  const id = Math.random().toString(36);

  // Use Sonner's toast methods based on variant
  if (variant === "destructive") {
    sonnerToast.error(title, { description: description as string });
  } else if (variant === "success") {
    sonnerToast.success(title, { description: description as string });
  } else {
    sonnerToast(title, { description: description as string });
  }

  const dismiss = () => sonnerToast.dismiss();

  return {
    id,
    dismiss,
  };
}

function useToast() {
  return {
    toast,
    dismiss: (id?: string) => sonnerToast.dismiss(id),
  };
}

export { useToast, toast };

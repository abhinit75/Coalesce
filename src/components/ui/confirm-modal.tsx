"use client";

import { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive";
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Continue",
  cancelText = "Cancel",
  variant = "default",
}: ConfirmModalProps) {
  // Cleanup function to ensure proper modal state
  useEffect(() => {
    if (!isOpen) {
      // Remove any lingering overlay or focus trap
      document.body.style.pointerEvents = "";
    }
    return () => {
      document.body.style.pointerEvents = "";
    };
  }, [isOpen]);

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          // Ensure cleanup when modal is closed
          setTimeout(() => {
            onClose();
            document.body.style.pointerEvents = "";
          }, 0);
        }
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {typeof description === "string"
              ? description.split(/(["'].*?["'])/).map((part, i) =>
                  part.startsWith('"') || part.startsWith("'") ? (
                    <span key={i} className="font-medium text-foreground">
                      {part.slice(1, -1)}
                    </span>
                  ) : (
                    part
                  )
                )
              : description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onClose()}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className={
              variant === "destructive"
                ? "bg-red-600 hover:bg-red-700 text-white"
                : undefined
            }
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// components/ui/drawer.tsx
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils"; // ajusta si no tienes este helper

const Drawer = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerClose = DialogPrimitive.Close;

type DrawerContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  side?: "left" | "right" | "top" | "bottom";
};

function DrawerContent({
  className,
  children,
  side = "bottom",
  ...props
}: DrawerContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(
          "fixed inset-0 z-50 bg-black/40",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in data-[state=closed]:fade-out"
        )}
      />
      <DialogPrimitive.Content
        data-side={side}
        className={cn(
          // base panel
          "fixed z-50 bg-background shadow-lg border",
          "data-[state=open]:duration-300 data-[state=closed]:duration-200",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          // posición y animación según side
          side === "right" &&
            "right-0 top-0 h-dvh w-3/4 sm:max-w-sm translate-x-full data-[state=open]:translate-x-0",
          side === "left" &&
            "left-0 top-0 h-dvh w-3/4 sm:max-w-sm -translate-x-full data-[state=open]:translate-x-0",
          side === "top" &&
            "left-0 top-0 w-full max-h-[80vh] -translate-y-full data-[state=open]:translate-y-0 rounded-b-lg border-b",
          side === "bottom" &&
            "left-0 bottom-0 w-full max-h-[80vh] translate-y-full data-[state=open]:translate-y-0 rounded-t-lg border-t",
          className
        )}
        {...props}
      >
        {/* “handle” visible para top/bottom */}
        {(side === "bottom" || side === "top") && (
          <div className="mx-auto my-2 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted md:block" />
        )}
        <div className="p-4">{children}</div>
        <DialogPrimitive.Close
          aria-label="Close"
          className="absolute right-3 top-3 rounded-md p-2 text-muted-foreground hover:bg-accent"
        >
          ✕
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

function DrawerHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col gap-0.5 p-4 md:gap-1.5 md:text-left text-center",
        className
      )}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("text-base font-semibold leading-none", className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
};

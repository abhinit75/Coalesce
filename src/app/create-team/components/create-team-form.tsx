"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { mutate } from "swr";
import LoadingScreen from "@/components/loading-screen";
import { useOrganizationList, useSession, useUser } from "@clerk/nextjs";

const formSchema = z.object({
  teamName: z.string().min(2, {
    message: "Team name must be at least 2 characters.",
  }),
});

export const CreateTeamForm = () => {
  const { userId: authId } = useAuth();
  const router = useRouter();
  const { setActive } = useOrganizationList();
  const { session } = useSession();
  const { user } = useUser();

  console.log(user);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
    },
  });

  if (!authId) {
    return <LoadingScreen />;
  }

  const generateSlug = (teamName: string) => {
    return teamName
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const teamData = {
      teamName: values.teamName,
      teamSlug: generateSlug(values.teamName),
      authId: authId,
    };

    try {
      const response = await fetch("/api/team/create-team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teamData),
      });

      if (response.ok) {
        const responseData = await response.json();
        setActive?.({
          session: session?.id,
          organization: responseData.orgId,
        });

        mutate("/api/team/get-team");
        router.push(`/${responseData.slug}/dashboard`);
      } else {
        throw new Error("Failed to create team");
      }
    } catch (error) {
      console.error(error);
      form.setError("teamName", {
        type: "manual",
        message: "Failed to create team. Please try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team name</FormLabel>
              <FormControl>
                <Input placeholder="Enter team name" {...field} />
              </FormControl>
              <FormDescription>
                Team URL: https://perception.so/{generateSlug(field.value)}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Create team
        </Button>
      </form>
    </Form>
  );
};

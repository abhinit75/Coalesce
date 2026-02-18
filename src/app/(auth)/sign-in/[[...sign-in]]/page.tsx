import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      afterSignOutUrl="sign-in"
      signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
      path={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
    />
  );
}

import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "./ui/login-form";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 items-center bg-mainColor">
      <div className="mt-4 flex grow flex-col gap-4  justify-center">
        <LoginForm />
      </div>
      <Image
        src="/logo-footer.png"
        alt="login"
        width={206}
        height={72}
        className="hidden md:block"
      />
    </main>
  );
}

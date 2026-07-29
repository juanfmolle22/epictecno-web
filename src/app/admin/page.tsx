import { auth } from "@/auth";

export default async function AdminPage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0E14] px-6">
      <div className="text-center">
        <h1 className="font-display text-2xl font-semibold text-[#E4E7EC]">
          Bienvenido, {session?.user?.name}
        </h1>
        <p className="mt-2 text-sm text-[#E4E7EC]/60">
          {session?.user?.email}
        </p>
      </div>
    </main>
  );
}
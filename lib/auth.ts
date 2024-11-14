import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'solicitor';
};

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser(): Promise<User | null> {
  const session = await getSession();
  return session?.user as User || null;
}
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

/**
 * Hook that checks if the current user has the 'admin' role.
 * Redirects to home if not admin.
 */
export const useAdminGuard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      navigate.push("/auth");
      return;
    }

    if (user.role !== "admin" && user.role !== "editor") {
      navigate.push("/");
    } else {
      setIsAdmin(true);
    }
    setChecking(false);
  }, [user, authLoading, navigate]);

  return { isAdmin, checking: checking || authLoading };
};

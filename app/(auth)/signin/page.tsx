"use client";

import Button from "@/components/Button";
import { signInWithGoogle } from "@/lib/actions/auth.actions";
import React, { useTransition } from "react";

function SignIn() {
  const [_, startTransition] = useTransition();
  return (
    <div className="p-3 bg-blue-50 h-fit w-85 max-w-[calc(100%-32px)] border border-blue-100 rounded-xl mt-8">
      <h1 className="text-blue-600 text-xl font-semibold text-center mb-3">
        CreateSpace
      </h1>
      <Button
        className="w-full"
        theme="primary"
        onClick={() => startTransition(signInWithGoogle)}
      >
        Sign In With Google
      </Button>
    </div>
  );
}

export default SignIn;

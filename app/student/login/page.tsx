"use client";

import Button from "@/components/button/button";
import Container from "@/components/container/container";
import Input from "@/components/input/input";
import Navigate from "@/hooks/navigate";
import { useState } from "react";
import { loginStudent } from "@/utils/student";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setSuccess(null);

    try {
      await loginStudent({ email, password });
      setSuccess("Login realizado com sucesso!");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro ao fazer login.");
    }
  };

  return (
    <main>
      <Container width={"450px"} title={"Log In"}>
        <form onSubmit={handleSubmit} className="column">
          <Input 
            name="email" 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input 
            name="password" 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <div className="text-error">
              {error}
            </div>
          )}

          {success && (
            <div className="text-successfully">
              {success}
            </div>
          )}

          <div className="center row">
            <span>
              Do Not Have An Account?
            </span>

            <Button 
              type="button"
              onClick={Navigate("/student/register")}
              style="underlined"
            >
              Sign Up
            </Button>
          </div>

          <Button type="submit">
            Log In
          </Button>
        </form>
      </Container>
    </main>
  );
}

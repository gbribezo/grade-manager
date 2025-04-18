"use client";

import Button from "@/components/button/button";
import Container from "@/components/container/container";
import Input from "@/components/input/input";
import Navigate from "@/hooks/navigate";

export default function Login() {
  return (
    <main>
      <Container width={"450px"} title={"Log In"}>
        <form className="column">
          <Input 
            id="email" 
            type="email" 
            placeholder="Email"
          />

          <Input 
            id="password" 
            type="password" 
            placeholder="Password"
          />

          <div className="center row">
            <span>
              Do Not Have An Account?
            </span>

            <Button 
              onClick={Navigate("/student/register")}
              style="underlined"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Container>
    </main>
  );
}
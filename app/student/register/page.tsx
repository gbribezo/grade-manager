"use client";

import Button from "@/components/button/button";
import Container from "@/components/container/container";
import Input from "@/components/input/input";
import Navigate from "@/hooks/navigate";
import { registerStudent } from "@/utils/student";

export default function Register() {
  return (
    <main>
      <Container width={"450px"} title={"Register"}>
        <form action={registerStudent} className="column">
          <div className="row">
            <Input 
              name="firstName" 
              type="text" 
              placeholder="First Name"
            />

            <Input 
              name="lastName" 
              type="text" 
              placeholder="Last Name"
            />
          </div>

          <Input 
            name="email" 
            type="email" 
            placeholder="Email"
          />

          <Input 
            name="password" 
            type="password" 
            placeholder="Password"
          />

          <div className="center row">
            <span>
              Already Have An Account?
            </span>

            <Button 
              type="button"
              onClick={Navigate("/student/login")}
              style="underlined"
            >
              Log In
            </Button>
          </div>

          <Button type="submit">
            Register
          </Button>
        </form>
      </Container>
    </main>
  );
}
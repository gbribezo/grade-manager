"use client";

import Button from "@/components/button/button";
import Container from "@/components/container/container";
import Input from "@/components/input/input";
import Navigate from "@/hooks/navigate";

export default function Register() {
  return (
    <main>
      <Container width={"450px"} title={"Register"}>
        <form className="column">
          <div className="row">
            <Input 
              id="firstName" 
              type="text" 
              placeholder="First Name"
            />

            <Input 
              id="lastName" 
              type="text" 
              placeholder="Last Name"
            />
          </div>

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
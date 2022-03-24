import React,{useState} from "react";
import Link from "next/Link";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { useRouter } from "next/router";
import "semantic-ui-css/semantic.min.css";

function LoginForm() {

  const [loginform, setloginform] = useState({
    user_email:'',
    password:''
  })
  const router = useRouter();

  const login = async () => {
    if(loginform.user_email !== '' && loginform.password !== ''){
      router.push("/Listview");
    }
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              required={true}
              value= {loginform.user_email}
              onChange={(e)=>setloginform({...loginform,user_email:e.target.value})}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              required={true}
              value= {loginform.password}
              onChange={(e)=>setloginform({...loginform,password:e.target.value})}
            />

            <Button color="teal" fluid size="large" onClick={login}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?{" "}
          <Link href="/Signup">
            <a href="#">Sign Up</a>
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default LoginForm;

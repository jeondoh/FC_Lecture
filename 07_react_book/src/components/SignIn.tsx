import { Button, Col, Input, Row } from "antd";
import styles from "./SignIn.module.css";
import { useRef } from "react";

export default function SignIn() {
  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);

  return (
    <Row align="middle" className={styles.signIn_row}>
      <Col span={24}>
        <Row className={styles.signIn_contents}>
          <Col span={12}>
            <img
              src="/bg_signIn.png"
              alt="signIn"
              className={styles.signIn_bg}
            />
          </Col>
          <Col span={12}>
            <div className={styles.signIn_title}>My Books</div>
            <div className={styles.signIn_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signIn_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input
                className={styles.input}
                placeholder="Email"
                autoComplete="email"
                name="email"
                ref={emailRef}
              />
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input
                className={styles.input}
                type="password"
                placeholder="current-password"
                name="password"
                ref={passwordRef}
              />
            </div>
            <div className={styles.button_area}>
              <Button className={styles.button} size="large" onClick={click}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  function click() {
    const email = emailRef.current!.state.value;
    const password = passwordRef.current!.state.value;
  }
}

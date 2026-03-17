import { useState } from "react";

function FormInput() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValid = true;

    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setSuccessMessage("");

    if (username.trim() === "") {
      setUsernameError("יש להזין שם משתמש");
      isValid = false;
    }

    if (!email.includes("@")) {
      setEmailError("האימייל חייב להכיל @");
      isValid = false;
    }

    if (password.length < 8) {
      setPasswordError("הסיסמה חייבת להכיל לפחות 8 תווים");
      isValid = false;
    }

    if (isValid) {
      setSuccessMessage("ההרשמה בוצעה בהצלחה");
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>טופס הרשמה</h2>

        <label>שם משתמש</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        {usernameError && <p style={styles.error}>{usernameError}</p>}

        <label>אימייל</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        {emailError && <p style={styles.error}>{emailError}</p>}

        <label>סיסמה</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {passwordError && <p style={styles.error}>{passwordError}</p>}

        <button type="submit" style={styles.button}>
          הרשמה
        </button>

        {successMessage && <p style={styles.success}>{successMessage}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  form: {
    width: "320px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #aaa",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    margin: 0,
  },
  success: {
    color: "green",
    fontSize: "16px",
    marginTop: "10px",
  },
};

export default FormInput;
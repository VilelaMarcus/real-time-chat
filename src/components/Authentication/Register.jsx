import { RegisterContent } from "./Register.styles";
import TextField from '@mui/material/TextField';

const Register = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      props.onAuth({ username: value, secret: value });
    };
  
    return (
      <RegisterContent>
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Bem Vindo 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
        </RegisterContent>
    );
  };
  

  export default Register;
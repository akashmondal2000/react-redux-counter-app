import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store/authSclice.js'

const Auth = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler =(fd)=>{
    const formData = Object.fromEntries(fd);
    console.log(formData);
    dispatch(authAction.login());
  }


  return (
    <main className={classes.auth}>
      <section>
        <form action={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input name='email' type='email' id='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input name='password' type='password' id='password' required />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
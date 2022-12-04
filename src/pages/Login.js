import React from "react";

const Login = () => {
  return (
    <>
      <header class="header">
        <nav class="nav nav--tours">
          <a class="nav__el" href="/">
            All tours
          </a>
        </nav>
        <div class="header__logo">
          <img src="/img/logo-white.png" alt="Natours logo" />
        </div>
        <nav class="nav nav--user">
          <a class="nav__el" href="/login">
            Log in
          </a>
          <a class="nav__el nav__el--cta" href="#">
            Sign up
          </a>
        </nav>
      </header>
      <main class="main">
        <div class="login-form">
          <h2 class="heading-secondary ma-bt-lg">Log into your account</h2>
          <form class="form form--login">
            <div class="form__group">
              <label class="form__label" for="email">
                Email address
              </label>
              <input
                class="form__input"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div class="form__group ma-bt-md">
              <label class="form__label" for="password">
                Password
              </label>
              <input
                class="form__input"
                id="password"
                type="password"
                placeholder="••••••••"
                required
                minlength="8"
              />
            </div>
            <div class="form__group">
              <button class="btn btn--green">Login</button>
            </div>
          </form>
        </div>
      </main>
      <footer class="footer">
        <div class="footer__logo">
          <img src="/img/logo-green.png" alt="Natour logo" />
        </div>
        <ul class="footer__nav">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Download apps</a>
          </li>
          <li>
            <a href="#">Become a guide</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <p class="footer__copyright">
          &copy; by Jonas Schmedtmann. Feel free to use this project for your
          own purposes, EXCEPT producing your own course or tutorials!
        </p>
      </footer>
    </>
  );
};

export default Login;

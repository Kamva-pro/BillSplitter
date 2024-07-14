import React from "react";
import LoginButton from "./LoginButton";
import SocialLoginButton from "./SocialLoginButton";

function LoginPage() {
  const socialLogins = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a5b95ea241f3d3ab46c35c88616ba2d5b5cfb9f656d474bf2fca6e66e431505?apiKey=aa160fdff3a4485ea0c17c38ff605ad6&", alt: "Facebook login" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/863abbc673a069cb4172761abef776bbf4d164099e3e635dc82c2eebd8bd24c2?apiKey=aa160fdff3a4485ea0c17c38ff605ad6&", alt: "Google login" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e25da423c97e09ead65a6a53acbd3a59a29250dfd008d28f4c29c579f5307207?apiKey=aa160fdff3a4485ea0c17c38ff605ad6&", alt: "Apple login" }
  ];

  return (
    <main className="flex flex-col pb-7 bg-white max-w-[360px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/74f00a3d4ae4f096973046a950ae950886d9d48e125ba30f3c06b719b6bfb97c?apiKey=aa160fdff3a4485ea0c17c38ff605ad6&" alt="" className="w-full aspect-[0.85]" />
      <section className="flex z-10 flex-col self-center px-12 py-16 mt-0 w-full bg-white rounded-xl shadow-sm max-w-[323px]">
        <LoginButton text="Login" primary />
        <LoginButton text="Create Account" secondary />
        <p className="self-center mt-9 text-xs font-light text-black">Or continue with</p>
        <div className="flex gap-5 justify-between items-start mt-9">
          {socialLogins.map((login, index) => (
            <SocialLoginButton key={index} src={login.src} alt={login.alt} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
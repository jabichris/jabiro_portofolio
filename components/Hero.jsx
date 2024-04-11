import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/headshot.jpeg' className="headshot-img" width={300} height={300} alt="JABIRO's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm JABIRO 👋</h1>
        <p>
          I'm a software developer based in KIGALI, RWANDA. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/JabiroChristian"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/jabichris"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jabiro-christian-b01054115/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;
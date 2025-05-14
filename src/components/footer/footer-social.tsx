const socialData = [
  {
    id: 1,
    cls: "social-fb",
    href: "https://www.facebook.com",
    iconClass: "fa-brands fa-facebook-f",
    alt: "Facebook",
  },
  {
    id: 2,
    cls: "social-twit",
    href: "https://www.twitter.com",
    iconClass: "fa-brands fa-twitter",
    alt: "Twitter",
  },
  {
    id: 3,
    cls: "social-lnkd",
    href: "https://www.linkedin.com",
    iconClass: "fa-brands fa-linkedin-in",
    alt: "LinkedIn",
  },
  {
    id: 4,
    cls: "social-yout",
    href: "https://www.youtube.com",
    iconClass: "fa-brands fa-youtube",
    alt: "YouTube",
  },
];

export default function FooterSocial() {
  return (
    <>
      {socialData.map((item) => (
        <a key={item.id} className={item.cls} href={item.href} target="_blank">
          <i className={item.iconClass}></i>
        </a>
      ))}
    </>
  );
}

import { socialIcon } from "../data/social"

const Social = () => {
  // Filtra apenas os ícones sociais
  const socialIcons = socialIcon.filter(social =>
    ["Linkedin", "Github", "Email"].includes(social.name)
  )

  return (
    <div className={`flex flex-row lg:flex-row gap-12 mt-10 justify-start lg:justify-start items-start lg:items-start`}>
      {socialIcons.map(({ name, icon: Icon, url }) => (
        <a
          key={name}
          href={url}
          target={name !== "Email" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          aria-label={name}
          className="
            flex items-center justify-center 
            w-12 h-12 
            dark:text-gray-300
            hover:text-[rgb(10,255,169)]
            hover:border-2 rounded-full
            border-[rgb(10,255,169)]
            transition-all duration-300 
            hover:scale-110 hover:shadow-lg
            cursor-pointer
          "
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export { Social }
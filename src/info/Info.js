import self from "../assets/self.webp"
import cv from "../assets/CV_Fal_2024.pdf";


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(97,181,255)", "rgb(255,255,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Sofia",
  lastName: "Fal",
  initials: "sf", // the example uses first and last, but feel free to use three or more if you like.
  position: "Développeur web front-end",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🌎",
      text: "Basée en France",
    },
    {
      emoji: "📧",
      text: "sofia-fal@hotmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/sofia-fal",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: cv,
      icon: "fa fa-file",
      label: "cv",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Depuis l'âge de 13 ans, je développe des sites web personnels en utilisant les langages front-end à ma disposition. J'ai décidé d'approfondir mes connaissances pour concrétiser mon projet professionnel.",
  skills: {
    proficientWith: [
      "HTML",
      "(S)CSS",
      "JavaScript",
      "React",
      "Git",
      "Redux",
      "Swagger",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "Je suis passionnée par l'informatique.",
      emoji: "🖥️",
    },
    {
      label:
        "Étant très autodidacte, je n'ai jamais peur d'explorer et d'aller plus loin.",
      emoji: "🧠",
    },
    {
      label:
        "J'adore m'exprimer à travers le développement web, mais aussi à travers l'art et l'écriture.",
      emoji: "🖊️",
    },
    {
      label:
        "Répondre aux besoins des autres et communiquer pour garantir un résultat satisfaisant est une démarche que j'apprécie énormément.",
      emoji: "🫂",
    },
    {
      label:
        "I'm fluent in English! I'm completely self-taught, and I have been learning German and Japanese since the age of 11.",
      emoji: "🇬🇧",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
};
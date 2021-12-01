export default {
  site: {
    name: "Oles Tk.",
    theme: {
      dark: "dark",
      light: "light",
    }
  },
  pages: {
    home: 'Home page',
    experience: 'Experience page',
  },
  page: {
    header: {
      logotype: {
        // link: '/assets/images/36593829.jpg',
        title: "VectorStock.com/36593829",
        className: "h-24 w-24 rounded overflow-hidden bg-white"
      }
    },
    footer: {
      copyright: "Copyrights 2021 lesyk",
      thirdParty: {
        text: 'Made with help:',
        links: [
          'https://tailwindcss.com/',
          'https://heroicons.com/'
        ]
      }
    },
    socials: [
      {
        link: "https://www.linkedin.com/in/oles-tkachuk-77a54284/",
        title: "LinkedIn"
      },
      {
        link: "https://github.com/telesyk",
        title: "GitHub"
      },
      {
        link: "mailto:tkachuk.oles@gmail.com",
        title: "Email"
      }
    ]
  },
  cards: [
    {
      title: "training-js-cardio",
      description: "JS trainnig samples",
      linkSite: "https://vibrant-poincare-3ab32c.netlify.app/",
      linkSource: "https://github.com/telesyk/training-js-cardio",
      image: "/assets/images/screen_3.jpg",
      imageShow: false,
      icon: "javascript",
    },
    {
      title: "react-todo-tracker-tutorial",
      description: "Tutorial React app",
      linkSite: "https://csb-kcop4.netlify.app/",
      linkSource: "https://github.com/telesyk/react-todo-tracker-tutorial",
      image: "/assets/images/screen_1.jpg",
      imageShow: false,
      icon: "react-js",
    },
    {
      title: "vue-todo-app",
      description: "Tutorial ToDo Vue app",
      linkSite: "https://priceless-noyce-203235.netlify.app/",
      linkSource: "https://github.com/telesyk/vue-todo-app",
      image: "/assets/images/screen_2.jpg",
      imageShow: false,
      icon: "vue-js",
    }
  ]
};

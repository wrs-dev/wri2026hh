const StoryblokClient = require("storyblok-js-client");
const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

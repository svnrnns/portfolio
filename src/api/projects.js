// Iconics
import ZeusIcon from "/src/components/iconics/ZeusIcon.vue";

// Articles
import baleariaArticle from "./articles/balearia-article";
import ucersaArticle from "./articles/ucersa-article";

// Export
export default [
  {
    name: "Baleria Control Tower",
    article: baleariaArticle,
    icon: ZeusIcon,
  },
  {
    name: "Ucersa Dashboard",
    icon: ZeusIcon,
    article: ucersaArticle,
  },
];

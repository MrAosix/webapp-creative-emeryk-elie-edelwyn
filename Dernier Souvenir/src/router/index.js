import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ChapterView from "@/views/ChapterView.vue";
import EndingView from "@/views/EndingView.vue";
import SavesView from "@/views/SavesView.vue";
import CreditsView from "@/views/CreditsView.vue";
import OptionsView from "@/views/OptionsView.vue";

const routes = [
  { path: "/", name: "HomeView", component: HomeView },
  { path: "/chapitre/:id", name: "ChapterView", component: ChapterView },
  { path: "/fin/:endingId", name: "EndingView", component: EndingView },
  { path: "/sauvegardes", name: "SavesView", component: SavesView },
  { path: "/credits", name: "CreditsView", component: CreditsView },
  { path: "/options", name: "OptionsView", component: OptionsView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

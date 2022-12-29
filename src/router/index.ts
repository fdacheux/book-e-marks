import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "../views/About/AboutView.vue";
import NotFoundView from "../views/NotFound/NotFoundView.vue";
import UserProfile from "../views/User/UserProfileView.vue";
import UserProfileItem from "../components/UserProfile/UserProfileItem.vue";
import EditProfileItem from "../components/EditProfile/EditProfileItem.vue";
import BookmarksView from "../views/Bookmarks/BookmarksView.vue";
import BookmarksList from "../components/BookmarksList/BookmarksListItem.vue";
import BookmarkCreation from "../components/BookmarkCreation/BookmarkCreationItem.vue";
import { isAuthenticated } from "@/stores/authenticationState";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/users/:id",
      name: "user",
      component: UserProfile,
      beforeEnter: (to, from, next) => {
        if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
        else next();
      },

      children: [
        {
          path: "",
          name: "user-rpofile",
          component: UserProfileItem,
        },
        {
          path: "edit",
          name: "edit-user",
          component: EditProfileItem,
        },
      ],
    },
    {
      path: "/bookmarks",
      name: "bookmarks",
      component: BookmarksView,
      beforeEnter: (to, from, next) => {
        if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
        else next();
      },
      children: [
        {
          path: "",
          name: "allbookmarks",
          component: BookmarksList,
        },
        {
          path: "new-bookmark",
          component: BookmarkCreation,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;

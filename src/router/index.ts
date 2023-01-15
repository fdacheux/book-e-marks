import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "../views/About/AboutView.vue";
import NotFoundView from "../views/NotFound/NotFoundView.vue";

import AuthView from "../views/Auth/AuthView.vue";
import SignupForm from "@/components/AuthItem/SignupForm/SignupFormItem.vue";
import SigninForm from "@/components/AuthItem/SigninForm/SigninFormItem.vue";

import UserProfileView from "../views/User/UserProfileView.vue";
import UserProfile from "../components/UserItems/UserProfile/UserProfileItem.vue";
import EditProfile from "../components/UserItems/EditProfile/EditProfileItem.vue";

import BookmarksView from "../views/Bookmarks/BookmarksView.vue";
import BookmarksList from "../components/BookmarksItems/BookmarksList/BookmarksListItem.vue";
import BookmarkCreation from "../components/BookmarksItems/BookmarkCreation/BookmarkCreationItem.vue";

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
      path: "/auth",
      name: "Auth",
      component: AuthView,
      children: [
        {
          path: "",
          name: "Login",
          component: SigninForm,
        },
        {
          path: "/auth/signup",
          name: "Signup",
          component: SignupForm,
        },
      ],
    },
    {
      path: "/users/:id",
      name: "user",
      component: UserProfileView,
      beforeEnter: (to, from, next) => {
        if (to.name !== "Auth" && !isAuthenticated) next({ name: "Auth" });
        else next();
      },

      children: [
        {
          path: "",
          name: "user-profile",
          component: UserProfile,
        },
        {
          path: "edit",
          name: "edit-user",
          component: EditProfile,
        },
      ],
    },
    {
      path: "/bookmarks",
      name: "bookmarks",
      component: BookmarksView,
      beforeEnter: (to, from, next) => {
        if (to.name !== "Auth" && !isAuthenticated) next({ name: "Auth" });
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

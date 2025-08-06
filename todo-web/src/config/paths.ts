export const paths = {
  home: {
    getHref: () => "/",
  },

  auth: {
    register: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
    login: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
  },

  todos: {
    root: {
      getHref: () => "/todos",
    },
    todo: {
      getHref: (id: string) => `/todos/${id}`,
    },
  },
  profile: {
    root: {
      getHref: () => "/profile",
    },
  },
} as const;

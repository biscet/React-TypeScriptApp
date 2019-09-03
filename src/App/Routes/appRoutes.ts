import Main from "../Pages/Main/main"

interface AppRoute {
  path: string
  component: any
  exact: boolean
}

export const AppRoutes: AppRoute[] = [
  {
    path: "/",
    component: Main,
    exact: true
  }
]

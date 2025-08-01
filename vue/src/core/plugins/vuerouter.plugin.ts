import { ROUTE_NAMES } from '@/core/router/route-names.enum'
import { App } from 'vue'
import {
  RouteLocationNormalized,
  RouteRecordRaw,
  Router,
  RouterOptions,
  createRouter,
  createWebHistory
} from 'vue-router'

import 'vue-router'

export interface Breadcrumb {
  name: string
  to?: ROUTE_NAMES | null // optional, null for the active item
}

declare module 'vue-router' {
  interface RouteMeta {
    breadcrumbs?: Breadcrumb[]
  }
}

class VueRouterService {
  private static $router: Router = createRouter({
    history: createWebHistory(),
    routes: [] as Array<RouteRecordRaw>
  } as RouterOptions)

  public static init(app: App<Element>, routes: RouteRecordRaw[]): void {
    for (const route of routes) this.$router.addRoute(route as RouteRecordRaw)

    this.$router.beforeResolve((to: RouteLocationNormalized) => {
      document.title = `${to.meta.pageTitle} - ${process.env.TITLE}`

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      } as ScrollToOptions)
    })

    app.use(this.$router as Router)
  }
}

export { VueRouterService }

import { ROUTE_NAMES } from '@/core/router/route-names.enum'

type sub_navigation = Array<{ name: ROUTE_NAMES; label: string }>
type side_navigation = Array<{
  name: ROUTE_NAMES
  label: string
  icon: string[]
}>

export type { sub_navigation, side_navigation }

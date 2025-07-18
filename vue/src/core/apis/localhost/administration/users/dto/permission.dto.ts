import { PermissionDomain } from '@/../../library/constants/permissions.constants'
import { BaseDto } from '../../../dto/base.dto'

interface iPermission {
  readonly id: string
  readonly createdAt: Date
  readonly updatedAt: Date

  readonly name: string
  readonly label: string
  readonly description?: string
  readonly domain: PermissionDomain
  readonly isSystemPermission: boolean
}

interface iCreatePermission {
  readonly name: string
  readonly label: string
  readonly description?: string
  readonly domain: PermissionDomain
  readonly isSystemPermission: boolean
}

class CreatePermissionDto {
  readonly name: string
  readonly label: string
  readonly description?: string
  readonly domain: PermissionDomain
  readonly isSystemPermission: boolean

  constructor(payload: iCreatePermission) {
    this.name = payload.name
    this.label = payload.label
    this.description = payload.description
    this.domain = payload.domain
    this.isSystemPermission = payload.isSystemPermission
  }
}

class PermissionDto extends BaseDto {
  readonly name: string
  readonly label: string
  readonly description?: string
  readonly domain: PermissionDomain
  readonly isSystemPermission: boolean

  constructor(payload: iPermission) {
    super(payload)

    this.name = payload.name
    this.label = payload.label
    this.description = payload.description
    this.isSystemPermission = payload.isSystemPermission
    this.domain = payload.domain
  }
}

export type { iPermission, iCreatePermission }
export { PermissionDto, PermissionDomain, CreatePermissionDto }

import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './controllers/health.controller';
import { BullHealthIndicator } from 'src/app/features/health/indicators/bull-health.indicator';
import { RedisHealthIndicator } from 'src/app/features/health/indicators/redis-health.indicator';
import { DiskHealthIndicator } from 'src/app/features/health/indicators/disk-health.indicator';
import { TypeOrmHealthIndicator } from 'src/app/features/health/indicators/typeorm-health.indicator';
import { HealthCheckService } from './services/health.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TerminusModule, ScheduleModule.forRoot()],
  controllers: [HealthController],
  providers: [
    BullHealthIndicator,
    RedisHealthIndicator,
    DiskHealthIndicator,
    TypeOrmHealthIndicator,
    HealthCheckService,
  ],
})
export class HealthModule {}

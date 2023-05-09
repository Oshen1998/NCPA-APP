import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from '@ncpa-app/core';

@Module({
  imports: [AuthModule, DashboardModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

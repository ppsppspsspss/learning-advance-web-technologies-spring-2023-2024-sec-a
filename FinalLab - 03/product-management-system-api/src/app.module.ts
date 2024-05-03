import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import config from 'ormconfig';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(config), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

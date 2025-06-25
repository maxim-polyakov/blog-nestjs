import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes it available everywhere
    }),
    SequelizeModule.forRoot({
        dialect: 'mysql', // Or your database dialect
        uri: process.env.DATABASE_URL, // Replace with your actual URL
        models: [], // Your Sequelize models
        autoLoadModels: true,
        synchronize: true, // Or false, based on your needs
    }),
    UserModule,
    PostModule,
    AuthModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
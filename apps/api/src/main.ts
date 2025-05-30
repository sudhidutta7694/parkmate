import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: 'https://studio.apollographql.com',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
  })
  await app.listen(3000)
}
void bootstrap()

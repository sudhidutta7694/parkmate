import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Enable CORS for Apollo Studio
  app.enableCors({
    origin: 'https://studio.apollographql.com',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
  })

  // Swagger API setup
  const config = new DocumentBuilder()
    .setTitle('Parkmate | Parking Simplified')
    .setDescription(
      [
        '### The Parkmate API',
        '',
        '**Looking for the GraphQL API?**',
        '',
        '- Visit [`/graphql`](./graphql)',
        '- Try it in [Apollo Studio](https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:3000/graphql&document=query%20users%20%7B%20users%20%7B%20uid%20%7D%20%7D)',
      ].join('\n'),
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/docs', app, document)

  try {
    await app.listen(3000)
    console.log(`🚀 Server running on http://localhost:3000`)
    console.log(`📘 Swagger docs  available at http://localhost:3000/docs`)
    console.log(`🎯 GraphQL playground at http://localhost:3000/graphql`)
  } catch (error) {
    console.error('Failed to start the server', error)
  }
}

bootstrap()
  .then(() => {
    console.log('✅ Bootstrap success')
  })
  .catch((err) => {
    console.error('❌ Bootstrap failed:', err)
    process.exit(1)
  })

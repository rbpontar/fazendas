import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Brain Agro")
    .setDescription("Agro")
    .setVersion("1.0")
    .addTag("Produtor")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  const lit = await app.listen(3000);
  console.log('Application is running port 3000');
}
bootstrap();

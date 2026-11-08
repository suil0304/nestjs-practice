import { Module } from "@nestjs/common";
import { EmailService } from "./email.service.js";
import { ConfigModule } from "@nestjs/config";
import emailConfig from "../configs/email.config.js";

@Module({
    imports: [
        ConfigModule.forFeature(emailConfig)
    ],
    providers: [EmailService],
    exports: [EmailService]
})
export class EmailModule {}
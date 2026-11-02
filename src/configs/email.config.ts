import { registerAs } from "@nestjs/config";

export default registerAs("email", () => {
    return {
        "name": process.env["GMAIL_NAME"]!,
        "password": process.env["GMAIL_PASSWORD"]
    };
});
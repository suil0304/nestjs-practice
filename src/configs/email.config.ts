import { registerAs } from "@nestjs/config";

export default registerAs("email", () => {
    return {
        "service": process.env["EMAIL_SERVICE"]!,
        "auth": {
            "name": process.env["EMAIL_NAME"]!,
            "password": process.env["EMAIL_PASSWORD"]!
        }
    };
});
import { registerAs } from "@nestjs/config";

export default registerAs("common", () => {
    return {
        "app-env": process.env["APP_ENV"]!
    };
});
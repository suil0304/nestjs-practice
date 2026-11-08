import { z } from "zod";

export default z.object({
    APP_ENV: z.enum([
        "local",
        "development",
        "stage",
        "production"
    ])
});
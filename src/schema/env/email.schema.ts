import z from "zod";

export default z.object({
    EMAIL_SERVICE: z.string()
        .nonempty(),
    EMAIL_NAME: z.string()
        .nonempty(),
    EMAIL_PASSWORD: z.string()
        .nonempty()
});
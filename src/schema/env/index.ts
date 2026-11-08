import z from "zod";
import commonSchema from "./common.schema.js";
import emailSchema from "./email.schema.js";

export default z.object({
    ...commonSchema.shape,
    ...emailSchema.shape
});
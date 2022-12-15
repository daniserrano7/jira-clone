export const SESSION_SECRET = process.env.SESSION_SECRET || "default-secret";

if (!SESSION_SECRET) {
  throw new Error("SESSION_SECRET must be set");
}

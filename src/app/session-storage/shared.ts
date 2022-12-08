export const SESSION_SECRET = "my-secret";

if (!SESSION_SECRET) {
  throw new Error("SESSION_SECRET must be set");
}

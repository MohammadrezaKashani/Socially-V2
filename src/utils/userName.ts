export const userName = (email?: string) => {
    if(!email) return ""
  return email.split("@")[0];
}
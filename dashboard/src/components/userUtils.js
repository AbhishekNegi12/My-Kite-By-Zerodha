// utils to get user info from token
export function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    // JWT format: header.payload.signature
    const payload = token.split(".")[1];
    if (!payload) return null;
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch (e) {
    return null;
  }
}

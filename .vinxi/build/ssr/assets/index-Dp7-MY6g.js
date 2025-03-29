import s from "axios";
const t = s.create({
  baseURL: void 0,
  headers: { "Content-Type": "application/json" },
});
t.interceptors.request.use((e) => {
  const r = localStorage.getItem("token");
  return r && (e.headers.Authorization = `Bearer ${r}`), e;
});
t.interceptors.response.use(
  (e) => e.data,
  (e) => Promise.reject(e),
);
const n = async (e) => t.post("/auth/register", e),
  a = async (e) => t.post("/auth/login", e);
export { a, n as p };

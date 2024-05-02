import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

/**
 * 인증 받지 않은 사용자가 접근 시 login 페이지로 이동
 * @param children
 * @returns children or <Navigate to="/login" />
 */

export default function ProtetedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  console.log(user);
  if (user === null) return <Navigate to="/login" />;
  return children;
}

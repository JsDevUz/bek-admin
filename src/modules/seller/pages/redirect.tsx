import { useEffect } from "react";
export default function Redirect() {
  const canAccess = true;
  useEffect(() => {
    if (canAccess) {
      setTimeout(() => {
        window.location.replace("/dashboard");
      }, 400);
    } else {
      window.location.replace(`/login`);
    }

    return;
  }, []);

  return <div>Loading...</div>;
}

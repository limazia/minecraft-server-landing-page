import { useEffect, useState } from "react";

import { Server } from "@components/Server";
import { ServerShimmer } from "@components/ServerShimmer";

import "./styles/styles.css";

export function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <main className="h-100">
      {loading ? (
        <ServerShimmer />
      ) : (
        <Server ip="mc.sparklypower.net" loading={loading} />
      )}
    </main>
  );
}

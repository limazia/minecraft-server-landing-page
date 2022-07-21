import { useEffect, useState } from "react";

import { Server } from "./Server";
import { ServerShimmer } from "./ServerShimmer";

export function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return <>{loading ? <ServerShimmer /> : <Server loading={loading} />}</>;
}

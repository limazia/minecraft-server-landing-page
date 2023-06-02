import Skeleton from "@components/Skeleton";

import styles from "./styles.module.css";

export function ImageShimmer() {
  return (
    <div className={styles.loadingContainer}>
      <Skeleton className={styles.imageShimmer} />
    </div>
  );
}

export function OnlineShimmer() {
  return (
    <div className={styles.loadingContainer}>
      <Skeleton className={styles.onlineTextShimmer} />
      <Skeleton className={styles.onlineShimmer} />
    </div>
  );
}

export function MaxShimmer() {
  return (
    <div className={styles.loadingContainer}>
      <Skeleton className={styles.maxTextShimmer} />
      <Skeleton className={styles.maxShimmer} />
    </div>
  );
}

export function ListShimmer() {
  return (
    <div className={styles.loadingContainer}>
      <Skeleton className={`${styles.listTextShimmer} mt-4`} />
      <Skeleton className={styles.listShimmer} />
    </div>
  );
}

export function LatencyShimmer() {
  return (
    <div className={styles.loadingContainer}>
      <Skeleton className={styles.latencyShimmer} />
    </div>
  );
}

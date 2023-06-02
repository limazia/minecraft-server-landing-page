import {
  ImageShimmer,
  OnlineShimmer,
  MaxShimmer,
  ListShimmer,
  LatencyShimmer,
} from "./Shimmer/Server";

export function ServerShimmer() {
  return (
    <div className="container mt-5 pb-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          <div className="card card-server">
            <div className="card-body">
              <div className="card-favicon">
                <ImageShimmer />
              </div>
              <div className="card-stats">
                <div className="row mt-3 justify-content-center align-items-center">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <OnlineShimmer />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <MaxShimmer />
                  </div>
                </div>
              </div>
              <ListShimmer />
            </div>
            <div className="card-footer p-0">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Latência do Servidor
                  <LatencyShimmer />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

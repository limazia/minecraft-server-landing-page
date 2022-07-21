import { useEffect, useState } from "react";

import api from "~/services/api";

export function Server({ loading }) {
  const [server, setServer] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    getServer();
  }, [loading]);

  async function getServer() {
    const ip = process.env.REACT_APP_SERVER_IP;
    const port = process.env.REACT_APP_SERVER_PORT;

    const { data } = await api.get(`/ping/${ip}/${port}`);
    const { error } = data;

    if (data) {
      setServer(data);
    }

    if (error) {
      setError(error);
    }
  }

  function render(players = []) {
    const rows = [...Array(Math.ceil(players.length / 4))];
    const playerRows = rows.map((row, idx) =>
      players.slice(idx * 6, idx * 6 + 6)
    );
    const content = playerRows.map((row, idx) => (
      <div key={idx} className="row mt-2">
        {row.map(({ id, name }, index) => (
          <div key={id} className="col-2">
            <img
              src={`https://mc-heads.net/avatar/${name}`}
              className="d-inline"
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
              }}
              data-toggle="tooltip"
              data-placement="top"
              title={name}
            />
          </div>
        ))}
      </div>
    ));

    return content;
  }

  return (
    <div className="container mt-5 pb-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          {error?.length > 0 ? (
            <div className="alert alert-danger text-center">
              <h4>Servidor não encontrado</h4>
            </div>
          ) : (
            <div className="card card-server">
              <div className="card-body">
                <div className="card-favicon">
                  <div className="background">
                    <div className="card-info">
                      <div className="server p-3">
                        <span className="server-name">
                          <p className="mb-0">Lima Codes</p>
                          <small>{server?.description}</small>
                        </span>
                        <span className="server-version">
                            {server?.version?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <img src={server?.favicon} alt="" className="img-fluid" />
                </div>
                <div className="card-stats">
                  <div className="row mt-3 justify-content-center align-items-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <p className="mb-0 text-muted">Online</p>
                      <b>{server?.players?.online}</b>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <p className="mb-0 text-muted">Máximo</p>
                      <b>{server?.players?.max}</b>
                    </div>
                  </div>
                </div>
                <h5 className="card-title mt-4">
                  Lista de jogadores ({server?.players?.online || 0})
                </h5>
                <div className="card">
                  <div className="card-body">
                    {render(server?.players?.sample)}
                  </div>
                </div>
              </div>
              <div className="card-footer p-0">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Latência do Servidor
                    <span className="badge badge-primary badge-pill">
                      {server?.latency}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Região Azure
                    <span className="badge badge-primary badge-pill">
                      {server?.latency}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

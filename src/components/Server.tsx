import { useEffect, useState } from "react";

import { api } from "@services/api";

interface Player {
  id: number;
  name: string;
}

interface ServerData {
  description: string;
  version: {
    name: string;
  };
  favicon: string;
  players: {
    online: number;
    max: number;
    sample: Player[];
  };
  latency: number;
}

interface ServerProps {
  ip?: string;
  port?: string;
  loading: boolean;
}

const renderPlayers = (players: Player[]) => {
  const rows = [];
  const itemsPerRow = 6;

  for (let i = 0; i < players.length; i += itemsPerRow) {
    const rowItems = players.slice(i, i + itemsPerRow);

    const row = (
      <div className={`row ${i > 0 ? "mt-4" : "mt-0"}`} key={`row-${i}`}>
        {rowItems.map(({ name }, index) => (
          <div className="col-sm-2 col-md-2 col-lg-2" key={`col-${i + index}`}>
            <img
              src={`https://mc-heads.net/avatar/${name}`}
              className="d-inline"
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
              }}
              title={name}
              alt={name}
            />
          </div>
        ))}
      </div>
    );

    rows.push(row);
  }

  return rows;
};

export function Server({
  ip = "jogar.pixelmonbrasil.com.br",
  port = "25565",
  loading = false,
}: ServerProps) {
  const [server, setServer] = useState<ServerData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getServer();
  }, [loading]);

  async function getServer() {
    try {
      const { data } = await api.get<ServerData>(`/ping/${ip}/${port}`);
      setServer(data);
      setError("");
    } catch (error) {
      setServer(null);
      setError("Servidor não encontrado");
    }
  }

  return (
    <div className="container mt-5 pb-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          {error ? (
            <div className="alert alert-danger text-center">
              <h4>{error}</h4>
            </div>
          ) : (
            <div className="card card-server">
              {server && (
                <div className="card-body">
                  <div className="card-favicon">
                    <div className="background">
                      <div className="card-info">
                        <div className="server p-3">
                          <span className="server-name">
                            <h6 className="mb-0">{server.version.name}</h6>
                            <small>{server.description}</small>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img src={server.favicon} alt="" className="img-fluid" />
                  </div>
                  <div className="card-stats">
                    <div className="row mt-3 justify-content-center align-items-center">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <p className="mb-0 text-muted">Online</p>
                        <b>{server.players.online}</b>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <p className="mb-0 text-muted">Máximo</p>
                        <b>{server.players.max}</b>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title mt-4">
                    Lista de jogadores ({server.players.online || 0})
                  </h5>
                  <div className="card">
                    <div className="card-body">
                      {renderPlayers(server.players.sample)}
                    </div>
                  </div>
                </div>
              )}
              {server && (
                <div className="card-footer p-0">
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Latência do Servidor
                      <span className="badge badge-primary badge-pill">
                        {server.latency}
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

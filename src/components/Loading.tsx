export function Loading() {
  return (
    <div className="container-fluid container-loading">
      <div className="row h-100 justify-content-center align-items-center loading">
        <h1>{process.env.REACT_APP_NAME || "Carregando..."}</h1>;
      </div>
    </div>
  );
}
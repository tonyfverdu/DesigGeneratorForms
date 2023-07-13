function TitlesOfLayout({ titleSelect }) {
  return (
    <div className="contSelectState d-flex justify-content-center align-items-center mx-auto mb-1" style={{ height: "1.2rem" }}>
      <header className="d-flex justify-content-center align-items-center p-0 m-0">
        <h6 className="m-0 p-1 fw-bolder text-center text-dark" style={{ fontSize: "0.8rem", backgroundColor: "transparent" }}>
          {titleSelect}
        </h6>
      </header>
    </div>
  )
}

export default TitlesOfLayout;
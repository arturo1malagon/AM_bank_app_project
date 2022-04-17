function AllData(){
  const ctx = React.useContext(UserContext);
  return (
      <div className="card">
        <div className="card-header">
          Created users and balance
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{JSON.stringify(ctx.users)}</li>
        </ul>
      </div>
  )
} 

  
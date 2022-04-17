function AllData(){
  const ctx = React.useContext(UserContext);
  return (
      <div className="card">
        <div className="card-header">
          All transacctions during this session
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{JSON.stringify(ctx.users)}</li>
        </ul>
      </div>
  )
} 


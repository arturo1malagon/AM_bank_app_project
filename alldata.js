function AllData(){
  const ctx = React.useContext(UserContext);
  return (
      <div className="card2">
        <div className="card-header">
          Created users and balance data
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{JSON.stringify(ctx.users.filter(i => i.action === 'Creating User'))}</li>
        </ul>
        <div className="card-header">
          Users Login data
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{JSON.stringify(ctx.users.filter(i => i.action === 'Login'))}</li>
        </ul>
        <div className="card-header">
          Check Balance data
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{JSON.stringify(ctx.users.filter(i => i.action === 'Check balance'))}</li>
        </ul>
        <div className="card-header">
          Deposits data
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{JSON.stringify(ctx.users.filter(i => i.action === 'Deposit'))}</li>
        </ul>
        <div className="card-header">
          Withdraws data
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{JSON.stringify(ctx.users.filter(i => i.action === 'Withdraw'))}</li>
        </ul> 
      </div>
  )
} 

  
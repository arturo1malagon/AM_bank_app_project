function Balance(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext); 

  function handleCreate(){
    setShow(false);
  }    

  function clearForm(){
    setShow(true);  
  }

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ? (  
              <>
              <br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>View Balance</button>
              </>
            ):(
              <>
              <h5>Balance</h5>
              <div>${ctx.users[0].balance}</div>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Return</button>
              </>
            )}
    />
  )
}
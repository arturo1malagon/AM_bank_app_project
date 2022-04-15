function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const [balance, setBalance]   = React.useState();
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(withdraw);
    if (!validate(withdraw,     'withdraw'))     return;
    setWithdraw(parseInt(withdraw));
    setBalance(parseInt(balance-withdraw));
    ctx.users.push({balance,withdraw});
    setShow(false);
  }    

  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              Withdraw<br/>
              <input type="number" className="form-control" id="withdraw" placeholder="Enter value" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <div>-${withdraw}</div>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New withdraw</button>
              </>
            )}
    />
  )
}
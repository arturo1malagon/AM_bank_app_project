function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
  const ctx = React.useContext(UserContext);  
  const newBalance = parseInt(ctx.users[0].balance);
  console.log(newBalance);

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(deposit);
    if (!validate(deposit,     'deposit'))     return;
    setDeposit(parseInt(deposit));
    console.log(deposit);
    const newBalance = newBalance + deposit;
    console.log(newBalance);
    ctx.users.push({name:'abel',email:'abel@mit.edu',password:'secret',balance:newBalance});
    setShow(false);
  }    

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Deposit<br/>
              <div>Balance: ${ctx.users[0].balance}</div>
              <input type="number" className="form-control" id="deposit" placeholder="Enter value" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <div>+${deposit}</div>
              <div>Balance now: ${ctx.users[0].balance}</div>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New deposit</button>
              </>
            )}
    />
  )
}
function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState(0);
  const [depositNumber, setDepositNumber]   = React.useState(0);
  const [message3, setMessage3] = React.useState('');
  const [objIndex3, setObjIndex3] = React.useState('');
  const [newBalance, setNewBalance] = React.useState(0);
  const [lastBalance, setLastBalance] = React.useState(0);
  const [balance3, setBalance3] = React.useState('');
  const ctx = React.useContext(UserContext);



  function actualUser(){
    const objIndex3 = ctx.users.findIndex(item => item.login === 'yes');
    return objIndex3;
  }

  function calculateNewBalance(deposit, objindex3, ctx){
      setDepositNumber(Number(deposit));
      setLastBalance(Number(ctx.users[objIndex3].balance));
      setNewBalance(Number(lastBalance+depositNumber));
      return(lastBalance, depositNumber, newBalance);
  }

  function handleCreate(){
    setShow(false);

    if (actualUser() > -1) {
      calculateNewBalance(deposit, objIndex3, ctx);
      setMessage3('Your balance is $');
      setBalance3(Number(deposit)+Number(ctx.users[objIndex3].balance));
      ctx.users[objIndex3].balance = (Number(deposit)+Number(ctx.users[objIndex3].balance));
      console.log(ctx.users[objIndex3]);
    } else {
      setMessage3('Please login with your email');
    }
  }

  function clearForm(){
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (
              <>
              deposit<br/>
              <input type="number" className="form-control" id="deposit" placeholder="Enter value" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Make Deposit</button>
              </>
            ):(
              <>
              <h5>{message3} {balance3}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New deposit</button>
              </>
            )}
    />
  )
}
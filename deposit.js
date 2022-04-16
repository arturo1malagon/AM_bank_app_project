function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState();
  const [message3, setMessage3] = React.useState('');
  const [objIndex3, setObjIndex3] = React.useState();
  const [balance3, setBalance3] = React.useState('');
  const ctx = React.useContext(UserContext);

  function actualUser(){
    const objIndex3 = ctx.users.findIndex(item => item.login === 'yes');
    console.log(objIndex3);
    return objIndex3;
  }

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    setShow(false);

    if (!validate(deposit,     'deposit'))     return;

    if (actualUser() > -1) {
      setDeposit(parseInt(deposit));
      setBalance3(parseInt(ctx.users[objIndex3].balance)+deposit);
      setMessage3('Your balance is $');
      setBalance3(JSON.stringify(ctx.users[objIndex3].balance));
    } else {
      setMessage3('Please login with your email');
    }
  }

  function clearForm(){
    setDeposit();
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
              <div>{message3} {balance3}</div>
              <input type="number" className="form-control" id="deposit" placeholder="Enter value" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
              </>
            ):(
              <>
              <h5>{message3} {balance3}</h5>
              <div>Your deposit was ${deposit}</div>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New deposit</button>
              </>
            )}
    />
  )
}
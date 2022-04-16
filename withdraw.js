function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw] = React.useState();
  const [message4, setMessage4] = React.useState('');
  const [objIndex4, setObjIndex4] = React.useState();
  const [balance4, setBalance4] = React.useState('');
  const ctx = React.useContext(UserContext); 

  function actualUser(){
    const objIndex4 = ctx.users.findIndex(item => item.login === 'yes');
    console.log(objIndex4);
    return objIndex4;
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
    
    if (!validate(withdraw,     'withdraw'))     return;

    if (actualUser() > -1) {
      setWithdraw(parseInt(withdraw));
      setBalance4(parseInt(ctx.users[objIndex4].balance)-withdraw);
      setMessage4('Your balance is $');
      setBalance4(JSON.stringify(ctx.users[objIndex4].balance));
    } else {
      setMessage4('Please login with your email');
    }
  }    

  function clearForm(){
    setWithdraw();
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
              <div>{message4} {balance4}</div>
              <input type="number" className="form-control" id="withdraw" placeholder="Enter value" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
              </>
            ):(
              <>
              <h5>{message4} {balance4}</h5>
              <div>Your withdraw was ${withdraw}</div>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New withdraw</button>
              </>
            )}
    />
  )
}
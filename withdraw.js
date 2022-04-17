function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setwithdraw]   = React.useState(0);
  const [withdrawNumber, setwithdrawNumber]   = React.useState(0);
  const [message3, setMessage3] = React.useState('');
  const [objIndex3, setObjIndex3] = React.useState('');
  const [newBalance, setNewBalance] = React.useState(0);
  const [lastBalance, setLastBalance] = React.useState(0);
  const [balance3, setBalance3] = React.useState('');
  const ctx = React.useContext(UserContext);


  function handleCreate(){
    setShow(false);

    const objIndex3 = ctx.users.findIndex(item => item.login === 'yes');

    if (objIndex3 > -1) {
      if (Number(withdraw)<=Number(ctx.users[Number(objIndex3)].balance)) {
          setBalance3(Number(ctx.users[Number(objIndex3)].balance)-Number(withdraw));
          ctx.users[Number(objIndex3)].balance = (Number(ctx.users[Number(objIndex3)].balance)-Number(withdraw));
          console.log(ctx.users[Number(objIndex3)]);
          setMessage3('Your balance is $');
      } else {
        setMessage3('Not enough funds!, Your balance is $'); 
      }
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
      header="withdraw"
      status={status}
      body={show ? (
              <>
              withdraw<br/>
              <input type="number" className="form-control" id="withdraw" placeholder="Enter value" value={withdraw} onChange={e => setwithdraw(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Make withdraw</button>
              </>
            ):(
              <>
              <h5>{message3} {balance3}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New withdraw</button>
              </>
            )}
    />
  )
}
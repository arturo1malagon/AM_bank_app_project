function Balance(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [message2, setMessage2] = React.useState('');
  const [objIndex2, setObjIndex2] = React.useState(0);
  const [balance2, setBalance2] = React.useState('');
  const ctx = React.useContext(UserContext); 

  function actualUser(){
     const objIndex2 = ctx.users.findIndex(item => item.login === 'yes');
     console.log(objIndex2);
     return objIndex2;
  }

  function handleCreate(){
    setShow(false);

    if (actualUser() > -1) {
      setMessage2('Your balance is $');
      setBalance2(JSON.stringify(ctx.users[objIndex2].balance));
    } else {
      setMessage2('Please login with your email');
    }
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
              <h5>{message2} {balance2}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Return</button>
              </>
            )}
    />
  )
}
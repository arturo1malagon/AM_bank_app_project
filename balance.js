function Balance(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [message2, setMessage2] = React.useState('');
  const [objIndex2, setObjIndex2] = React.useState('');
  const [balance2, setBalance2] = React.useState('');
  const ctx = React.useContext(UserContext); 

  function handleCreate(){
    setShow(false);
    
    const objIndex2 = ctx.users.findIndex(item => item.login === 'yes');

    if (objIndex2 > -1) {
      setMessage2('Your balance is $');
      setBalance2(JSON.stringify(ctx.users[Number(objIndex2)].balance));
      console.log(ctx.users[Number(objIndex2)]);
      ctx.users.push({action: 'Check balance',email: (ctx.users[Number(objIndex2)].email),createDate:Date().toLocaleString()});
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
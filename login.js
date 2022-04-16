function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [GreetingMessage, setGreetingMessage] = React.useState('Please Create Account');
  const [AEmail, setAEmail]     = React.useState(false);
  const [APass, setAPass]       = React.useState(false);
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function userExists(email) {
    return ctx.users.find((item) => {
      return item.email === email;
    })
  }
  
  function UpdateLogin(email) {
    const objIndex = ctx.users.findIndex(item => item.email === email );
    ctx.users[objIndex].login = 'yes';
    console.log(ctx.users[objIndex]);
  }


  function handleCreate(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;

    setShow(false);
    console.log(userExists(email));

    if (userExists(email) !== undefined) {
      setAEmail(true);
      setGreetingMessage('Welcome Back!');
      UpdateLogin(email);
    } else {
      setAEmail(false);
      setGreetingMessage('Please Create Account'); 
    }

    console.log(AEmail, GreetingMessage);
  }    


  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }


  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
              </>
            ):(
              <>
              <h5>{GreetingMessage}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Return</button>
              </>
            )}
    />
  )
}

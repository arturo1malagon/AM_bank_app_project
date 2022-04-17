function Home(){
  return (
    <Card
      bgcolor="primary"
      header="BadBank Home Page"
      title="Welcome to our bank"
      text="Please feel free to create an account or login. In our bank you can review your balance, make deposits and withdraws."
      body={(<img src="pngwing.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

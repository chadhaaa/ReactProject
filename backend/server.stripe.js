
app.get('/connected_accounts',async (req,res)=>{
    const accounts = await stripe.accounts.list({limit:10});
    res.send(accounts);
  })
  app.post('/connected_accounts',async (req,res)=>{
    const newCustomer = {
      email: req.body.email,
      name: req.body.name,
      country:'US',
      type :'custom',
      capabilities: {
        card_payments: { requested:true },
        transfers: {requested: true},
      }
    }
      console.log(await stripe.accounts.list())
      const account = await stripe.accounts.create(newCustomer);
      res.json(account);
  })
  
  
  
  app.put('/connected_accounts/:id_connected_account',async (req,res)=>{
    
    const account = await stripe.accounts.update(req.params.id_connected_account,{
      business_type: 'individual',
      individual: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        address: {
          line1: req.body.address,
          city: req.body.city,
          postal_code: req.body.postal_code,
          state: req.body.state,
          country: req.body.country,
        },
        
        // rest of business informations
      },
    });
    res.json(account);
  })
  
  // get conected account
  
  app.get('/get_connected_account/:id_connected_account',async (req,res)=>{
    const account = await stripe.accounts.retrieve(req.params.id_connected_account);
    res.json(account);
  })
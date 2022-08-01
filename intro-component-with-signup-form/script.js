const form = document.querySelector(".form");

const validation = new JustValidate('.form');

validation
  .addField('#first-name', [
    /*
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    */
    {
      rule: 'required',
      errorMessage: 'First Name cannot be empty',
    }
  ])
  .addField('#last-name', [
    /*
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    */
    {
      rule: 'required',
      errorMessage: 'Last Name cannot be empty',
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email cannot be empty',
    },
    {
      rule: 'email',
      errorMessage: 'Looks like this is not an email',
    },
  ])
  .addField('#password', [
    /*
    {
      rule: 'password'
    },
    */
    
    {
      rule: 'required',
      errorMessage: 'Password cannot be empty',
    }
  ])
  .onSuccess(() => {
    form.submit();
  });

//inputmask
  const form = document.querySelector('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);

 new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },

  messages: {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Недопустимый формат',
      maxLength: 'Недопустимый формат'
    },

    tel: {
      required: 'Недопустимый формат',
      function: 'Недопустимый формат'
    }
  },

  submitHandler: function(thisFrom) {
    let formData = new FormData(thisFrom);
  
    let xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 2) {
         {
          console.log('Отправлено');
        }
      }
    }
  
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisFrom.reset();
  }
 });

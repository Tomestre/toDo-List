$('#add').on( "change", function( event ) {
        event.preventDefault();

        if($('#input').val() != null){
        
            $('#lista').append(
            `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${$('#input').val()}</span>
            <i class="far fa-trash-alt delete"></i>
            </li>`);

            $('input').val('')
        }
    
    
  });

  $('i').on('click', (event)=>{
    $(event.target).parent().remove()
  });

  $('#search').on('keyup', (event)=>{
    let valorDigitado = $(event.target).val().toLowerCase();

    

    $('li').each((item)=>{

      const htmlLi = $('li')[item]
      const textLi = htmlLi.textContent.toLowerCase()

      if(!textLi.includes(valorDigitado)){
        htmlLi.classList.add('hidden')
        htmlLi.classList.remove('d-flex')

      }

      if(textLi.includes(valorDigitado)){
        htmlLi.classList.add('d-flex')
        htmlLi.classList.remove('hidden')

      }

     
    
    })

    
    
  
  });
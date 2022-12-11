$('#add').on( "change", function( event ) {
        event.preventDefault();

       $('#lista').append(
        `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${$('#input').val()}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`)
    
    
  });
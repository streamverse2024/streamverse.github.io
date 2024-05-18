$(document).on('focusin','#input-email',function(){
    var $this   = $(this);
    var mask    = $this.data('mask');
    handleMask(mask, $this);
    $('#span-label-btn-inscrever').text('INSCREVER');
    $('#input-email').val('');
    $('#span-text-msg-form-inscrever').css('visibility', 'hidden');
});

handleMask = (mask, $this) => {
    if (mask === 'email') {
        $this.inputmask("email");
    }
}

$('#div-btn-inscrever').on('click', function(){
    let emailRegex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValue = $('#input-email').val();
    if(!!emailValue && emailRegex.test(emailValue)){
        $('#span-label-btn-inscrever').text('✔');
        $('#input-email').val('');
        $('#span-text-msg-form-inscrever').css('visibility', 'visible');
    }
});
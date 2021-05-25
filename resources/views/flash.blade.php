<script>
    @if (session()->has('flash_message'))
        Swal.fire({
        title : "{{ session('flash_message.title') }}",
        message : "{{ session('flash_message.message') }}",
        type : "{{ session('flash_message.class') }}",
        timer : 5000,
        showConfirmButton : false,
        html : $('<div>')
            .addClass('some-class')
            .text('{{ session('flash_message.message') }}'),
        animation:false,
        customClass:'animated tada'
            });
    @endif
</script>

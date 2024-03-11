<script>window.onscroll = function() {myFunction()};

function myFunction() {
    var subheaderFarbe = document.querySelector('.subheader .farbe');
    if (window.pageYOffset > 100) { // Замените 50 на значение, после которого вы хотите начать прокрутку
        subheaderFarbe.style.position = 'fixed';
        subheaderFarbe.style.top = '0';
    } else {
        subheaderFarbe.style.position = 'static';
    }
}
</script> 

</section>
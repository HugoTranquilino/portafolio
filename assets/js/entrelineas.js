$(document).ready(function () {
    $("#home").on("click", function () {
        $('#secound-item').hide();
        $('#first-item').show();
        $('#list-trabajos').css('display', 'none');
    });

    $("#work").on("click", function () {
        $('#secound-item').show();
        $('#first-item').hide();
        $('#list-trabajos').css('display', 'block');
        mostrarTrabajos();
    });

    function mostrarTrabajos() {
        const contenedor = document.querySelector('#list-trabajos');
        let html = `<div class="col-md-12">
                        <center>
                            <h1 class="title">Trabajos</h1>
                        </center>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="target">
                                        <center>
                                            <img class="img-item" src="assets/imagenes/contraloria.png">
                                        </center>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="target">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, quia! Suscipit eius voluptas
                                        nesciunt, libero atque ducimus dolorum autem iusto consectetur error, harum accusamus, id quisquam
                                        labore culpa quo? Qui.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="target">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, quia! Suscipit eius voluptas
                                        nesciunt, libero atque ducimus dolorum autem iusto consectetur error, harum accusamus, id quisquam
                                        labore culpa quo? Qui.</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="target">
                                        <center>
                                            <img class="img-item" src="assets/imagenes/onbit.png">
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="target">
                                        <center>
                                            <img class="img-item" src="assets/imagenes/tec.jpg">
                                        </center>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="target">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, quia! Suscipit eius voluptas
                                        nesciunt, libero atque ducimus dolorum autem iusto consectetur error, harum accusamus, id quisquam
                                        labore culpa quo? Qui.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        contenedor.innerHTML = html;
    }
});
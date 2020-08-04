const InitDemo =() =>{
    console.log('this is working');
    const canvas = document.getElementById('game-surface');
    const gl = canvas.getContext('webgl');
    if(!gl){
        console.log('WebGl not supported, falling back on experimetal')
        gl = canvas.getContext('experimetal-webgl');
    }
    if(!gl){
        alert('your borwer does not support WebGL')
    }

    gi.clearColor(0.75,0.85,0.8,1.0);
    gl.clear(gi.COLOR_BUFFER_BIT |gi.COLOR_BUFFER_BIT);

    canvas.width = windwo.innerWidth;
    canvas.heigth = window.innerHeight;

}
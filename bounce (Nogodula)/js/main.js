const scene = new THREE.Scene();
//scene.background = new THREE.Color("#C0FF33");
const camera = new THREE.OrthographicCamera();

// Jvie's Variables
let xSpeed = 0.0029;
let ySpeed = 0.0039;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

const planeGeometry = new THREE.PlaneGeometry( 0.35, 0.2 );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const jvie = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( jvie );


camera.position.z = 1;
jvie.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));

function animate() {
    requestAnimationFrame( animate );

    //Start Animate Code Here: ???
    
    //Position "X"
    jvie.position.x += xSpeed;
    
    //Console Logs of Browser
    console.log(jvie.position.x);
    console.log(jvie.position.y);
    console.log(jvie.position.z);
    
    //If Statement
    if (jvie.position.x > 0.90)
    {
        xSpeed = -0.0029;
        //jvie.material.color.set("#C0FF33"); 
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }
    if (jvie.position.x < -0.90)
    {
        xSpeed = 0.0029;
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }
    
    //Position "Y"
    jvie.position.y += ySpeed;

    if (jvie.position.y > 0.92)
    {
        ySpeed = -0.0029;
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }
    if (jvie.position.y < -0.92)
    {
        ySpeed = 0.0029;
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }

    //Position "X"
    jvie.position.x += xSpeed;

    if (jvie.position.x > 0.90)
    {
        xSpeed = -0.0029;
        //jvie.material.color.set("#C0FF33"); 
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }
    if (jvie.position.x < -0.90)
    {
        xSpeed = 0.0029;
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }

    //Position "Y"
    jvie.position.y += ySpeed;

    if (jvie.position.y > 0.92)
    {
        ySpeed = -0.0029;
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }
    if (jvie.position.y < -0.92)
    {
        ySpeed = 0.0029;
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }

    //Position "X"
    jvie.position.x += xSpeed;

    if (jvie.position.x > 0.90)
    {
        xSpeed = -0.0029;
        //jvie.material.color.set("#C0FF33"); 
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }
    if (jvie.position.x < -0.90)
    {
        xSpeed = 0.0029;
        jvie.scale.x -= 0.1;
        jvie.scale.y -= 0.1;
    }


    //End Animate Code Here: ???
    renderer.render( scene, camera );
}
animate();
// Setup for a-frame
AFRAME.registerComponent('samplehandler', {
    init: function () {
        console.log("samplehandler init...")
        let marker = this.el;
        //let marker = this.el.sceneEl;

        marker.addEventListener('markerFound', function () {
            console.log("markerFound...");
            // instruction にフェードアウトクラスを追加
            document.querySelector('.searchBack').classList.add('fadeout');        
        }.bind(this));

        marker.addEventListener('markerLost', function() {
            console.log("markerLost...");
            // instruction にフェードアウトクラスを追加
            document.querySelector('.searchBack').classList.remove('fadeout');
        }.bind(this));
    }
});

AFRAME.registerComponent('modify-materials', {
    init: function () {
        let tex = new THREE.TextureLoader().load('../resources/Map-COL.jpg');

        // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
                console.log("node.name:", node.name);
                if (node.name == "LeePerrySmith") {
                    // node.material.color.set('red');
                    node.material.map = tex;
                }
            });
        });
    }
});

window.onload = function() {
    console.log("window loaded...");
};

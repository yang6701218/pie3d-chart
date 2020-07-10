const { Scene } = spritejs;
const { shaders } = spritejs.ext3d;

export default function initSprite(container){
       
     const scene = new Scene({
        container,
        displayRatio: 2,
      });

      const layer = scene.layer3d('fglayer', {
        pointLightColor:"#ffffff80",
        pointLightPosition:  [1, 3, 1],
        camera: {
          fov: 35,
        },
      });
      layer.camera.attributes.pos = [3, 3, 5];
      layer.camera.lookAt([0, 0, 0]);

      const program = layer.createProgram({
        ...shaders.NORMAL_GEOMETRY,
        cullFace: false,
      });
      
      return { layer,program }
}
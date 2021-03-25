import React from 'react';
import AvatarEditor from 'react-avatar-editor'

const ImageShow = (props) => {


  if (!props.data) {
    return <div> </div>;
  }


  const [inference,setInference] = useState(false);
  const [new_image,setImage] = useState(null);
  // Has to be configured for when to be executed

  // THIS ISN'T WORKING! I get the idea of Hooks though....
  useEffect(() => {
    const inference = async inference(filename) {
      const response = await axios.post('http://127.0.0.1:5557/inference',
        { "filename": filename
        });

      // SET STATE HERE.
    }
    inference(filename);
  },[]);





  let img_string = "data:image/bmp;base64,"
  let encoded = props.data
  var image = new Image();
  img_string = img_string + props.data
  image.src = img_string
  //image.src = "http://localhost:5557/static/2_test.bmp"
  //console.log(props.data.slice(2,props.data.length))

  // when 'clicking the image, perform inference. draws the bounding boxes?'

  return (
      <div className="image-style">
        <AvatarEditor
            image={image.src}
            width={400}
            height={400}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1.2}
            rotate={0}
          />
          <div>
              <button onClick={() => setImage()}type="button" className="btn btn-dark">Inference</button>
          </div>
      </div>

  )
}

export default ImageShow;

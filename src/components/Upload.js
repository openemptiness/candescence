import React from 'react';
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios';
//import ImageShow from './image_show';



class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      data: null,
      index: 0
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);

  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', "nonsense");

    this.upload_file(data);


  }

  async upload_file(data) {
    const response = await axios.post('http://127.0.0.1:5557/upload',
      data);

    const new_data = await Buffer.from(response.data,'binary').toString('base64');
    //console.log(response.data.bbs);
    this.setState({data:new_data});
  }

  //         <ImageShow data={this.state.data} />

  render() {
    return (
      <div>
        <br/>
        <br/>
        <div className="field">
          <label className="label"> Select a File</label>
          <form onSubmit={this.handleUploadImage}>
              <div className="ui form ">
                <input ref={(ref) => { this.uploadInput = ref; }} type="file"  />
                <button  className="ui button">Upload</button>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Upload;

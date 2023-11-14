export const uploadGameImage = async (file) => {

  try {
    if(!file) return {error:false, errorMsg: '', imgUrl: ''}; // No file selected (or file is null
    
    const image = new FormData();
    image.append("file", file);
    image.append("cloud_name", 'dayyupv1u');
    image.append("upload_preset", 'gns-games');                  

    const res = await fetch('http://api.cloudinary.com/v1_1/dayyupv1u/image/upload', {
        method: "POST",
        body: image,
    });

    const data = await res.json();         
    
    return {error:false, errorMsg: '', imgUrl: data.secure_url};

  } catch (error) {      
    return {error:true, errorMsg: error.message, imgUrl: ''};      
  }    
}

export const uploadUserImage = async (file) => {

  try {
    const image = new FormData();
    image.append("file", file);
    image.append("cloud_name", 'dayyupv1u');
    image.append("upload_preset", 'gns-users');              

    const res = await fetch('http://api.cloudinary.com/v1_1/dayyupv1u/image/upload', {
        method: "POST",
        body: image,
    });

    const data = await res.json();             

    return {error:false, errorMsg: '', imgUrl: data.secure_url};

  } catch (error) {      
    return {error:true, errorMsg: error.message, imgUrl: ''}; 
  }  
}
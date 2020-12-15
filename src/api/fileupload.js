import axios from "axios";


class Fileupload {
    constructor() {
      this.fileupload = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        // withCredentials: true // => you might need this when having the users in the app
        // XMLHttpRequest from a different domain cannot set cookie values for their own domain unless withCredentials is set to true before making the request.
        // withCredentials indicates whether or not cross-site Access-Control requests should be made using credentials
      });
    }
    handleUploadCv = async (theCvFile) => {
      
      try {
        const res = await this.fileupload.post("/uploadCv", theCvFile);
        return res.data;
      } catch (error) {
        
      }
    };
    saveNewEvent = async (newCv) => {
     
      try {
        const res = await this.fileupload.post("/components/userProfileCv", newCv);
        return res.data;
      } catch (error) {
        
      }
    };
    getEvents = async () => {
        try {
            const res = await this.fileupload.get("/UserDetailsCv")
            
            return res.data
        } catch (error) {
         
        }
    }
  }



  const axiosRequestFunctions = new Fileupload();

  export default axiosRequestFunctions;